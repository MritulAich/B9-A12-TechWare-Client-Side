import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

const Banner = () => {
    return (
        <div>
            <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
        <SwiperSlide><img src='https://res.cloudinary.com/dvaclg6kh/image/upload/v1723640100/6e5cc5c575b8d11ce257fc20c9b58c37_otqhrh.jpg' /></SwiperSlide>
        <SwiperSlide><img src="https://res.cloudinary.com/dvaclg6kh/image/upload/v1723644038/1_bIQz5lcyEzT_aNBjrDfHWQ_drpkts.jpg" /></SwiperSlide>
        <SwiperSlide><img src="https://res.cloudinary.com/dvaclg6kh/image/upload/v1723643855/ecommerce-software-for-retail-business_ajpiik.webp" /></SwiperSlide>
      </Swiper>
        </div>
    );
};

export default Banner;