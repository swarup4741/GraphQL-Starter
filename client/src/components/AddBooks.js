import React, { useState } from 'react';

import {
  useMutation,
  useQuery,
} from '@apollo/client';

import {
  addBookMutation,
  getAuthorsQuery,
  getBooksQuery,
} from '../queries/queries';

function AddBooks() {
    const [name, setName] = useState("")
    const [genre, setGenre] = useState("")
    const [authorId, setAuthorId] = useState("")
    const { loading, data } = useQuery(getAuthorsQuery)
    const [addBook] = useMutation(addBookMutation)
    return (
        <div>
            <form
                id="add-book"
                onSubmit={(e) => {
                    e.preventDefault()
                    console.log({
                        name,
                        genre,
                        authorId,
                    })
                    console.log(
                        addBook({
                            variables: {
                                name,
                                genre,
                                authorId,
                            },
                            refetchQueries: [{ query: getBooksQuery }],
                        })
                    )
                }}
            >
                <div className="field">
                    <label>Book name</label>
                    <input
                        type="text"
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className="field">
                    <label>Genre</label>
                    <input
                        type="text"
                        onChange={(e) => setGenre(e.target.value)}
                    />
                </div>
                <div className="field">
                    <label>Author:</label>
                    <select onChange={(e) => setAuthorId(e.target.value)}>
                        <option>Select Author</option>
                        {!loading ? (
                            data.authors.map((author) => (
                                <option key={author.id} value={author.id}>
                                    {author.name}
                                </option>
                            ))
                        ) : (
                            <option disabled>loading authors...</option>
                        )}
                    </select>
                </div>
                <button type="submit">Add</button>
            </form>
        </div>
    )
}

export default AddBooks
