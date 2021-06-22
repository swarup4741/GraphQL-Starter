import React from 'react';

import { motion } from 'framer-motion';

import { useQuery } from '@apollo/client';

import { getBookQuery } from '../queries/queries';

const BookDetails = ({ bookId }) => {
    const { loading, data } = useQuery(getBookQuery, {
        variables: {
            id: bookId,
        },
    })
    return (
        <motion.div
            id="book-details-wrapper"
            initial={{ width: 0 }}
            animate={{ width: "40%" }}
            transition={{ ease: "easeOut" }}
        >
            <h4>Book details here</h4>
            {loading ? (
                <p>loading details...</p>
            ) : (
                // console.log(data)
                <motion.div
                    id="book-details"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                >
                    <h3>{data.book.name}</h3>
                    <p>Genre: {data.book.genre}</p>
                    <p>Author: {data.book.author.name}</p>
                    <p>Author's age : {data.book.author.age}</p>
                    <p>All books by this author</p>
                    <ul>
                        {data.book.author.books.map((book) => (
                            <li id="books" key={book.id}>
                                {book.name}
                            </li>
                        ))}
                    </ul>
                </motion.div>
            )}
        </motion.div>
    )
}

export default BookDetails
