import React from 'react';

import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
} from '@apollo/client';

import AddBooks from './components/AddBooks';
import BookList from './components/BookList';

//Apollo client setup

const client = new ApolloClient({
    uri: "http://localhost:4000/graphql",
    cache: new InMemoryCache(),
})

//App

function App() {
    return (
        <ApolloProvider client={client}>
            <div id="main">
                <BookList />
                <AddBooks />
            </div>
        </ApolloProvider>
    )
}

export default App
