import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const links = (
    <>
      <li><NavLink to="/" className={({ isActive }) => isActive ? "text-[#5F42D0] font-bold" : "text-gray-600"}>home</NavLink></li>
      <li><NavLink to="/apps" className={({ isActive }) => isActive ? "text-[#5F42D0] font-bold" : "text-gray-600"}>apps</NavLink></li>
      <li><NavLink to="/installation" className={({ isActive }) => isActive ? "text-[#5F42D0] font-bold" : "text-gray-600"}>installation</NavLink></li>
    </>
  );

  return (
    <div className="navbar bg-white px-4 lg:px-20 py-4 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 uppercase">
            {links}
          </ul>
        </div>
        {/* Figma Logo Text */}
        <Link to="/" className="text-2xl font-black text-[#142A5C] tracking-tighter">HERO.IO</Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-8 uppercase font-medium text-sm">
          {links}
        </ul>
      </div>
      <div className="navbar-end">
        <button className="btn bg-[#5F42D0] hover:bg-[#4C33A8] text-white border-none px-8 rounded-lg capitalize">
          Contribution
        </button>
      </div>
    </div>
  );
};

export default Header;