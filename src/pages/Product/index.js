import React from 'react';
import classNames from 'classnames/bind';
import styles from './Product.module.scss';
import ProductGallery from '~/components/ProductGallery';
import ProductDetail from '~/components/ProductDetail';
import galleries from '~/assets/images/categories/galleries';
import ProductShow from '~/components/ProductShow';

const cx = classNames.bind(styles);

function Product() {
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
                    <ProductShow numberColumn="col-5" />
                </div>
            </div>
        </div>
    );
}

export default Product;
