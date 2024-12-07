import React, { useRef, useState } from 'react';
import Header from './Header';
import { checkValidData } from '../utils/validate';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { BG_URL, USER_AVATAR } from '../utils/constants';

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const dispatch = useDispatch();

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    const fullNameValue = name.current?.value || '';
    const emailValue = email.current.value;
    const passwordValue = password.current.value;

    const message = checkValidData(emailValue, passwordValue, fullNameValue);
    setErrorMessage(message);
    if (message) return;

    if (!isSignInForm) {
      // Sign Up Logic
      createUserWithEmailAndPassword(auth, emailValue, passwordValue)
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: fullNameValue,
            photoURL: USER_AVATAR,
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(`${errorCode} - ${errorMessage}`);
        });
    } else {
      // Sign In Logic
      signInWithEmailAndPassword(auth, emailValue, passwordValue)
        .then((userCredential) => {
          const user = userCredential.user;
          dispatch(
            addUser({
              uid: user.uid,
              email: user.email,
              displayName: user.displayName,
              photoURL: user.photoURL,
            })
          );
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(`${errorCode} - ${errorMessage}`);
        });
    }
  };

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div className="relative w-full h-screen">
      <Header />
      {/* Background Image */}
      <img
        className="w-full h-full object-cover absolute inset-0"
        src={BG_URL}
        alt="Background"
      />

      {/* Form */}
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-full sm:w-4/12 md:w-4/12 lg:w-4/12 absolute p-8 bg-black my-8 mx-auto right-0 left-0 text-white bg-opacity-80 z-10"
      >
        <h1 className="font-bold text-2xl py-2">
          {isSignInForm ? 'Sign In' : 'Sign Up'}
        </h1>

        {!isSignInForm && (
          <div className="relative my-3">
            <label htmlFor="fullName" className="text-gray-300 text-sm">
              Full Name
            </label>
            <input
              id="fullName"
              ref={name}
              type="text"
              className="p-3 w-full bg-gray-700 rounded-lg text-white text-sm mt-2"
              placeholder="John Doe"
            />
          </div>
        )}

        <div className="relative my-3">
          <label htmlFor="email" className="text-gray-300 text-sm">
            Email Address
          </label>
          <input
            id="email"
            ref={email}
            type="text"
            className="p-3 w-full bg-gray-700 rounded-lg text-white text-sm mt-2"
            placeholder="example@domain.com"
          />
        </div>

        <div className="relative my-3">
          <label htmlFor="password" className="text-gray-300 text-sm">
            Password
          </label>
          <input
            id="password"
            ref={password}
            type="password"
            className="p-3 w-full bg-gray-700 rounded-lg text-white text-sm mt-2"
            placeholder="8+ characters, 1 digit, 1 special char"
          />
        </div>

        <p className="text-red-500 font-bold text-sm py-2">{errorMessage}</p>

        <button
          className="p-3 my-4 bg-red-700 w-full rounded-lg"
          onClick={handleButtonClick}
        >
          {isSignInForm ? 'Sign In' : 'Sign Up'}
        </button>

        <p
          className="py-3 cursor-pointer text-sm hover:underline"
          onClick={toggleSignInForm}
        >
          {isSignInForm
            ? 'New to Netflix? Sign up now'
            : 'Already registered? Sign in now'}
        </p>
      </form>
    </div>
  );
};

export default Login;
