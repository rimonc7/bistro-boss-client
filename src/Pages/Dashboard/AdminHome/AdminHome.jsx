import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hook/useAxiosSecure";
import { FaWallet, FaUsers, FaBox, FaTruck } from "react-icons/fa";

const AdminHome = () => {
    const { user } = useContext(AuthContext);
    const axiosSecure = useAxiosSecure();

    const { data: stats } = useQuery({
        queryKey: ['admin-stats'],
        queryFn: async () => {
            const res = await axiosSecure.get('/admin-stats');
            return res.data;
        }
    });

    return (
        <div className="m-10 text-white">
            <h2 className="text-3xl font-bold mb-6 text-black">
                Hi, Welcome {user?.displayName ? user.displayName : 'Back'}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {/* Revenue */}
                <div className="flex items-center justify-between bg-gradient-to-r from-purple-500 to-purple-300 p-4 rounded-lg shadow-md">
                    <div className="text-4xl text-white"><FaWallet /></div>
                    <div className="text-right">
                        <h3 className="text-2xl font-bold">{stats?.revenue || 0}</h3>
                        <p className="text-sm">Revenue</p>
                    </div>
                </div>
                {/* Customers */}
                <div className="flex items-center justify-between bg-gradient-to-r from-yellow-500 to-yellow-300 p-4 rounded-lg shadow-md">
                    <div className="text-4xl text-white"><FaUsers /></div>
                    <div className="text-right">
                        <h3 className="text-2xl font-bold">{stats?.users || 0}</h3>
                        <p className="text-sm">Customers</p>
                    </div>
                </div>
                {/* Products */}
                <div className="flex items-center justify-between bg-gradient-to-r from-pink-500 to-pink-300 p-4 rounded-lg shadow-md">
                    <div className="text-4xl text-white"><FaBox /></div>
                    <div className="text-right">
                        <h3 className="text-2xl font-bold">{stats?.menuItems || 0}</h3>
                        <p className="text-sm">Products</p>
                    </div>
                </div>
                {/* Orders */}
                <div className="flex items-center justify-between bg-gradient-to-r from-blue-500 to-blue-300 p-4 rounded-lg shadow-md">
                    <div className="text-4xl text-white"><FaTruck /></div>
                    <div className="text-right">
                        <h3 className="text-2xl font-bold">{stats?.orders || 0}</h3>
                        <p className="text-sm">Orders</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminHome;
