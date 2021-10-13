import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Login from '../Login'
import Register from '../Register'
import ForgotPassword from '../ForgotPassword'
import RecoveryPassword from '../RecoveryPassword'
import VehicleRegister from '../VehicleRegister'
import Thanks from '../Thanks'
import Connect from '../Connect'
import { useAuth } from '../../Providers/AuthProvider'

const AuthStack = createNativeStackNavigator()
const AppStack = createNativeStackNavigator()

const AuthScreens = () => {
  return (
    <AuthStack.Navigator initialRouteName='login' screenOptions={{ headerShown: false }}>
      <AuthStack.Screen name='login' component={Login} />
      <AuthStack.Screen name='register' component={Register} />
      <AuthStack.Screen name='vehicleRegister' component={VehicleRegister} />
      <AuthStack.Screen name='thanks' component={Thanks} />
      <AuthStack.Screen name='forgotPassword' component={ForgotPassword} />
      <AuthStack.Screen name='recoveryPassword' component={RecoveryPassword} />
    </AuthStack.Navigator>
  )
}

const AppScreens = () => {
  return (
    <AppStack.Navigator initialRouteName='connect' screenOptions={{ headerShown: false }}>
      <AppStack.Screen name='connect' component={Connect} />
    </AppStack.Navigator>
  )
}

const Router = () => {
  const { user } = useAuth()
  return (
    <NavigationContainer>
      {user?.token ? <AppScreens /> : <AuthScreens />}
    </NavigationContainer>
  )
}

export default Router
