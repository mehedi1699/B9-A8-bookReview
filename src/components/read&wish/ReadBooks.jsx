import { getReadListBooks } from "../Utility/localStorage";
import REadBookcard from "./REadBookcard";
import WishCard from "./WishCard";



const ReadBooks = () => {

    const readList = getReadListBooks()

    // console.log( readList)

    // console.log(readListedBook);
    // const readBook = books.find(book=> book.bookId ===)
    return (
        <div>
            
            {
                readList.map((readBook, idx) => <REadBookcard key={idx} readBook={readBook}></REadBookcard>)
            }
        </div>
    );
};

export default ReadBooks;