import { createContext, useEffect, useState } from "react";
import {createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, onAuthStateChanged, signOut} from 'firebase/auth'
import app from "../../FireBaseConf/FireBaseConf";
import PropTypes from 'prop-types'

export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {
    const [userName, setUserName] = useState(null)
    const [userInfo, setUserInfo] = useState(null)
    const [loading, setLoading] = useState(true)

    const auth = getAuth(app)

    const handleCreateUser = (email, password) => {
       setLoading(true)
       return createUserWithEmailAndPassword(auth, email, password)
    }

    const handleSignIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    useEffect(()=> {
        
        const subscrib = onAuthStateChanged(auth, (user)=> {
            setUserInfo(user)
            setLoading(false)
        });
        return () => {
            subscrib ();
        }
    },[])

    const handleSignOut = () => {
       return signOut(auth)
    }

    const handleUserName = (name) => {
        setUserName(name)
    }

    const authInfo = {
        userInfo,
        handleCreateUser,
        handleSignIn,
        handleSignOut,
        handleUserName,
        userName,
        loading,
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.array.isRequired,
}

export default AuthProvider;