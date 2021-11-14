import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile
} from "firebase/auth";
import { useEffect, useState } from "react";
import InitializeAuthentication from "../Firebase/Firebase.init";
InitializeAuthentication();
const useFirebase = () => {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [authError, setAuthError] = useState(' ');
  const googleProvider = new GoogleAuthProvider();
  const auth = getAuth();

  const registerUser = (email,name,  password, history) => {
    setIsLoading(true);
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const newUser = { email, displayName:  name };
      setUser(newUser);
      // send name to firebase after Creation

updateProfile(auth.currentUser, {
  displayName:name
})
  .then(() => {
    // Profile updated!
    // ...
  })
  .catch((error) => {
    // An error occurred
    // ...
  });

      history.replace('/');
      setAuthError(' ');
     
    })
    .catch((error) => {
      setAuthError(error.message)
     
    })
    .finally(()=>setIsLoading(false))
  }
  
  const loginUser = (email, password, location, history) => {
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const destination = location?.state?.from || '/';
        history.replace(destination);
        setAuthError(' ')
      })
      .catch((error) => {
       setAuthError(error.message)
      }).finally(() => setIsLoading(false));
  }

  const signInWithGoogle = (location, history) => {
    setIsLoading(true)
    signInWithPopup(auth, googleProvider).then(result => {
      const destination = location?.state?.from || '/';
      history.replace(destination);
        // console.log(result.user);
        setAuthError(' ')
      }).catch((error)=>{
      setAuthError(error.message);
     }).finally(()=>setIsLoading(false))
  };
  useEffect(() => {
    const unSubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      }
      else {
        setUser({});
      }
      setIsLoading(false)
    });
      return () =>  unSubscribed;

  }, []);
  const logOut = () => {
    setIsLoading(true);
    signOut(auth).then(() => {
      setUser({});
    }).finally(()=>setIsLoading(false))
  };
  return {
    user,
    logOut,
    signInWithGoogle,
    registerUser,
    loginUser,
    isLoading,
    authError
  };
};
export default useFirebase;
