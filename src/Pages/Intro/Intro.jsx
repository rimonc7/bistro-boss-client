import introImg from "../../assets/home/chef-service.jpg";

const Intro = () => {
    return (
        <div
            className="py-20 lg:py-32 mt-10 bg-cover bg-center lg:bg-cover"
            style={{ backgroundImage: `url(${introImg})` }}
        >
            <div className="bg-white py-4 lg:py-14 mx-4 lg:mx-28 text-center bg-opacity-80">
                <h2 className="text-4xl font-thin">Bistro Boss</h2>
                <p className="mx-4 lg:mx-36 mt-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum 
                    deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto 
                    ducimus incidunt quibusdam nemo.
                </p>
            </div>
        </div>
    );
};

export default Intro;
