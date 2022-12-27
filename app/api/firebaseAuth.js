import * as auth from 'firebase/auth';
import { app } from './firebase';
app
const getAuth = auth.getAuth(app)
export {auth , getAuth};