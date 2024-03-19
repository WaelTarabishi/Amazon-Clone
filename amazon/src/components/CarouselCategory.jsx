import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { useNavigate, createBrowserRouter, createSearchParams } from 'react-router-dom'
import "swiper/css";
import "swiper/css/navigation";

const CarouselCategory = () => {
    const navigate = useNavigate()
    const searchGatergory = (catergory) => {
        navigate({
            pathname: "search",
            search: `${createSearchParams({
                category: `${catergory}`,
            })}`,
        });
    }

    return (
        <div className="bg-white m-3 p-1">
            <div className=" text-2xl font-semibold  p-3">Shop by Category</div>

            <Swiper slidesPerView={5}
                spaceBetween={10}
                navigation={true}
                modules={[Navigation]}
            >
                <SwiperSlide>
                    <img src={"../images/category_0.jpg"} className="cursor-pointer" onClick={() => { searchGatergory("All") }} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={"../images/category_1.jpg"} className="cursor-pointer" onClick={() => { searchGatergory("Amazon") }} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={"../images/category_2.jpg"} className="cursor-pointer" onClick={() => { searchGatergory("Fashion") }} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={"../images/category_3.jpg"} className="cursor-pointer" onClick={() => { searchGatergory("Computers") }} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={"../images/category_4.jpg"} className="cursor-pointer" onClick={() => { searchGatergory("Home") }} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={"../images/category_5.jpg"} className="cursor-pointer" onClick={() => { searchGatergory("Mobiles") }} />
                </SwiperSlide>

            </Swiper>
        </div>
    )
}

export default CarouselCategory