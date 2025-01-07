import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hook/useAxiosSecure";
import useCart from "../../../Hook/useCart";

const OurShopCart = ({ item }) => {
    const { name, recipe, image, price, _id } = item;
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const axiosSecure = useAxiosSecure();
    const [, refetch] = useCart();

    const handleAddToCart = () => {
        if (user && user.email) {
            const cartItem = {
                menuId: _id,
                email: user.email,
                name,
                image,
                price
            }
            axiosSecure.post('/carts', cartItem)
                .then(res => {
                    if (res.data.insertedId) {
                        Swal.fire({
                            title: "Added to Cart",
                            icon: "success",
                            draggable: true
                        });
                        refetch();
                    }
                })


        } else {
            Swal.fire({
                title: "You need to log in!",
                text: "Please log in to add items to your cart.",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Log in now",
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate("/login", { state: { from: location } });
                }
            });
        }
    };

    return (
        <div>
            <div className="bg-base-200 w-96 rounded-lg overflow-hidden mx-auto flex flex-col items-center">
                <figure className="w-full relative">
                    <img
                        src={image}
                        alt="Featured Dish"
                        className="w-full h-60 object-cover"
                    />
                    <p className="bg-slate-900 text-white px-3 py-1 text-sm absolute top-2 right-2 rounded-md shadow-md">
                        ${price}
                    </p>
                </figure>
                <div className="card-body flex flex-col items-center text-center p-6">
                    <h2 className="card-title text-2xl font-semibold mb-2">{name}</h2>
                    <p className="text-gray-600 mb-4">{recipe}</p>
                    <div className="card-actions">
                        <button
                            onClick={handleAddToCart}
                            className="btn btn-outline border-0 border-b-4 border-yellow-600 text-yellow-600 hover:text-yellow-700 px-6 py-2 text-sm font-medium bg-gray-200 shadow-md hover:bg-gray-300 transition duration-300"
                        >
                            Add To Cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurShopCart;
