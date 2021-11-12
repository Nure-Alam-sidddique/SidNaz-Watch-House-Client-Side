import { initializeApp } from "firebase/app";
import firebaseConfig from "./Firebase.config";

const InitializeAuthentication = () => {
   return initializeApp(firebaseConfig);
}
export default InitializeAuthentication;