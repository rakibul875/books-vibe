import { Star } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router';

const BooksCart = ({ book }) => {
    return (
        <div>
            <Link to={`/bookDetails/${book.bookId}`} className="card bg-base-100 shadow-sm">
                <div className="p-6">
                    <figure className='p-5 rounded-2xl bg-gray-200'>
                        
                        <img
                            src={book.image}
                            alt={book.bookName}
                            className='h-[300px] rounded-2xl'
                        />
                    </figure>
                </div>
                <div className="card-body">
                    <div className="flex gap-3">
                        {book.tags.map((tag, index) => <div key={index} className="badge bg-green-300 text-green-700">{tag}</div>)}
                    </div>
                    <h2 className="card-title">
                        {book.bookName}
                    </h2>
                    <h2 className="card-title">
                        {book.author}
                    </h2>
                    <div className="border-t border-dashed border-gray-300"></div>
                    <div className="flex justify-between text-xl">
                        <div className="font-bold">Fashion</div>
                        <div className="font-bold flex gap-2 items-center">{book.rating}<Star /></div>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default BooksCart;