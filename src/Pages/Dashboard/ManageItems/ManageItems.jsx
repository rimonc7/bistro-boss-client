import { FaEdit, FaTrash } from "react-icons/fa";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import useMenu from "../../../Hook/useMenu";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hook/useAxiosSecure";
import { Link } from "react-router-dom";

const ManageItems = () => {
    const [menu, loading, refetch] = useMenu();
    const axiosSecure = useAxiosSecure();

    const handleDelete = (id) => {
        Swal.fire({
            title: "Do you want to Delete?",
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: "Yes",
        }).then(async (result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/menu/${id}`)
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

    return (
        <div className="bg-base-200 min-h-screen flex flex-col">
            <div>
                <SectionTitle heading={"MANAGE ALL ITEMS"} subHeading={"Hurry Up!"} />
            </div>

            {/* Item Summary Section */}
            <div className="bg-white mx-4 sm:mx-8 lg:mx-28 py-8 px-4 rounded-md shadow-md">
                {/* Summary */}
                <div className="flex flex-col lg:flex-row justify-between items-center mb-6 gap-4">
                    <h3 className="text-xl lg:text-3xl font-bold">Total Items: {menu.length}</h3>
                </div>

                {/* Table */}
                <div className="overflow-x-auto">
                    <table className="table-auto w-full border-collapse border border-gray-200">
                        {/* Table Head */}
                        <thead>
                            <tr className="bg-[#D1A054] text-white text-sm lg:text-base">
                                <th className="p-3">#</th>
                                <th className="p-3">Item Image</th>
                                <th className="p-3">Item Name</th>
                                <th className="p-3">Price</th>
                                <th className="p-3">Edit</th>
                                <th className="p-3">Delete</th>
                            </tr>
                        </thead>
                        {/* Table Body */}
                        <tbody>
                            {menu.map((item, index) => (
                                <tr
                                    key={item._id}
                                    className="border-b border-gray-200 text-sm lg:text-base"
                                >
                                    <td className="p-3 text-center">{index + 1}</td>
                                    <td className="p-3 text-center">
                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            className="w-12 h-12 object-cover rounded-md mx-auto"
                                        />
                                    </td>
                                    <td className="p-3 text-center">{item.name}</td>
                                    <td className="p-3 text-center">${item.price}</td>
                                    <td className="p-3 text-center">
                                        <Link
                                        to={`/dashboard/updateItem/${item._id}`}
                                            className="btn btn-sm bg-[#D1A054] text-white hover:bg-[#b0843e]"
                                        >
                                            <FaEdit />
                                        </Link>
                                    </td>
                                    <td className="p-3 text-center">
                                        <button
                                            className="btn btn-sm bg-red-600 text-white hover:bg-red-700"
                                            onClick={() => handleDelete(item._id)}
                                        >
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

export default ManageItems;
