import React from 'react';
import { useParams } from 'react-router';

const BooksDetails = () => {
    const params=useParams();
    console.log(params);
    return (
        <div>
            <h1>Hello im from BooksDetails</h1>
        </div>
    );
};

export default BooksDetails;