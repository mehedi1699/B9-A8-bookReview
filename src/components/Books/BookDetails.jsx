import { useLoaderData, useParams } from "react-router-dom";


const BookDetails = () => {

    const books = useLoaderData();
    // console.log(books);
    const { id } = useParams();
    const strId = parseInt(id);
    // console.log(id)
    // console.log(books)
    const book = books.find(book => book.bookId === strId)
    console.log(book);

    const { bookId, image, author, bookName, category, rating, tags, review } = book;



    return (
        <div className="card h-3/5 card-side  bg-base-100 shadow-xl">
            <img className="p-8" src={image} width={540} alt="Shoes" />
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
                            tags.map((tag, idx) => <li className="bg-gray-200 font-semibold text-[#23BE0A] p-2 rounded-full" key={idx}>{tag}</li>)
                        }
                    </ul>
                </div>
                <div className=" mt-8 space-x-12">
                    <button className="btn btn-primary px-8 hover:bg-green-400 border-none hover:text-black">Read</button>
                    <button className="btn btn-primary px-8 hover:bg-green-400 border-none hover:text-black">Wishlist</button>
                </div>

            </div>
        </div>
    );
};

export default BookDetails;