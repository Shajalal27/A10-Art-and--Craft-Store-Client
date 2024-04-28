import { Outlet } from "react-router-dom";
import Navbar from "../components/Header/Navbar";
import Banner from "../components/Header/Banner";


const Root = () => {
    return (
        <div>
            <Navbar ></Navbar>
            <Banner></Banner>
            <Outlet ></Outlet>
        </div>
    );
};

export default Root;