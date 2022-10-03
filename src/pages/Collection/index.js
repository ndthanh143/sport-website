import classNames from 'classnames/bind';
import SectionCollection from '~/components/Layout/components/SectionCollection';
import MediumProductList from '~/components/ProductShow/MediumProductList';
import styles from './Collection.module.scss';
import banners from '~/assets/images/banner';
import images from '~/assets/images';
import FilterBlock from '~/components/FilterBlock';
import Pagination from '~/components/Pagination';
import Breadcrumb from '~/components/Breadcrumb';

const cx = classNames.bind(styles);

function Collection() {
    const ListCheckBox = {
        brand: ['CP - SPORT', 'EGAN', 'KHÁC'],
        price: ['Dưới 100.000', '100.000đ - 200.000đ', '200.000đ - 300.000đ', 'Trên 300.000đ'],
        size: ['S', 'M', 'L', 'XL', 'XXL'],
    };
    return (
        <div className={cx('collection')}>
            <div className={cx('banner')}>
                <img src={banners[3].url} alt="collection" />
            </div>
            <div className={cx('content')}>
                <div className={cx('wrapper-content')}>
                    <div className={cx('heading')}>
                        <h1 className={cx('title')}>Title product</h1>
                    </div>
                    <div className={cx('filter')}>
                        <p className={cx('title-filter')}>
                            <span className={cx('icon')}>
                                <img src={images.filterIconTitle} alt="filter" />
                            </span>
                            Bộ lọc
                        </p>
                        <div className={cx('group-filter', 'row')}>
                            <FilterBlock title="Thương hiệu" ListCheckBox={ListCheckBox.brand} />
                            <FilterBlock title="Lọc giá" ListCheckBox={ListCheckBox.price} />
                            <FilterBlock title="Màu sắc" ListCheckBox={[]} />
                            <FilterBlock title="Kích thước" ListCheckBox={ListCheckBox.size} />
                        </div>
                    </div>
                    <div className={cx('wrap-list')}>
                        <SectionCollection>
                            <MediumProductList numberColumn="col-4" />
                        </SectionCollection>
                    </div>
                    <Pagination />
                </div>
            </div>
        </div>
    );
}

export default Collection;
