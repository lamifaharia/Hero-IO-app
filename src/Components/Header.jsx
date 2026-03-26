import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const navLinks = (
    <>
      <li>
        <NavLink
          to="/"
          onClick={() => document.activeElement.blur()}
          className={({ isActive }) =>
            isActive
              ? "text-[#5F42D0] font-bold underline underline-offset-8 decoration-2"
              : "hover:text-[#5F42D0] transition-all"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/apps"
          onClick={() => document.activeElement.blur()}
          className={({ isActive }) =>
            isActive
              ? "text-[#5F42D0] font-bold underline underline-offset-8 decoration-2"
              : "hover:text-[#5F42D0] transition-all"
          }
        >
          All Apps
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/installation"
          onClick={() => document.activeElement.blur()}
          className={({ isActive }) =>
            isActive
              ? "text-[#5F42D0] font-bold underline underline-offset-8 decoration-2"
              : "hover:text-[#5F42D0] transition-all"
          }
        >
          Installation
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-white/90 backdrop-blur-md shadow-sm px-4 md:px-10 lg:px-20 sticky top-0 z-50">
      <div className="navbar-start">
        {/*--------------------------  Mobile Dropdown -------------------------- */}
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost lg:hidden p-0 mr-4"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-5 shadow-2xl bg-white rounded-3xl w-64 font-bold text-[#142A5C] gap-4 border border-gray-100"
          >
            {navLinks}
            <li className="mt-4 sm:hidden">
              <button className="btn bg-[#5F42D0] text-white rounded-xl border-none">
                Login
              </button>
            </li>
          </ul>
        </div>
        <Link to="/" className="flex items-center gap-2">
          {/*--------------------------  Logo Image -------------------------- */}
          <img
            src="/images/logo.png"
            alt="Hero IO Logo"
            className="w-10 h-10 object-contain"
          />

          {/*--------------------------  Logo Text -------------------------- */}
          <h2 className="text-2xl md:text-3xl text-[#5F42D0] font-bold uppercase">
            HERO.IO
          </h2>
        </Link>
      </div>

      {/*--------------------------  Desktop Menu -------------------------- */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 font-bold text-[#142A5C] gap-8 text-base">
          {navLinks}
        </ul>
      </div>

      {/* -------------------------- Navbar End --------------------------  */}
      <div className="navbar-end">
        <button className="btn border-none text-white rounded px-6 flex items-center gap-2 normal-case shadow-lg bg-gradient-to-r from-[#5F42D0] to-[#7A5FFF] hover:from-[#4a32a8] hover:to-[#5F42D0] transition-all duration-300">
          {/*--------------------------  GitHub Icon -------------------------- */}
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 496 512"
            height="1.2em"
            width="1.2em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path>
          </svg>
          Contribute
        </button>
      </div>
    </div>
  );
};

export default Header;
