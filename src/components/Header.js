import { onAuthStateChanged, signOut } from 'firebase/auth';
import {auth} from "../utils/firebase";
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO } from '../utils/constants';

const Header = () => {
  
       const navigate = useNavigate();

       const user = useSelector(store => store.user);

       const dispatch = useDispatch();

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
  },[]);

  return (
    <div className='absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between '>
        <img
        className='w-44'
        src={LOGO}
        alt='logo'
        />
       { user && ( 
         <div className='flex px-2'>
          <img  
             className='w-20 h-15'
             alt='userIcon'
             src={user?.photoURL}
          />
          <button onClick={handleSignOut} className='bg-red-50'>Sign Out</button>
        </div>
       )}
    </div>
  );
};

export default Header