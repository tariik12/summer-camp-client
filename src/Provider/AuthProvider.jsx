import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { app } from "../../firebase.config";
import axios from "axios";

export const AuthContext = createContext(null)
const auth = getAuth(app);
const AuthProvider = ({children}) => {
    
    const [user,setUser] = useState(null)
    const [loading,setLoading] = useState(true)
    const googleProvider = new GoogleAuthProvider();

    
    const handleGoogleProvider =() =>{
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }
    
    useEffect(() =>{
        const unsubscribe =  onAuthStateChanged(auth,currentUser =>{
            setUser(currentUser)
            console.log('current user', currentUser);
            
            setLoading(false)
           if(currentUser){
            axios.post('https://summer-language-camp-server.vercel.app/jwt', {email:currentUser.email})
            .then(data =>{
                // console.log(data)
                localStorage.setItem('access-token',data.data.token)
            })
           
           }
           else{
            localStorage.removeItem('access-token')
        }
            

        })
        return () =>{
            return unsubscribe();
        }
    },[])

    const createUser = (email,password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const singIn = (email,password) =>{
        setLoading(true)
       return signInWithEmailAndPassword(auth, email, password)
    }
    const updateUserProfile = (name, photo) =>{
        setLoading(true)
        return updateProfile(auth.currentUser, {
           displayName:name, photoURL: photo 
        })
    }

    const logOut = () =>{
        setLoading(true)
        return signOut(auth)
    }
    const authInfo = {
        user,
        loading,
        createUser,
        singIn,
        logOut,
        updateUserProfile,
        handleGoogleProvider
    }
    return (
        <AuthContext.Provider value={authInfo}>
          {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;