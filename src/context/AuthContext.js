import { createContext, useEffect, useReducer } from 'react'

import { auth } from '../firebase/config'
import { onAuthStateChanged } from 'firebase/auth'

export const AuthContext = createContext()

export const authReducer = (state, action) => {
  switch (action.type) {
    case 'AUTH_IS_READY':
      return { ...state, user: action.payload, authIsReady: true }
    case 'LOGIN':
      return { ...state, user: action.payload }
    case 'LOGOUT':
      return { ...state, user: null }
    default:
      return state
  }
}

export const AuthContextProvider = ({ children }) => {
  // hooks
  const [state, dispatch] = useReducer(authReducer, {
    user: null,
    authIsReady: false,
  })
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      dispatch({ type: 'AUTH_IS_READY', payload: user })
      unSubscribe()
    })
  }, [])

  console.log('auth context state:', state)
  // returned jsx

  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  )
}
