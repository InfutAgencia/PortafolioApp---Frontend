import React, { createContext, useCallback, useContext, useState } from 'react'
import { Snackbar } from 'react-native-paper'
import { ACCENT, RED } from '../../theme/colors'

const NotificationContext = createContext()

const INITIAL_STATE = {
  message: '',
  type: ''
}

const NotificationProvider = ({ children }) => {
  const [notification, setNotification] = useState(INITIAL_STATE)

  const notify = useCallback((payload) => {
    setNotification(payload)
  }, [])

  return (
    <NotificationContext.Provider value={{ notify }}>
      <Snackbar
        visible={Boolean(notification.message)}
        onDismiss={() => setNotification(prevState => ({ ...prevState, message: '' }))}
        duration={5000}
        style={{
          backgroundColor: notification.type === 'error' ? RED : ACCENT,
          flex: 1,
          justifyContent: 'flex-start'
        }}
      >
        {notification?.message}
      </Snackbar>
      {children}
    </NotificationContext.Provider>
  )
}

export const useNotification = () => useContext(NotificationContext)

export default NotificationProvider
