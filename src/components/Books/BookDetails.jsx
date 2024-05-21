import { useLoaderData, useParams } from "react-router-dom";
import { getReadBooks, saveReadBooks,saveReadListBooks,saveWishListedBooks } from "../Utility/localStorage";

  import { ToastContainer, toast } from 'react-toastify';

  import 'react-toastify/dist/ReactToastify.css';

const BookDetails = () => {

    const books = useLoaderData();
    // console.log(books);
    const { id } = useParams();
    const strId = parseInt(id);
    // console.log(id)
    // console.log(books)
    const book = books.find(book => book.bookId === strId)

    const {publisher,yearOfPublishing, image,totalPages, author, bookName, category, rating, tags, review } = book;

    const handleReadBook =()=>{
       const storedReadBooks = getReadBooks();
    
       const isExist = storedReadBooks.find(bookid=> bookid === strId )
       if(isExist === strId){
        toast.error('Already Added To Read List')
       }
       else {
        toast.success('Books Added To Read List')
       }
       saveReadBooks(strId);
       saveReadListBooks(book)
    }

    const handleWishList=()=>{
        saveWishListedBooks(book);
    }


    return (
        <div className="card h-3/5 card-side  bg-base-100 shadow-xl">
            <img className="p-8" src={image} width={400} alt="Shoes" />
            <div className="w-full p-8">
                <h2 className="card-title text-4xl mb-4">{bookName}</h2>
                <p className="font-semibold text-xl">by: {author}</p>
                <hr className=" border-2 border-dashed mt-4" />
                <p className="font-semibold text-xl mt-4">{category}</p>
                <hr className=" border-2 border-dashed mt-4" />
                <p className="mt-4"><span className="font-semibold text-xl mt-4">Review :</span> {review}</p>
                <div className="flex gap-4 mt-4">
                    <p><span className="font-semibold text-xl mt-4">Tags :</span></p>
                    <ul className="flex gap-3 ml-mt-4">
                        {
                            tags.map((tag, idx) => <li className="bg-gray-200 font-semibold text-[#23BE0A] p-2 rounded-full" key={idx}># {tag}</li>)
                        }
                    </ul>
                </div>
                <div className="space-y-2 mt-6">
                   
                    <p>Number of Pages : <span className="font-semibold ml-2">{totalPages} Pages</span></p>
                    <p>Publisher : <span className="font-semibold ml-2">{publisher} </span></p>
                    <p>Year of Publishing : <span className="font-semibold ml-2">{yearOfPublishing} </span></p>
                    <p>Rating : <span className="font-semibold ml-2">{rating} </span></p>

                </div>
                <div className=" mt-8 space-x-12">
                    <button onClick={handleReadBook} className="btn btn-primary px-8 hover:bg-green-400 border-none hover:text-black">Read</button>
                    <button onClick={handleWishList} className="btn btn-primary px-8 hover:bg-green-400 border-none hover:text-black">Wishlist</button>
                </div>

            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default BookDetails;