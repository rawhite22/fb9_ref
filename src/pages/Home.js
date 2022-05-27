import { useState, useEffect } from 'react'
import BookList from '../components/BookList'
import BookForm from '../components/BookForm'
import { useCollection } from '../hooks/useCollection'
import { useAuthContext } from '../hooks/useAuthContext'
// fb
// import { dataBase } from '../firebase/config'
// import { collection, getDocs } from 'firebase/firestore'

export default function Home() {
  const { user } = useAuthContext()
  const { documents: books } = useCollection('books', ['uid', '==', user.uid])

  return (
    <div className='App'>
      {books && <BookList books={books} />}
      <BookForm />
    </div>
  )
}

/* 
  not realtime data
  useEffect(() => {
    const ref = collection(dataBase, 'books')
    getDocs(ref).then((snapshot) => {
      let results = []
      snapshot.docs.forEach((doc) => {
        results.push({ id: doc.id, ...doc.data() })
      })
      setBooks(results)
    })
  }, [])

  */
