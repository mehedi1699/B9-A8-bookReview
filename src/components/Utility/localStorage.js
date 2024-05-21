
import { toast } from 'react-toastify';



 const getReadBooks = ()=>{
    const storedReadBooks = localStorage.getItem('Read-book');
    if(storedReadBooks){
        return JSON.parse(storedReadBooks)
    }
    return [];
 }

 const saveReadBooks = id =>{
    // console.log(id)
    const storedReadBooks = getReadBooks();
    const isExist = storedReadBooks.find(bookId => bookId===id);
    if(!isExist){
        storedReadBooks.push(id);
        localStorage.setItem("Read-book",JSON.stringify(storedReadBooks))
    }

 }

//  wish list function 

const getStoredWishListedBook =() =>{
    const storedListedBook = localStorage.getItem('wish-list');
    if(storedListedBook){
     return   JSON.parse(storedListedBook);
    }
    return [];
}

const saveWishListedBooks = id =>{
    console.log(id);
    const storedListedBooks = getStoredWishListedBook();
    const isExist = storedListedBooks.find(bookId => bookId.bookId === id.bookId);
    const storedReadedBook = getReadListBooks();
    const readedBook = storedReadedBook.find(book => book.bookId === id.bookId)
    console.log(readedBook)
    console.log(isExist)
    if(!isExist && readedBook == isExist){
        storedListedBooks.push(id);
        localStorage.setItem("wish-list",JSON.stringify(storedListedBooks))
        toast.success("Added To Wish List")
    }
    else{
        toast.warning('Already Readed the Book')
    }
    

 }

//  read list book 

const getReadListBooks = ()=>{
    const storedReadBooks = localStorage.getItem('Read-list');
    if(storedReadBooks){
        return JSON.parse(storedReadBooks)
    }
    return [];
 }

 const saveReadListBooks = book =>{
    const storedReadBooks = getReadListBooks();
    const isExist = storedReadBooks.find(bookId => bookId.bookId === book.bookId);
    if(!isExist){
        storedReadBooks.push(book);
        localStorage.setItem("Read-list",JSON.stringify(storedReadBooks))
    }

 }

 export {saveReadBooks,getReadBooks,saveWishListedBooks,getStoredWishListedBook,  saveReadListBooks, getReadListBooks }