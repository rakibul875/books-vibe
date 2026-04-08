import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const BooksDetails = () => {
    const { bookId } = useParams();

    const book = useLoaderData();

    const exactBook = book.find(book => book.bookId == bookId);
    console.log(exactBook)

    return (
        <div>
            <h1>Hello im from BooksDetails</h1>
        </div>
    );
};

export default BooksDetails;