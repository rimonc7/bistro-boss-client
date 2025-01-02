import { Helmet } from "react-helmet-async";
import Featured from "../Featured/Featured";
import Intro from "../Intro/Intro";
import Banner from "./Banner/Banner";
import Category from "./Category/Category";
import Chef from "./Chef/Chef";
import PopularMenu from "./PopularMenu/PopularMenu";
import Testimonial from "./Testimonial/Testimonial";

const Home = () => (
    <div>
        <Helmet>
            <title>Bistro Boss | Home</title>
        </Helmet>
        <Banner></Banner>
        <Category></Category>
        <Intro></Intro>
        <PopularMenu></PopularMenu>
        <Chef></Chef>
        <Featured></Featured>
        <Testimonial></Testimonial>
    </div>
);

export default Home;
