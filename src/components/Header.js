import { onAuthStateChanged, signOut } from 'firebase/auth';
import {auth} from "../utils/firebase";
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO, SUPPORTED_LANGUAGES } from '../utils/constants';
import { toggleGptSearchView } from '../utils/gptSlice';
import { changeLanguage } from '../utils/configSlice';

const Header = () => {
  
       const navigate = useNavigate();

       const user = useSelector(store => store.user);

       const dispatch = useDispatch();

       const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

       const handleSignOut = () => {

         signOut(auth)
          .then(() => {
         })
         .catch((error) => {
             navigate("/error");
         });
      };

  useEffect(() =>{

  const unsubscribe =  onAuthStateChanged(auth, (user) => {
      if (user)
       {
          const {uid,email,displayName,photoURL} = user;
            dispatch(
               addUser(
                {
                    uid:uid,
                    email:email,
                    displayName:displayName,
                    photoURL:photoURL
               }));
                navigate("/browse")
       } 
      else 
      {
         dispatch(removeUser());
         navigate("/")
      }
    });
    
   return () => unsubscribe();
   // eslint-disable-next-line
  },[]);

    const handleGptSearchclick = () => {
            dispatch(toggleGptSearchView());
    }

    const handleLanguageChange = (e) => {
           dispatch(changeLanguage(e.target.value))
    }

  return (
    <div className='absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between'>
        <img
        className='w-44 mx-auto md:mx-0'
        src={LOGO}
        alt='logo'
        />
       { user && ( 
         <div className='flex p-2'>

         { showGptSearch && ( <select className='p-2 m-2 bg-gray-900 text-white cursor-pointer' onChange={handleLanguageChange}>
             {SUPPORTED_LANGUAGES.map(lang => <option key={lang.identifier} value={lang.identifier}>{lang.name}</option>)}
           </select>
         )
        }
          <button
              className='py-1 px-1 mx-1 my-1 bg-purple-800 text-white rounded-lg'
               onClick={handleGptSearchclick}>
             {showGptSearch ? "HomePage" : "GPT SEARCH"}
          </button>
          <img  
             className='w-12 h-12'
             alt='userIcon'
             src={user?.photoURL}
          />
          <button onClick={handleSignOut} 
           className='font-bold text-white'>
            (Sign Out)
          </button>
        </div>
       )}
    </div>
  );
};

export default Header