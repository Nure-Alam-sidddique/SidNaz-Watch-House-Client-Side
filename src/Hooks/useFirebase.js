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

  const registerUser = (email,password, name,  history) => {
    setIsLoading(true);
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      setAuthError(' ');
      const newUser = { email, displayName:  name };
      setUser(newUser);
       
      // Send data Database
      saveToDatabase(email, name, "POST");
      // send name to firebase after Creation

updateProfile(auth.currentUser, {
  displayName:name
})
  .then(() => {})
  .catch((error) =>{});

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
      //  insrte data afer login
     const user = result.user;
      saveToDatabase(user.email, user.displayName, 'PUT');
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
  const logOut = (history)=> {
    setIsLoading(true);
    signOut(auth).then(() => {
      history.push("/home");
     setUser({});
    }).finally(()=>setIsLoading(false))
};
  
const saveToDatabase = (email, displayName, method) => {
const users= {email, displayName}
  // axios.post("http://localhost:5000/users", user).then((res) => {
  //   if (res.data.insertedId) {
  //     alert("User Data Successfully Send");
  //   }
  // });
  fetch('http://localhost:5000/users', {
    method: method,
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(users)
  }).then(res => res.json()).then(data => {
    
    console.log(data);
    if (data.insertedId || data.upsertedId) {
      alert("User Data Successfully Send");
    }
  });
}
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
