import { useState } from 'react'
import { useAuthContext } from './useAuthContext'
// fb
import { auth } from '../firebase/config'
import { createUserWithEmailAndPassword } from 'firebase/auth'

export const useSignup = () => {
  const { dispatch } = useAuthContext()
  const [error, setError] = useState(null)
  const signup = (email, password) => {
    setError(null)
    createUserWithEmailAndPassword(auth, email, password)
      .then((res) => {
        dispatch({ type: 'LOGIN', payload: res.user })
      })
      .catch((err) => setError(err.message))
  }
  return { signup, error }
}
