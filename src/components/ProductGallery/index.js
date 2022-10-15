// import classNames from 'classnames/bind';
import React from 'react';
import PropTypes from 'prop-types';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
// import styles from './ProductGallery.module.scss';
import ProductImagesSlider from '~/components/product-images-slider';
import classNames from 'classnames/bind';
import styles from './ProductGallery.module.scss';
const cx = classNames.bind(styles);

// const cx = classNames.bind(styles);
function ProductGallery({ images }) {
    return (
        <div className={cx('product-gallery')}>
            <ProductImagesSlider images={images} />
        </div>
    );
}

export default ProductGallery;
