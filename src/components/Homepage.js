import React, { useEffect } from 'react'
//import setP from './Signinusing' './Signinusing'
import Signin from './Signinusing'
import { app } from './Firebase'
//import { getAuth } from 'firebase/auth'
import { getAuth, signInWithPopup, GoogleAuthProvider, setPersistence, browserLocalPersistence, onAuthStateChanged } from "firebase/auth";
import { useState } from 'react';


function Homepage() {
    const auth=getAuth(app);
    const provider = new GoogleAuthProvider();
    const [user, setUser] = useState(null);

    // Function to handle sign-in using Google Popup
    const handleSignIn = () => {
        setPersistence(auth, browserLocalPersistence) // Set the persistence (local or session)
            .then(() => {
                return signInWithPopup(auth, provider);
            })
            .then((result) => {
                // Successful login
                const user = result.user;
                setUser(user); // Store user in state
                console.log('User signed in:', user);
            })
            .catch((error) => {
                // Handle sign-in errors
                console.error('Sign-in error:', error);
            });
    };
    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth,(user)=>
        {
            if(user)
            {
                setUser(user);
            }
            else{
                setUser(null);
            }
        });
        return ()=>unsubscribe();
    },[])
    console.log(auth.currentUser)
  return (
    <div className='text-white  mt-44 '>
        <div className='flex flex-col gap-36 sm:gap-12'>
        <div className='flex flex-col float-left ml-6'>
       <span className='sm:text-7xl text-5xl font-bold '>Ease your work</span>
        <span className='sm:text-7xl text-5xl font-bold mt-4 text-cyan-400  '>with helipy</span>
        <div className='flex gap-4 my-9'>
            <div className='w-28 h-10  bg-transparent flex justify-center items-center rounded-3xl border-white border-[1px] text-white cursor-pointer hover:scale-105' onClick={()=>{handleSignIn()}}>Sign In</div>
            <div className='w-28 h-10 text-black bg-white flex justify-center items-center rounded-3xl cursor-pointer hover:scale-105'>About us</div>
        </div>
        </div>
        

        </div>


      


    </div>
  )
}

export default Homepage