import React, { createContext, useContext, useCallback, useState } from 'react'
const AuthContext = createContext()

const INITIAL_STATE = {
  loading: false,
  user: null
}

export const AuthProvider = ({ children }) => {
  const [sesion, setSesion] = useState(() => {
    return INITIAL_STATE
  })

  const login = useCallback(payload => {
    setSesion({ user: payload })
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
