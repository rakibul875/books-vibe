import React, { createContext, useState } from 'react';
import { toast } from 'react-toastify';


export const BookContext = createContext()



const BookProvider = ({ children }) => {

    const [storedBooks, setStoredBooks] = useState([])
    const [wishlist, setWishlist] = useState([])

    const handelMarksAsRead = (currentBooks) => {

        const isExist = storedBooks.find(book => book.bookId === currentBooks.bookId)
        if (isExist) {
            toast.error('books already exist')

        } else {
            setStoredBooks([...storedBooks, currentBooks])
            toast.success('books added successfully')
        }
        console.log(currentBooks, storedBooks)

    }

    const handelWishlist=(currentBooks)=>{

        const isExistInReadList=storedBooks.find(book=>book.bookId === currentBooks.bookId)

        if(isExistInReadList){
            toast.error('Books already exist in read list')
            return;
        }

        const isExist=wishlist.find(book=>book.bookId === currentBooks.bookId)
        if(isExist){
            toast.error('Books already exist in wishlist')
        }
        else{
            setWishlist([...wishlist, currentBooks])
            toast.success('Book added to wishlist')
        }

    }


    const booksData = {
        handelMarksAsRead,
        storedBooks,
        setStoredBooks,
        handelWishlist,
        setWishlist,
        wishlist
    }

    return (
        <BookContext.Provider value={booksData}>
            {children}
        </BookContext.Provider>
    );
};

export default BookProvider;