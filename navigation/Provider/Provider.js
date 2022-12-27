import { View, Text } from 'react-native'
import React from 'react'
import { AuthProvider } from '../../auth/AuthProvider';
import AuthRoute from './AuthRoute';

 function Provider() {
  return (
    <AuthProvider>
        <AuthRoute />
    </AuthProvider>
  )
}

export default Provider;