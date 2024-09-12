import React, { useEffect, useState } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider, setPersistence, browserLocalPersistence, onAuthStateChanged } from "firebase/auth";
import { app } from './Firebase';

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

function Signin() {
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
    handleSignIn();

    // Automatically check if user is already logged in after refresh
 

    
}

export default Signin;
