import { NavigationContainer } from '@react-navigation/native'
import React, { useContext, useState ,useEffect} from 'react'
import {auth ,getAuth} from '../../app/api/firebaseAuth';
import { AuthContext } from '../../auth/AuthProvider';
import AppNavigator from '../AppNavigation';
import AuthNavigator from '../AuthNavigation';



const AuthRoute = () =>{
    const {user,setUser} = useContext(AuthContext);
    const [initializing, setInitializing] = useState(true);

    const Auth = getAuth;

    const onAuthStateChanged = (user) => {
        setUser(user);
        if (initializing) setInitializing(false);
      };

      useEffect(() => {
        const subscriber = auth.onAuthStateChanged(Auth,onAuthStateChanged);
        return subscriber; // unsubscribe on unmount
      }, []);


    if (initializing) return null;

  return (
    <NavigationContainer>
      {
       user
       ?    
         <AppNavigator /> 
         :   
         <AuthNavigator />
          }  
    </NavigationContainer>
  )
}

export default AuthRoute;