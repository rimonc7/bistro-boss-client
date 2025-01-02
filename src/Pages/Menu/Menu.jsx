import { Helmet } from 'react-helmet-async';
import Cover from '../Shared/Cover/Cover';
import image from "../../assets/menu/banner3.jpg"
import saladBg from '../../assets/menu/salad-bg.jpg'
import pizzaBg from '../../assets/menu/pizza-bg.jpg'
import soupBg from '../../assets/menu/soup-bg.jpg'
import desertBg from '../../assets/menu/dessert-bg.jpeg'

import FoodCover from '../Shared/FoodCover/FoodCover';
import FoodCategory from '../Shared/FoodCategory/FoodCategory';
import SectionTitle from '../Shared/SectionTitle/SectionTitle';

const Menu = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>
            <Cover
                image={image}
                title={"OUR MENU"}
                text={"Would you like to try a dish?"}
            >
            </Cover>
            <SectionTitle
                heading={"TODAY'S OFFER"}
                subHeading={"Don't miss"}
            >
            </SectionTitle>
            <FoodCategory
                category={"popular"}
            >
            </FoodCategory>
            <FoodCover
                image={saladBg}
                title={"Salads"}
                text={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
            >
            </FoodCover>
            <div className='mt-10'>
                <FoodCategory
                    category={"salad"}
                >
                </FoodCategory>
            </div>
            <FoodCover
                image={pizzaBg}
                title={"Pizza"}
                text={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
            >
            </FoodCover>
            <div className='mt-10'>
                <FoodCategory
                    category={"pizza"}
                >
                </FoodCategory>
            </div>
            <FoodCover
                image={soupBg}
                title={"Soups"}
                text={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
            >
            </FoodCover>
            <div className='mt-10'>
                <FoodCategory
                    category={"dessert"}
                >
                </FoodCategory>
            </div>
            <FoodCover
                image={desertBg}
                title={"Desert"}
                text={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
            >
            </FoodCover>
            <div className='mt-10'>
                <FoodCategory
                    category={"dessert"}
                >
                </FoodCategory>
            </div>
        </div>
    );
};

export default Menu;