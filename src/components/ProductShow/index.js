import classNames from 'classnames/bind';
import styles from './ProductShow.module.scss';
import newProducts from '~/assets/images/categories/newProducts';
import ProductItemCard from '~/components/ProductItemCard';

const cx = classNames.bind(styles);

function ProductShow({ numberColumn, horizontal }) {
    return (
        <div className={cx('product-list', 'row-wrap')}>
            {newProducts.map((item, index) => (
                <ProductItemCard item={item} numberColumn={numberColumn} horizontal={horizontal} key={index} />
            ))}
        </div>
    );
}

export default ProductShow;
