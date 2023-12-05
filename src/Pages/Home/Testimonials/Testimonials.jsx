import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'

const Testimonials = () => {
    const [reviews, setReviews] = useState([]);
    useEffect( () => {
        fetch('reviews.json')
        .then(res => res.json())
        .then(data => setReviews(data))
    }, [])
    return (
        <div>
            <SectionTitle
            subHeading="What Our Client Say"
            heading={'Testimonials'}
            ></SectionTitle>
            
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {
            reviews.map(review => <SwiperSlide
            key={review._id}
            >
                <div className="flex flex-col items-center mx-24 my-16">
                <Rating
      style={{ maxWidth: 180 }}
      value={review.rating}
      readOnly
    />
    {/* <p><i class="fa-solid fa-quote-left"></i></p> */}
                    <p className="py-8">{review.details}</p>
                    <h3 className="text-2xl text-orange-400 text-center">{review.name}</h3>
                </div>
            </SwiperSlide>)
        }
      </Swiper>
        </div>
    );
};

export default Testimonials;