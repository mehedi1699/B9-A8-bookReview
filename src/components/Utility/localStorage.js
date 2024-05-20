 const getReadBooks = ()=>{
    const storedReadBooks = localStorage.getItem('Read-book');
    if(storedReadBooks){
        return JSON.parse(storedReadBooks)
    }
    return [];
 }

 const saveReadBooks = id =>{
    const storedReadBooks = getReadBooks();
    const isExist = storedReadBooks.find(bookId => bookId===id);
    if(!isExist){
        storedReadBooks.push(id);
        localStorage.setItem("Read-book",JSON.stringify(storedReadBooks))
    }

 }

 export {saveReadBooks,getReadBooks}