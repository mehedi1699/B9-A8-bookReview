

const Banner = () => {
    return (
        <div className=" w-full h-3/5 bg-gray-200 mx-auto flex justify-between shadow-xl rounded-2xl my-8">
            <div className="p-6 ml-16 items-center justify-center my-auto">
                <h2 className="text-6xl font-bold">Books to freshen up <br /> your bookshelf</h2>
                <button className=" p-2 px-4 rounded-lg mt-12 bg-[#23BE0A] text-white">View The List</button>
            </div>
            <figure className="mr-20 my-12"><img width={260} src="https://i.ibb.co/L08H1vW/The-Silent-Patient.jpg" alt="Shoes" /></figure>
        </div>
    );
};

export default Banner;