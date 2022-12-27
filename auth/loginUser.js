import { signInWithEmailAndPassword } from "firebase/auth";
import { app } from "../app/api/firebase"; 

/*This module is charge with the responsibility of login the User in Using
the SignInWithEmailAndPassword method that changes the Authentication state*/
async function loginUser (auth,email,password){
    try {   
        await signInWithEmailAndPassword(auth,email,password);
        return true;
    } catch (error) {
        const errorCode = error.code;
        let resultFalse ={
         response:false,
         message:errorCode,
        }
        return resultFalse; 
    }
}

export default loginUser;