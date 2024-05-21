import { FaRegStar } from "react-icons/fa";
import { Link } from "react-router-dom";


const SingleBook = ({ book }) => {
    const { bookId,image, author, bookName, category, rating, tags } = book;

// console.log(bookId)
    
    return (
        <Link to={`/book/${bookId}`}>
             <div className="card w-96 flex flex-nowrap bg-base-100 shadow-xl">
            <figure><img src={image} width={280} alt="Shoes" /></figure>
            <ul className="flex gap-3 ml-8 mt-4">
                {
                    tags.map((tag,idx) => <li className="bg-gray-200 font-semibold text-[#23BE0A] p-2 rounded-full" key={idx}>{tag}</li>)
                }
            </ul>


            <div className="card-body">
                <h2 className="card-title">{bookName}</h2>
                <p className="font-semibold">by: {author}</p>
                <hr className=" border-2 border-dashed gap-4 mt-2" />
            </div>
            <div className="flex font-semibold justify-between m-8">
                <p>{category}</p>
                <p className="flex">{rating}<FaRegStar className="mt-1 ml-2"></FaRegStar></p>
            </div>
        </div>
        </Link>
       
    );
};

export default SingleBook;