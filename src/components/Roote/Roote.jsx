import { Outlet } from "react-router-dom";
import Header from "../HeaderFooter/Header";


const Roote = () => {
    return (
        <div className="w-10/12 mx-auto">
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Roote;