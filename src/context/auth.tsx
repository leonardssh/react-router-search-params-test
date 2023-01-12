import { createContext, useContext } from 'react'

export const AuthContext = createContext({
  isLogged: false,
  setLogged: (value: boolean) => {}
})

export const useAuth = () => useContext(AuthContext)
