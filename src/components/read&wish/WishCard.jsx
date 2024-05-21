import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';


const WishCard = ({ wishbook }) => {

    const {bookId, publisher, image, totalPages, author, bookName, category, rating, tags,  } = wishbook;

    return (
        <div>
            <div className="card card-side bg-base-100 shadow-xl">
                <img className="p-4" src={image} width={400} alt="Shoes" />
                <div className="card-body">
                    <h2 className="font-semibold text-2xl">{bookName}</h2>
                    <p className="font-semibold ">by: {author}</p>
                    <div className="">
                        <p><span className="font-semibold  mt-1">Tags :</span></p>
                        <ul className="flex gap-3 ml-mt-1">
                            {
                                tags.map((tag, idx) => <li className="bg-gray-200 font-semibold text-[#23BE0A] p-2 rounded-full" key={idx}># {tag}</li>)
                            }
                        </ul>
                    </div>
                    <div className="flex space-y-2 w-96  mt-2">
                        <p className="  mr-2 p-2" >Publisher : {publisher} </p>
                        <p>Pages : {totalPages} Pages</p>
                    </div>
                    <div className=" flex space-y-2 w-9/12  text-center mt-2">
                         <p className="text-blue-400  bg-gray-300 rounded-xl mr-2 p-2 ">Category :{category}</p>
                        <p className="text-blue-400  bg-red-300 rounded-xl p-2">Rating : {rating}</p>
                        <Link to={`/book/${bookId}`}><button className="btn btn-primary mx-8">View Details</button></Link>
                    </div>
                </div>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default WishCard;