import SectionTitle from "../Shared/SectionTitle/SectionTitle";
import featuredImg from "../../assets/home/featured.jpg";

const Featured = () => {
    return (
        <div className="relative bg-fixed bg-cover bg-center" style={{ backgroundImage: `url(${featuredImg})` }}>
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
            <div className="relative text-white pt-8">
                <SectionTitle
                    heading={'FROM OUR MENU'}
                    subHeading={'Check it out'}
                />
                <div className="flex flex-col md:flex-row justify-center items-center mx-20 py-10 space-y-6 md:space-y-0">
                    <div className="md:px-10">
                        <img src={featuredImg} alt="Featured" className="rounded-lg shadow-lg" />
                    </div>
                    <div className="text-center md:text-left md:px-10">
                        <p className="text-xl font-light">March 20, 2024</p>
                        <h2 className="uppercase text-3xl font-bold mt-2">Where can I get some?</h2>
                        <p className="mt-4">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt
                            dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore
                            consequatur consequuntur omnis ullam maxime tenetur.
                        </p>
                        <button className="btn btn-outline mt-4 text-white border-white border-b-4 hover:bg-white hover:text-black transition">
                            Order Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Featured;
