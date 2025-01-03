const OurShopCart = ({ item }) => {
    const { name, recipe, image, price } = item;
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
                    <p className="text-gray-600 mb-4">
                        {recipe}
                    </p>
                    <div className="card-actions">
                        <button className="btn btn-outline border-0 border-b-4 border-yellow-600 text-yellow-600 hover:text-yellow-700 px-6 py-2 text-sm font-medium bg-gray-200 shadow-md hover:bg-gray-300 transition duration-300">
                            Add To Cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurShopCart;
