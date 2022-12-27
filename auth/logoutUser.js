import { signOut } from "firebase/auth";



async function logOut(){
    try {
        await signOut();
    } catch (error) {
       console.log(error) 
    }
}

export default logOut;