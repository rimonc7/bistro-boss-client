import { Parallax } from 'react-parallax';

const FoodCover = ({ image, title, text }) => {
    return (
        <Parallax
            blur={{ min: -15, max: 15 }}
            bgImage={image}
            bgImageAlt={title}
            strength={-200}
        >
            <div className="py-16 lg:py-32">
                <div className="bg-black bg-opacity-50 py-10 lg:py-14 mx-4 lg:mx-28 text-center rounded-md">
                    <h2 className="text-white text-3xl lg:text-5xl font-bold uppercase">{title}</h2>
                    <p className="text-white mx-4 lg:mx-36 mt-4 text-base lg:text-lg">{text}</p>
                </div>
            </div>
        </Parallax>
    );
};

export default FoodCover;
