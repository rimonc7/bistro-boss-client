import Swal from "sweetalert2";
import useCart from "../../../Hook/useCart";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import { FaTrash } from "react-icons/fa";
import useAxiosSecure from "../../../Hook/useAxiosSecure";

const Cart = () => {
    const [cart, refetch] = useCart();
    const totalPrice = cart.reduce((sum, item) => sum + item.price, 0).toFixed(2);
    const axiosSecure = useAxiosSecure();

    const handleDelete = id => {
        Swal.fire({
            title: "Do you want to Delete the food?",
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: "Yes",
        }).then((result) => {

            if (result.isConfirmed) {
                axiosSecure.delete(`/carts/${id}`)
                    .then(res => {
                        refetch();
                        if (res.data.deletedCount > 0) {
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
                <SectionTitle heading={"WANNA ADD MORE?"} subHeading={"My Cart"} />
            </div>

            {/* Cart Summary Section */}
            <div className="bg-white mx-4 sm:mx-8 lg:mx-28 py-8 px-4 rounded-md shadow-md">
                {/* Summary */}
                <div className="flex flex-col lg:flex-row justify-between items-center mb-6 gap-4">
                    <h3 className="text-xl lg:text-3xl font-bold">Total Orders: {cart.length}</h3>
                    <h3 className="text-xl lg:text-3xl font-bold">
                        Total Price: ${totalPrice}
                    </h3>
                    <button className="btn bg-[#D1A054] font-bold text-white px-6 lg:px-8">
                        Pay
                    </button>
                </div>

                {/* Table */}
                <div className="overflow-x-auto">
                    <table className="table-auto w-full border-collapse border border-gray-200">
                        {/* Table Head */}
                        <thead>
                            <tr className="bg-[#D1A054] text-white text-sm lg:text-base ">
                                <th className="p-3">#</th>
                                <th className="p-3">Item Image</th>
                                <th className="p-3">Item Name</th>
                                <th className="p-3">Price</th>
                                <th className="p-3">Action</th>
                            </tr>
                        </thead>
                        {/* Table Body */}
                        <tbody>
                            {cart.map((item, index) => (
                                <tr
                                    key={index}
                                    className="border-b border-gray-200 text-sm lg:text-base"
                                >
                                    <td className="p-3 text-center">{index + 1}</td>
                                    <td className="p-3 flex justify-center">
                                        <div className="rounded-sm h-12 w-12 overflow-hidden">
                                            <img
                                                src={item.image}
                                                alt={item.name}
                                                className="object-cover w-full h-full"
                                            />
                                        </div>
                                    </td>
                                    <td className="p-3 text-center">{item.name}</td>
                                    <td className="p-3 text-center">${item.price}</td>
                                    <td className="p-3 text-center">
                                        <button
                                            onClick={() => handleDelete(item._id)}
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

export default Cart;
