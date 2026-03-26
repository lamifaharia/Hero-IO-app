import { Link, NavLink } from "react-router-dom";

const Header = () => {
    // Active link er jonno style function
    const navLinks = (
        <>
            <li>
                <NavLink 
                    to="/" 
                    className={({ isActive }) => isActive ? "text-[#5F42D0] font-bold underline underline-offset-4" : "hover:text-[#5F42D0]"}
                >
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink 
                    to="/apps" 
                    className={({ isActive }) => isActive ? "text-[#5F42D0] font-bold underline underline-offset-4" : "hover:text-[#5F42D0]"}
                >
                    All Apps
                </NavLink>
            </li>
            <li>
                <NavLink 
                    to="/installation" 
                    className={({ isActive }) => isActive ? "text-[#5F42D0] font-bold underline underline-offset-4" : "hover:text-[#5F42D0]"}
                >
                    Installation
                </NavLink>
            </li>
        </>
    );

    return (
        <div className="navbar bg-white/80 backdrop-blur-md shadow-sm px-4 lg:px-20 sticky top-0 z-50 transition-all">
            <div className="navbar-start">
                {/* 📱 Mobile Dropdown Menu */}
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-4 shadow-lg bg-white rounded-2xl w-52 font-bold text-[#142A5C] gap-2 border border-gray-50">
                        {navLinks}
                    </ul>
                </div>
                <Link to="/" className="text-2xl font-black text-[#142A5C] tracking-tighter">
                    HERO<span className="text-[#5F42D0]">-</span>IO
                </Link>
            </div>

            {/* 💻 Desktop Menu */}
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 font-bold text-[#142A5C] gap-6 text-sm">
                    {navLinks}
                </ul>
            </div>

            <div className="navbar-end">
                <button className="btn bg-[#5F42D0] text-white rounded-full px-8 border-none hover:bg-[#4a32a8] shadow-md hover:shadow-lg transition-all hidden sm:flex">
                    Login
                </button>
                {/* Mobile login icon for small screens */}
                <button className="btn btn-circle btn-ghost sm:hidden text-[#5F42D0]">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                </button>
            </div>
        </div>
    );
};

export default Header;