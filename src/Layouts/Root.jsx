import { Outlet } from "react-router-dom";
import Navbar from "../components/Header/Navbar";
import Banner from "../components/Header/Banner";
import Experience from "../components/Experience/Experience";
import Footer from "../components/Footer/Footer";


const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet >
                <Banner></Banner>
                <Experience></Experience>
            </Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;