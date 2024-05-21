import { Link, Outlet } from "react-router-dom";
import { useState } from "react";


const ListedBooks = () => {

    const [tabIndex, setTabIndex] = useState(0);



    return (
        <div>
            <h1 className="text-3xl  bg-gray-300 p-8 text-center font-bold rounded-3xl mb-8" >Books</h1>

            <div className="flex items-center  overflow-x-auto overflow-y-hidden sm:justify-start flex-nowrap bg-gray-100 text-gray-800">
                <Link
                    to=''
                    onClick={() => setTabIndex(0)}
                    className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${tabIndex === 0 ? 'border border-b-0 font-bold' : 'border-b'} rounded-t-lg border-gray-600 text-gray-900`}>
                    <span>Read Books</span>
                </Link>
                <Link
                    to="wish-list"
                    onClick={() => setTabIndex(1)}
                    className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${tabIndex === 1 ? 'border border-b-0 font-bold' : 'border-b'} rounded-t-lg border-gray-600 text-gray-900`}>
                    <span>Wishlist Books</span>
                </Link>
            </div>
            <Outlet>

            </Outlet>
        </div>
    );
};

export default ListedBooks;