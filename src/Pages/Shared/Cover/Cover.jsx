import { Parallax } from 'react-parallax';

const Cover = ({ image, title, text }) => {
    return (
        <Parallax
            blur={{ min: -15, max: 15 }}
            bgImage={image}
            bgImageAlt="the dog"
            strength={-200}
        >
            <div className="py-32">
                <div className="bg-black bg-opacity-50 py-14 mx-28 text-center">
                    <h2 className=" text-white text-7xl font-bold uppercase ">{title}</h2>
                    <p className="text-white mx-36 mt-4 text-2xl font-semibold uppercase">{text}</p>
                </div>
            </div>
        </Parallax>
    );
};

export default Cover;