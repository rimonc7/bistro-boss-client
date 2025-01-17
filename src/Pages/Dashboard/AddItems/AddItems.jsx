import { useForm } from "react-hook-form";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import { FaUtensils } from "react-icons/fa";
import useAxiosPublic from '../../../Hook/useAxiosPublic'
import useAxiosSecure from '../../../Hook/useAxiosSecure'
import Swal from "sweetalert2";


const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;

const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const AddItems = () => {
    const { register, handleSubmit, reset } = useForm();
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();


    const onSubmit = async (data) => {
        console.log(data);
        const imageFile = { image: data.image[0] }
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
        if (res.data.success) {
            const menuItem = {
                name: data.name,
                recipe: data.recipe,
                image: res.data.data.
                    display_url,
                category: data.category,
                price: parseFloat(data.price)

            }
            const menuRes = await axiosSecure.post('/menu', menuItem);
            if (menuRes.data.insertedId) {
                reset();
                Swal.fire({
                    title: "Recipe Added",
                    icon: "success",
                    draggable: true
                });
            }
        }
    };

    return (
        <div className="p-6">
            <SectionTitle
                heading={"ADD AN ITEM"}
                subHeading={"What's new?"}
            >
            </SectionTitle>
            <div className="bg-gray-100 p-6 shadow-md">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    {/* Recipe Name */}
                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text text-lg font-semibold">Recipe Name*</span>
                        </div>
                        <input
                            type="text"
                            {...register('name', { required: true })}
                            placeholder="Recipe Name"
                            className="input input-bordered w-full"
                        />
                    </label>

                    {/* Category and Price */}
                    <div className="flex w-full gap-4">
                        <label className="form-control w-1/2">
                            <div className="label">
                                <span className="label-text text-lg font-semibold">Category</span>
                            </div>
                            <select defaultValue='default'
                                {...register('category', { required: true })}
                                className="select select-bordered w-full"
                            >
                                <option disabled value="default">
                                    Select a Category
                                </option>
                                <option value="salad">Salad</option>
                                <option value="drinks">Drinks</option>
                                <option value="pizza">Pizza</option>
                                <option value="soup">Soup</option>
                            </select>
                        </label>

                        <label className="form-control w-1/2">
                            <div className="label">
                                <span className="label-text text-lg font-semibold">Price*</span>
                            </div>
                            <input
                                type="text"
                                {...register('price', { required: true })}
                                placeholder="Price"
                                className="input input-bordered w-full"
                            />
                        </label>
                    </div>

                    {/* Recipe Details */}
                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text text-lg font-semibold">Recipe Details*</span>
                        </div>
                        <textarea
                            {...register('recipe', { required: true })}
                            placeholder="Write a detailed description of the recipe"
                            className="textarea textarea-bordered w-full h-24"
                        ></textarea>
                    </label>

                    {/* File Input */}
                    <label className="form-control w-fit">
                        <div className="label">
                            <span className="label-text text-lg font-semibold">Upload Image</span>
                        </div>
                        <input
                            {...register('image')}
                            type="file"
                            className="file-input file-input-bordered"
                        />
                    </label>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="btn text-white bg-gradient-to-r from-[#835D23] to-[#B58130]"
                    >
                        Add Item <FaUtensils className="ml-2" />
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddItems;