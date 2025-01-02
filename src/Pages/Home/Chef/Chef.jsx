import SectionTitle from "../../Shared/SectionTitle/SectionTitle";

const Chef = () => {
    return (
        <section>
            <SectionTitle
                subHeading={"Should Try"}
                heading={"CHEF RECOMMENDS"}
            >
            </SectionTitle>
            <div className="lg:flex mb-24">
                <div className="bg-base-200 w-96 rounded-lg overflow-hidden mx-auto flex flex-col items-center">
                    <figure className="w-full">
                        <img
                            src="https://i.ibb.co.com/XpzJZSr/featured.jpg"
                            alt="Featured Dish"
                            className="w-full h-60 object-cover"
                        />
                    </figure>
                    <div className="card-body flex flex-col items-center text-center p-6">
                        <h2 className="card-title text-2xl font-semibold mb-2">Caeser Salad</h2>
                        <p className="text-gray-600 mb-4">
                            Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.
                        </p>
                        <div className="card-actions">
                            <button className="btn btn-outline border-0 border-b-4 border-yellow-600 text-yellow-600 hover:text-yellow-700 px-6 py-2 text-sm font-medium bg-gray-200 shadow-md hover:bg-gray-300 transition duration-300">
                                Buy Now
                            </button>
                        </div>
                    </div>
                </div>
                <div className="bg-base-200 w-96 rounded-lg overflow-hidden mx-auto flex flex-col items-center">
                    <figure className="w-full">
                        <img
                            src="https://i.ibb.co.com/XpzJZSr/featured.jpg"
                            alt="Featured Dish"
                            className="w-full h-60 object-cover"
                        />
                    </figure>
                    <div className="card-body flex flex-col items-center text-center p-6">
                        <h2 className="card-title text-2xl font-semibold mb-2">Caeser Salad</h2>
                        <p className="text-gray-600 mb-4">
                            Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.
                        </p>
                        <div className="card-actions">
                            <button className="btn bg-black border-0 text-yellow-600 hover:text-yellow-700 px-6 py-2 text-sm font-medium shadow-md hover:bg-black transition duration-300">
                                Buy Now
                            </button>
                        </div>
                    </div>
                </div>
                <div className="bg-base-200 w-96 rounded-lg overflow-hidden mx-auto flex flex-col items-center">
                    <figure className="w-full">
                        <img
                            src="https://i.ibb.co.com/XpzJZSr/featured.jpg"
                            alt="Featured Dish"
                            className="w-full h-60 object-cover"
                        />
                    </figure>
                    <div className="card-body flex flex-col items-center text-center p-6">
                        <h2 className="card-title text-2xl font-semibold mb-2">Caeser Salad</h2>
                        <p className="text-gray-600 mb-4">
                            Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.
                        </p>
                        <div className="card-actions">
                            <button className="btn btn-outline border-0 border-b-4 border-yellow-600 text-yellow-600 hover:text-yellow-700 px-6 py-2 text-sm font-medium bg-gray-200 shadow-md hover:bg-gray-300 transition duration-300">
                                Buy Now
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Chef;