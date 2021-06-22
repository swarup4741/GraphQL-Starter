import React, { useState } from 'react';

import { useQuery } from '@apollo/client';

import { getBooksQuery } from '../queries/queries';
import BookDetails from './BookDetails';

const BookList = (props) => {
    const [bookId, setBookId] = useState("")
    const { loading, data } = useQuery(getBooksQuery)
    return (
        <div>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <div id="book-list-wrapper">
                    <h1>Awesome Book collection</h1>
                    <div id="book-list">
                        <ul>
                            {data.books.map((book) => (
                                <li
                                    id="collection"
                                    key={book.id}
                                    onClick={() => setBookId(book.id)}
                                >
                                    {book.name}
                                </li>
                            ))}
                        </ul>
                        {bookId && <BookDetails bookId={bookId} />}
                    </div>
                </div>
            )}
        </div>
    )
}

export default BookList
