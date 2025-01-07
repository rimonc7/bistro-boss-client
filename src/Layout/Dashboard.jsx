import { NavLink, Outlet } from "react-router-dom";
import { FaHome, FaUtensils, FaListAlt, FaUserFriends, FaShoppingCart, FaEnvelope, FaShoppingBag } from "react-icons/fa";

const Dashboard = () => {
    return (
        <div className="flex">
            {/* Left Sidebar */}
            <div className="w-64 min-h-screen bg-[#D1A054] px-6 py-8">
                {/* Logo Section */}
                <div className="mb-10 text-center">
                    <h2 className="font-bold text-2xl text-black">BISTRO BOSS</h2>
                    <h3 className="font-bold text-xl text-black">R e s t a u r a n t</h3>
                </div>

                {/* Admin Navigation */}
                <ul className="space-y-6 text-black">
                    <li>
                        <NavLink to="/dashboard" className="flex items-center space-x-2 hover:text-black">
                            <FaHome />
                            <span>Admin Home</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/cart" className="flex items-center space-x-2 hover:text-black">
                            <FaHome />
                            <span>My Cart</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/add-items" className="flex items-center space-x-2 hover:text-black">
                            <FaUtensils />
                            <span>Add Items</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/manage-items" className="flex items-center space-x-2 hover:text-black">
                            <FaListAlt />
                            <span>Manage Items</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/manage-bookings" className="flex items-center space-x-2 hover:text-black">
                            <FaShoppingCart />
                            <span>Manage Bookings</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/all-users" className="flex items-center space-x-2 hover:text-black">
                            <FaUserFriends />
                            <span>All Users</span>
                        </NavLink>
                    </li>
                </ul>

                {/* Divider */}
                <hr className="my-6 border-t border-white" />

                {/* User Navigation */}
                <ul className="space-y-6 text-black">
                    <li>
                        <NavLink to="/" className="flex items-center space-x-2 hover:text-black">
                            <FaHome />
                            <span>Home</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/menu" className="flex items-center space-x-2 hover:text-black">
                            <FaUtensils />
                            <span>Menu</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/shop/salad" className="flex items-center space-x-2 hover:text-black">
                            <FaShoppingBag />
                            <span>Shop</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact" className="flex items-center space-x-2 hover:text-black">
                            <FaEnvelope />
                            <span>Contact</span>
                        </NavLink>
                    </li>
                </ul>
            </div>

            {/* Main Content */}
            <div className="flex-1">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;
