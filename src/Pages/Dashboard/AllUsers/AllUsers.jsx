import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import useAxiosSecure from "../../../Hook/useAxiosSecure";
import { FaTrash, FaUserShield } from "react-icons/fa";
import Swal from "sweetalert2";


const AllUsers = () => {
    const axiosSecure = useAxiosSecure();
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users');
            return res.data;
        }
    })

    const handleDelete = id => {
        Swal.fire({
            title: "Do you want to Delete the food?",
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: "Yes",
        }).then((result) => {

            if (result.isConfirmed) {
                axiosSecure.delete(`/users/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch();
                            Swal.fire("Deleted", "", "success");
                        }
                    })
            }
            else if (result.isDenied) {
                Swal.fire("Changes are not saved", "", "info");
            }
        });
    }

    const handleMakeAdmin = id => {

        Swal.fire({
            title: "Do you want to make the user as Admin?",
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: "Yes",
        }).then((result) => {

            if (result.isConfirmed) {
                axiosSecure.patch(`/users/admin/${id}`)
                    .then(res => {
                        if (res.data.modifiedCount > 0) {
                            refetch();
                            Swal.fire("Modified the User As Admin", "", "success");
                        }
                    })
            }
            else if (result.isDenied) {
                Swal.fire("Changes are not saved", "", "info");
            }
        });
    }


    return (
        <div className="bg-base-200 min-h-screen flex flex-col">
            <div>
                <SectionTitle heading={"MANAGE ALL USERS"} subHeading={"How Many?"} />
            </div>

            {/* Cart Summary Section */}
            <div className="bg-white mx-4 sm:mx-8 lg:mx-28 py-8 px-4 rounded-md shadow-md">
                {/* Summary */}
                <div className="flex flex-col lg:flex-row justify-between items-center mb-6 gap-4">
                    <h3 className="text-xl lg:text-3xl font-bold">Total Users: {users.length}</h3>
                </div>

                {/* Table */}
                <div className="overflow-x-auto">
                    <table className="table-auto w-full border-collapse border border-gray-200">
                        {/* Table Head */}
                        <thead>
                            <tr className="bg-[#D1A054] text-white text-sm lg:text-base ">
                                <th className="p-3">#</th>
                                <th className="p-3">Name</th>
                                <th className="p-3">Email</th>
                                <th className="p-3">Role</th>
                                <th className="p-3">Action</th>
                            </tr>
                        </thead>
                        {/* Table Body */}
                        <tbody>
                            {users.map((user, index) => (
                                <tr
                                    key={index}
                                    className="border-b border-gray-200 text-sm lg:text-base"
                                >
                                    <td className="p-3 text-center">{index + 1}</td>
                                    <td className="p-3 text-center">{user.name}</td>
                                    <td className="p-3 text-center">{user.email}</td>
                                    <td className="p-3 text-center">
                                        {
                                            user.role === 'admin' ? 'Admin' : <button
                                                onClick={() => handleMakeAdmin(user._id)}
                                                className="btn btn-sm bg-[#D1A054] text-white hover:bg-red-700">
                                                <FaUserShield></FaUserShield>
                                            </button>
                                        }

                                    </td>
                                    <td className="p-3 text-center">
                                        <button
                                            onClick={() => handleDelete(user._id)}
                                            className="btn btn-sm bg-red-600 text-white hover:bg-red-700">
                                            <FaTrash />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AllUsers;