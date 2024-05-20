import { BarChart, Bar,XAxis,YAxis,Tooltip,Legend,CartesianGrid } from 'recharts';
import { getReadListBooks } from '../Utility/localStorage';


const PagesRead = () => {
    const readList = getReadListBooks()
    const data= readList;
    return (
        <div className={`bg-gray-100 p-12 text-center rounded-3xl mx-auto ${readList.length <= 0 && 'hidden'}`}>
            <BarChart className='mx-auto' width={730} height={450} data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="bookName" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="totalPages" fill="#1884d8" />
            </BarChart>
        </div>
    );
};

export default PagesRead;