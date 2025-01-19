import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { useEffect, useState } from "react";
import Rating from "react-rating";
import { FaRegStar, FaStar } from "react-icons/fa";
import { FaQuoteLeft } from 'react-icons/fa';


const Testimonial = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('https://bistro-boss-server-woad-two.vercel.app/reviews')
            .then(res => res.json())
            .then(data => setReviews(data));
    }, []);

    return (
        <section className="my-20">
            <SectionTitle
                heading={"TESTIMONIALS"}
                subHeading={"What Our Clients Say"}
            />
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                {
                    reviews.map(review => (
                        <SwiperSlide key={review._id}>
                            <div className="text-center p-10">
                                <Rating
                                    initialRating={review.rating}
                                    readonly
                                    emptySymbol={<FaRegStar className="text-gray-400 text-3xl" />}
                                    fullSymbol={<FaStar className="text-yellow-400 text-3xl" />}
                                />
                                <FaQuoteLeft className="mx-auto text-5xl my-4"></FaQuoteLeft>
                                <p className="mt-4 text-gray-700 mx-10 lg:mx-60">{review.details}</p>
                                <p className="mt-2 text-2xl text-yellow-600 font-semibold">{review.name}</p>
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </section>
    );
};

export default Testimonial;
