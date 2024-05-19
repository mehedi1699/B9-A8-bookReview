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

    const { bookId, image, author, bookName, category, rating, tags } = book;



    return (
        <div className="card h-3/5 card-side  bg-base-100 shadow-xl">
            <img src={image} width={540} alt="Shoes" />
            <div className="card-body bg-yellow-400">
                <h2 className="card-title">New movie is released!</h2>
                <p>Click the button to watch on Jetflix app.</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Watch</button>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;