import React, { createContext, useContext, useCallback, useState } from 'react'
import { auth } from '../../services/auth'
import { useNotification } from '../NotificationProvider'
const AuthContext = createContext()

const INITIAL_STATE = {
  loading: false,
  user: null
}

export const AuthProvider = ({ children }) => {
  const [sesion, setSesion] = useState(() => {
    return INITIAL_STATE
  })

  const { notify } = useNotification()

  const login = useCallback(async (payload) => {
    try {
      setSesion(prevSesion => ({ ...prevSesion, loading: true }))
      const { data } = await auth.login(payload)
      setSesion({
        loading: false,
        user: {
          user: payload.username,
          token: data?.data?.token
        }
      })
    } catch (err) {
      notify({ message: 'invalid username or password', type: 'error' })
      setSesion(prevSesion => ({ ...prevSesion, loading: false }))
    }
  }, [])

  const logout = useCallback(() => {
    setSesion(INITIAL_STATE)
  }, [])

  return (
    <AuthContext.Provider value={{ login, logout, ...sesion }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)

export default AuthContext
