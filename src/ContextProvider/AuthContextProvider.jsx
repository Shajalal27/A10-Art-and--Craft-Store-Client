import  { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import auth from '../firebase/firebase.config';

export const AuthContext = createContext(null);

//socia
const AuthContextProvider = ({children}) => {

    const [user, setUser] = useState(null);

    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signInUser = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut = () =>{
        return signOut(auth);
    }

    const googleLogIn = 

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
        logOut
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