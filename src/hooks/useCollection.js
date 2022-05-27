import { useState, useEffect, useRef } from 'react'
// fb
import { dataBase } from '../firebase/config'
import { collection, onSnapshot, query, where } from 'firebase/firestore'

// c argument stands for collection
export const useCollection = (c, _q) => {
  const [documents, setDocuments] = useState(null)
  const [error, setError] = useState(null)

  const Q = useRef(_q).current
  useEffect(() => {
    let collectionRefernce = collection(dataBase, c)

    if (Q) {
      collectionRefernce = query(collectionRefernce, where(...Q))
    }

    const unsubscribe = onSnapshot(collectionRefernce, (snapshot) => {
      let results = []
      snapshot.docs.forEach((doc) => {
        results.push({ id: doc.id, ...doc.data() })
      })
      setDocuments(results)
    })
    return () => unsubscribe()
  }, [c, query])
  return { documents }
}
