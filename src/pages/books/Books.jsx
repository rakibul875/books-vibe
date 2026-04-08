import React, { useContext } from 'react';
import { BookContext } from '../../context/BookProvider';

const Books = () => {
    const {storedBooks ,wishlist}=useContext(BookContext)
    
    console.log(wishlist, storedBooks)
    return (
        <div>
            <h1>Books page</h1>

            <p>Stored Books: {storedBooks.length}</p>
            <p>Wishlist: {wishlist.length}</p>
        </div>
    );
};

export default Books;