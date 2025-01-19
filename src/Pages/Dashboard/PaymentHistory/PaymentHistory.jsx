import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import useAxiosSecure from "../../../Hook/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";

const PaymentHistory = () => {
    const { user } = useContext(AuthContext);
    const axiosSecure = useAxiosSecure();

    const { refetch, data: payments = [] } = useQuery({
        queryKey: ['payments', user?.email],
        queryFn: async () => {
            if (!user?.email) return [];
            const res = await axiosSecure.get(`/payments/${user.email}`);
            return res.data;
        }
    });

    const totalPayment = payments.reduce((sum, payment) => sum + parseFloat(payment.price), 0).toFixed(2)

    return (
        <div className="bg-base-200 min-h-screen flex flex-col">
            <div>
                <SectionTitle
                    heading={"Payment History"} subHeading={"At a Glance"}
                />
            </div>

            <div className="bg-white mx-4 sm:mx-8 lg:mx-28 py-8 px-4 rounded-md shadow-md">
                {/* Summary */}
                <div className="flex flex-col lg:flex-row justify-between items-center mb-6 gap-4">
                    <h3 className="text-xl lg:text-3xl font-bold">Total Payment: ${totalPayment}</h3>
                </div>
                {/* Table */}
                <div className="overflow-x-auto">
                    <table className="table-auto w-full border-collapse border border-gray-200">
                        {/* Table Head */}
                        <thead>
                            <tr className="bg-[#D1A054] text-white text-sm lg:text-base">
                                <th className="p-3">Email</th>
                                <th className="p-3">Category</th>
                                <th className="p-3">Total Price</th>
                                <th className="p-3">Payment Date</th>
                                <th className="p-3">Payment Status</th>
                            </tr>
                        </thead>
                        {/* Table Body */}
                        <tbody>
                            {payments?.map((payment, index) => (
                                <tr
                                    key={index}
                                    className="border-b border-gray-200 text-sm lg:text-base"
                                >
                                    <td className="p-3 text-center">
                                        {payment.email}
                                    </td>
                                    <td className="p-3 text-center">
                                        {payment.category || "N/A"}
                                    </td>
                                    <td className="p-3 text-center">
                                        ${payment.price}
                                    </td>
                                    <td className="p-3 text-center">
                                        {payment.date}
                                    </td>
                                    <td className="p-3 text-center">
                                        {payment.status}
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

export default PaymentHistory;
