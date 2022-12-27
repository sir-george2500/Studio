import { createUserWithEmailAndPassword , sendEmailVerification } from "firebase/auth";
import { getFirestore, setDoc , doc } from "firebase/firestore"
import { app } from "../app/api/firebase"; 

  /* this module is charge with the responsiblity of registering the 
  user to firebase */
  
const db = getFirestore(app)

 async function createNewUser(auth, name, email, password) {
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      const uid = res.user.uid;
      const [monetz,verification,role] =[false,false,"creator"];
      const data = {
        id: uid,
        email,
        name,
        monetz,
        verification,
        role,
      };
      const ref = doc(db, 'userDatabase', uid);
      await setDoc(ref, data);
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

  export default createNewUser;