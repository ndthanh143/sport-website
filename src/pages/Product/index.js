import React from 'react';
import { useEffect } from 'react';
import classNames from 'classnames/bind';
import styles from './Product.module.scss';
import ProductGallery from '~/components/ProductGallery';
import ProductDetail from '~/components/ProductDetail';
import ProductItemCard from '~/components/ProductItemCard';
import galleries from '~/assets/images/categories/galleries';
import newProducts from '~/assets/images/categories/newProducts';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

const cx = classNames.bind(styles);

function SampleNextArrow(props) {
    let { className, style, onClick } = props;
    className = cx('next');

    return <div className={className} style={{ ...style }} onClick={onClick}></div>;
}

function SamplePrevArrow(props) {
    let { className, style, onClick } = props;
    className = cx('prev');
    return <div className={className} style={{ ...style }} onClick={onClick}></div>;
}
function Product() {
    const settings = {
        className: 'center',
        infinite: false,
        centerPadding: '60px',
        speed: 300,
        slidesToShow: 5,
        swipeToSlide: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
    };
    return (
        <div className={cx('product')}>
            <div className={cx('detail')}>
                <div className={cx('content', 'row')}>
                    <div className={cx('wrap-gallery')}>
                        <ProductGallery images={galleries[0].urls} />
                    </div>
                    <div className={cx('wrap-detail')}>
                        <ProductDetail info={galleries[0]} />
                    </div>
                </div>
            </div>
            <div className={cx('relation')}>
                <h1 className={cx('heading')}>Sản phẩm liên quan</h1>
                <div className={cx('content')}>
                    <Slider {...settings}>
                        {newProducts.map((item, index) => (
                            <ProductItemCard item={item} index={index} />
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    );
}

export default Product;
