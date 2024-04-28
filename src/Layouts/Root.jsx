import { Outlet } from "react-router-dom";
import Navbar from "../components/Header/Navbar";
import Banner from "../components/Header/Banner";
import Experience from "../components/Experience/Experience";


const Root = () => {
    return (
        <div>
            <Navbar ></Navbar>
            <Banner></Banner>
            <Experience></Experience>
            <Outlet ></Outlet>
        </div>
    );
};

export default Root;