import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper";
import { Link } from 'react-router-dom'

import "swiper/css";
import "swiper/css/navigation";
const CarouselProducts = () => {
    return (
        <div className="bg-white m-3 flex-col">
            <div className="text-2xl font-semibold  p-3">Best Sallers</div>
            <Swiper slidesPerView={5}
                spaceBetween={15}
                navigation={true}
                modules={[Navigation]}
            >
                {Array.from({ length: 9 }, (_, i) =>

                    <SwiperSlide className="flex items-center justify-center pt-4 " key={i}>
                        <Link to={`/product/${i}`}>
                            <img src={`../images/product_${i}_small.jpg`} />
                        </Link>
                    </SwiperSlide>
                )}
            </Swiper>
        </div>
    )
}

export default CarouselProducts