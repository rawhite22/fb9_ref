import { useState } from 'react'
// fb
import { dataBase } from '../firebase/config'
import { collection, addDoc } from 'firebase/firestore'

import { useAuthContext } from '../hooks/useAuthContext'

export default function BookForm() {
  const [newBook, setNewBook] = useState('')
  const { user } = useAuthContext()
  const handleSubmit = (e) => {
    e.preventDefault()
    const collectionReference = collection(dataBase, 'books')
    addDoc(collectionReference, { title: newBook, uid: user.uid }).then(() =>
      console.log('success')
    )

    setNewBook('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <span>Add a new book title:</span>
        <input
          required
          type='text'
          onChange={(e) => setNewBook(e.target.value)}
          value={newBook}
        />
      </label>
      <button>Add</button>
    </form>
  )
}
