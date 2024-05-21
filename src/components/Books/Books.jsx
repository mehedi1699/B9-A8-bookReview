import { useEffect } from "react";
import { useState } from "react";
import SingleBook from "./SingleBook";



const Books = () => {

    const [books,setBooks]= useState([]);

    useEffect(()=>{
        fetch('https://raw.githubusercontent.com/mehedi1699/B9-A8-bookReview/main/public/books.json')
        .then(res => res.json())
        .then(data => setBooks(data))
    },[])
    

    return (
        <div className="mb-20">
            <h1 className="text-4xl font-semibold text-center mt-20 mb-8">Listed Books</h1>
            <div className="grid grid-cols-3 gap-8 mt-12">
                {
                    books.map(book => <SingleBook key={book.id} book={book}></SingleBook>)
                }
            </div>
        </div>
    );
};

export default Books;