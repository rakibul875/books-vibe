import React, { use } from 'react';
import BooksCart from '../../ui/BooksCart';

const BooksPromise = fetch('/booksData.json').then(res => res.json());

const AllBooks = () => {

    const booksData = use(BooksPromise);


    return (
        <div className='container mx-auto my-12'>
            <h1 className='text-xl font-bold text-center mb-10'>All Books</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    booksData.map(book => <BooksCart key={book.bookId} book={book} />)
                }
            </div>

        </div>
    );
};

export default AllBooks;