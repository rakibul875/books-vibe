import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const BooksDetails = () => {
    const { bookId: bookParamsId } = useParams();

    const book = useLoaderData();

    const exactBook = book.find(book => book.bookId == bookParamsId);

    const { bookId, bookName, author, image, review, totalPages, rating, category, tags, publisher, yearOfPublishing } = exactBook

    return (
        <div className='my-10 container mx-auto'>
            <div className="card lg:card-side bg-base-100 shadow-sm">
                <div className="p-6">
                    <figure className='p-15 bg-gray-200 rounded-xl'>
                        <img
                            className='w-[300px]'
                            src={image}
                            alt="Album" />
                    </figure>
                </div>

                <div className='card-body'>
                    <div className="space-y-3">
                        <h2 className="text-2xl">{bookName}</h2>
                        <p className='text-xl font-semibold text-gray-500'>{author}</p>
                        <p className='py-2 border-y border-gray-500 text-xl text-gray-400'>{category}</p>
                        <p className='text-2xl font-bold'>Review: <span className='text-xl font-normal text-gray-500'>{review} </span></p>
                        <div className="flex gap-4">
                            <p className='text-2xl font-bold'>Tag: {tags.map((tag, index) =>
                                <div key={index} className="badge bg-green-300 text-green-700">{tag}
                                </div>)}
                            </p>
                        </div>
                        <div className="border-t border-gray-400 space-y-2">
                            <p className='flex justify-start gap-10 text-xl text-gray-500'>Number of Pages: <span className='text-black'>{totalPages}</span></p>
                            <p className='flex justify-start gap-10 text-xl text-gray-500'>publisher: <span className='text-black'>{publisher}</span></p>
                            <p className='flex justify-start gap-10 text-xl text-gray-500'>Year of Publishing: <span className='text-black'>{yearOfPublishing}</span></p>
                            <p className='flex justify-start gap-10 text-xl text-gray-500'>Rating: <span className='text-black'>{rating}</span></p>
                        </div>

                    </div>
                    <div className="card-actions justify-start mt-5">
                        <button className="btn btn-outline">Read</button>
                        <button className="btn btn-accent mx-2">Wishlist</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BooksDetails;