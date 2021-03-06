import { useState } from 'react'
import { auth } from '../firebase/config'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { useAuthContext } from '../hooks/useAuthContext'

export const useLogin = () => {
  const [error, setError] = useState(null)
  const { dispatch } = useAuthContext()
  const login = (email, password) => {
    setError(null)
    signInWithEmailAndPassword(auth, email, password)
      .then((user) => {
        dispatch({ type: 'LOGIN', payload: user.user })
      })
      .catch((e) => console.log(e))
  }
  return { login, error }
}
