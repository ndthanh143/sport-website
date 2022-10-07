import classNames from 'classnames/bind';
import styles from './MediumProductList.module.scss';
import newProducts from '~/assets/images/categories/newProducts';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function MediumProductList({ numberColumn, horizontal }) {
    return (
        <div className={cx('product-list', 'row-wrap')}>
            {newProducts.map((item, index) => (
                <Link to={`/product/${item.slug}`} className={cx('product', numberColumn, { horizontal })} key={index}>
                    <div className={cx('image-list')}>
                        <img src={item.urls[0]} alt={item.title} className={cx('first-image')} />
                        <img src={item.urls[1]} alt={item.title} className={cx('second-image')} />
                    </div>

                    <div className={cx('detail')}>
                        <Link to={item.to} className={cx('title')}>
                            {item.title}
                        </Link>
                        <p className={cx('price')}>{item.price},000₫</p>
                    </div>
                    {item.amount === 0 ? <span className={cx('label-sold-out')}>Hết hàng</span> : null}
                </Link>
            ))}
        </div>
    );
}

export default MediumProductList;
