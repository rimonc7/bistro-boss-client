import { NavLink } from "react-router-dom";

const NavBar = () => {
    const links = (
        <div className="space-y-2 lg:space-x-3 lg:space-y-0">
            <NavLink to="/" className="block lg:inline">HOME</NavLink>
            <NavLink to="/contact" className="block lg:inline">CONTACT US</NavLink>
            <NavLink to="/dashboard" className="block lg:inline">DASHBOARD</NavLink>
            <NavLink to="/menu" className="block lg:inline">OUR MENU</NavLink>
            <NavLink to="/shop" className="block lg:inline">OUR SHOP</NavLink>
        </div>
    );

    return (
        <div className="navbar fixed z-10 bg-black text-white bg-opacity-30 max-w-screen-xl">
            <div className="navbar-start">
                <div className="dropdown lg:hidden">
                    <div tabIndex={0} role="button" className="btn btn-ghost">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow text-black">
                        {links}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">BISTRO BOSS</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 space-x-3">
                    {links}
                </ul>
            </div>

            <div className="navbar-end">
                <a className="btn">Button</a>
            </div>
        </div>
    );
};

export default NavBar;
