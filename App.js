import { StatusBar } from 'expo-status-bar'
import React from 'react'
import Router from './src/screens/Router'
import { AuthProvider } from './src/Providers/AuthProvider'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper'
import { ACCENT, PRIMARY } from './src/theme/colors'
import NotificationProvider from './src/Providers/NotificationProvider'

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: PRIMARY,
    accent: ACCENT
  }
}

export default function App () {
  return (
    <PaperProvider theme={theme}>
      <NotificationProvider>
        <AuthProvider>
          <SafeAreaProvider>
            <StatusBar style='auto' />
            <Router />
          </SafeAreaProvider>
        </AuthProvider>
      </NotificationProvider>
    </PaperProvider>
  )
}
