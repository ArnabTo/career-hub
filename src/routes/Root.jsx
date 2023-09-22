import { Outlet } from "react-router-dom";
import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";

const Root = () => {
    return (
        <div>
            <div className="max-w-6xl m-auto">
                <Navbar></Navbar>
                <Outlet></Outlet>
                </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;
