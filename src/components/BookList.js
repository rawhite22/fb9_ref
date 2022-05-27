import { dataBase } from '../firebase/config'
import { doc, deleteDoc } from 'firebase/firestore'
export default function BookList({ books }) {
  const handleClick = async (id) => {
    const documentReference = doc(dataBase, 'books', id)
    deleteDoc(documentReference).then(() => console.log('deleted'))
  }

  return (
    <div className='book-list'>
      <ul>
        {books.map((book) => (
          <li key={book.id} onClick={() => handleClick(book.id)}>
            {book.title}
          </li>
        ))}
      </ul>
    </div>
  )
}
