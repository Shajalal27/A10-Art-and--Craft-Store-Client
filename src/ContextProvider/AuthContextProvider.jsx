import  { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import auth from '../firebase/firebase.config';
import { GoogleAuthProvider } from 'firebase/auth';
import { GithubAuthProvider } from 'firebase/auth';
import { TwitterAuthProvider } from 'firebase/auth';




export const AuthContext = createContext(null);

//social provider

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();
const twitterProvider = new TwitterAuthProvider();

const AuthContextProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signInUser = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut = () =>{
        return signOut(auth);
    }
    // google log in
    const googleLogIn = () =>{
        return signInWithPopup(auth, googleProvider);
    }
    // google log in
    const githubLogIn = () =>{
        return signInWithPopup(auth, githubProvider);
    }
    // google log in
    const twitterLogIn = () =>{
        return signInWithPopup(auth, twitterProvider);
    }

    useEffect( () =>{
       const unSubscribe = onAuthStateChanged(auth, createUser =>{
            setUser(createUser)
            console.log('inside the auth provider', createUser)
        })
        return () =>{
            unSubscribe();
        }
    }, [])

    const authInfo ={
        user,
        createUser, 
        signInUser,
        googleLogIn,
        githubLogIn,
        twitterLogIn,
        logOut, 
        loading
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContextProvider;

AuthContextProvider.propTypes = {
    children: PropTypes.node
}