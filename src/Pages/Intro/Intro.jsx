import introImg from "../../assets/home/chef-service.jpg"
const Intro = () => {
    return (
        <div className="py-32 mt-10" style={{ backgroundImage: `url(${introImg})` }}>
            <div className="bg-white py-14 mx-28 text-center">
                <h2 className="text-4xl font-thin ">Bistro Boss</h2>
                <p className="mx-36 mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.</p>
            </div>
        </div>
    );
};

export default Intro;