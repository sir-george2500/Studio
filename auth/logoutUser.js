import {  signOut } from "firebase/auth";
import {getAuth} from '../app/api/firebaseAuth';


async function logOut(){
    try {
        await signOut(getAuth);
    } catch (error) {
       console.log(error) 
    }
}

export default logOut;