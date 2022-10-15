import React, { useState } from 'react';
import './product-images-slider.scss';
import PropTypes from 'prop-types';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Thumbs } from 'swiper';

const ProductImagesSlider = ({ images }) => {
    const [activeThumb, setActiveThumb] = useState();

    return (
        <>
            <Swiper
                loop={true}
                spaceBetween={10}
                navigation={true}
                modules={[Navigation, Thumbs]}
                grabCursor={true}
                thumbs={{ swiper: activeThumb }}
                className="product-images-slider"
            >
                {images.map((item, index) => (
                    <SwiperSlide key={index}>
                        <img src={item} alt="slider images" />
                    </SwiperSlide>
                ))}
            </Swiper>
            <Swiper
                onSwiper={setActiveThumb}
                loop={true}
                spaceBetween={10}
                slidesPerView={5}
                modules={[Navigation, Thumbs]}
                className="product-images-slider-thumbs"
            >
                {images.map((item, index) => (
                    <SwiperSlide key={index}>
                        <div className="product-images-slider-thumbs-wrapper">
                            <img src={item} alt="slider images" />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
};
ProductImagesSlider.propTypes = {
    images: PropTypes.array.isRequired,
};

export default ProductImagesSlider;
