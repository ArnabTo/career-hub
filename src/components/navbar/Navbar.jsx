import { NavLink } from "react-router-dom";
import "../../App.css"

const Navbar = () => {
    const gradientStyle = {
        background: 'linear-gradient(90deg, rgba(126, 144, 254, 0.05) 0%, rgba(152, 115, 255, 0.05) 100%)',
    };
    return (
        <div className="navContainer" style={gradientStyle}>
        <div className="navbar max-w-6xl m-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li><NavLink to="/" className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent font-bold text-base">Home</NavLink></li>
                            <li><NavLink to="/stat" className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent font-bold text-base">Statistics</NavLink></li>
                            <li><NavLink to="/appliedjobs" className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent font-bold text-base">Applied Jobs</NavLink></li>
                            <li><NavLink to="/blogs" className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent font-bold text-base">Blogs</NavLink></li>
                        </ul>
                    </div>
                    <NavLink className="btn btn-ghost  normal-case text-[#1A1919] text-3xl font-extrabold" to="/">CareerHub</NavLink>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><NavLink to="/" className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent font-bold text-base">Home</NavLink></li>
                        <li><NavLink to="/stat" className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent font-bold text-base">Statistics</NavLink></li>
                        <li><NavLink to="/appliedjobs" className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent font-bold text-base">Applied Jobs</NavLink></li>
                        <li><NavLink to="/blogs" className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent font-bold text-base">Blogs</NavLink></li>
                    </ul>
                </div>
                <div className="navbar-end hidden md:flex">
                    <a className="btn">Button</a>
                </div>
        </div>
        </div>
    );
};

export default Navbar;