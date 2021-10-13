import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Login from '../Login'
import Register from '../Register'
import ForgotPassword from '../ForgotPassword'
import RecoveryPassword from '../RecoveryPassword'
import Search from '../Search'
import Team from '../Team'
import { useAuth } from '../../Providers/AuthProvider'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Themes from '../Themes'
import More from '../More'
import Messages from '../Messages'
import { PRIMARY } from '../../theme/colors'
import { AntDesign } from '@expo/vector-icons'

const AuthStack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()

const icons = {
  themes: 'appstore-o',
  messages: 'message1',
  team: 'team',
  search: 'search1',
  more: 'bars'
}

const screenOptions = ({ route }) =>
  ({
    headerShown: false,
    tabBarStyle: { backgroundColor: PRIMARY },
    tabBarIcon: ({ color, size }) => {
      return <AntDesign name={icons[route.name]} size={size} color={color} />
    },
    tabBarActiveTintColor: '#c7ac5a',
    tabBarInactiveTintColor: 'gray'
  })

const AuthScreens = () => {
  return (
    <AuthStack.Navigator initialRouteName='login' screenOptions={{ headerShown: false }}>
      <AuthStack.Screen name='login' component={Login} />
      <AuthStack.Screen name='register' component={Register} />
      <AuthStack.Screen name='forgotPassword' component={ForgotPassword} />
      <AuthStack.Screen name='recoveryPassword' component={RecoveryPassword} />
    </AuthStack.Navigator>
  )
}

const AppScreens = () => {
  return (
    <Tab.Navigator
      initialRouteName='messages'
      screenOptions={screenOptions}
    >
      <Tab.Screen name='themes' component={Themes} />
      <Tab.Screen name='messages' component={Messages} />
      <Tab.Screen name='team' component={Team} />
      <Tab.Screen name='search' component={Search} />
      <Tab.Screen name='more' component={More} />
    </Tab.Navigator>
  )
}

const Router = () => {
  const { user } = useAuth()
  return (
    <NavigationContainer>
      {user?.name ? <AppScreens /> : <AuthScreens />}
    </NavigationContainer>
  )
}

export default Router
