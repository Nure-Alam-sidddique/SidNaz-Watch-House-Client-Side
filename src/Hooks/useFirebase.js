import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import InitializeAuthentication from '../Firebase/Firebase.init';
InitializeAuthentication();
const useFirebase = () => {
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const googleSignIn = () => {
        signInWithPopup(auth, googleProvider).then(result => {
            const user = result.user;
            console.log(user);
        })
    }
    return {
        googleSignIn
    }

};

export default useFirebase;