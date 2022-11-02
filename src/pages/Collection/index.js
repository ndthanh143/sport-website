import classNames from 'classnames/bind';
import SectionCollection from '~/components/Layout/components/SectionCollection';
import ProductShow from '~/components/ProductShow';
import styles from './Collection.module.scss';
import banners from '~/assets/images/banner';
import images from '~/assets/images';
import FilterBlock from '~/components/FilterBlock';
import PaginationComp from '~/components/Pagination';
import ScrollToTop from '~/ScrollToTop';

import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { clearErrors, getAllProducts } from '~/actions/productActions';
import Loader from '~/components/Loader';
import Breadcrumb from '~/components/Breadcrumb';

const cx = classNames.bind(styles);

function Collection() {
    const [currentPage, setCurrentPage] = useState(1);

    const dispatch = useDispatch();
    const { loading, products, error, productsCount, resPerPage } = useSelector((state) => state.products);
    useEffect(() => {
        dispatch(getAllProducts(currentPage));

        if (error) {
            clearErrors(error);
        }
    }, [dispatch, currentPage]);
    const setCurrentPageNo = (pageNumber) => {
        setCurrentPage(pageNumber);
    };
    const ListCheckBox = {
        brand: ['CP - SPORT', 'EGAN', 'KHÁC'],
        price: ['Dưới 100.000', '100.000đ - 200.000đ', '200.000đ - 300.000đ', 'Trên 300.000đ'],
        size: ['S', 'M', 'L', 'XL', 'XXL'],
    };
    const ListColor = [
        'red',
        'yellow',
        'orange',
        'white',
        'purple',
        'black',
        'light-green',
        'dark-green',
        'gray',
        'light-blue',
        'dark-blue',
        'blue',
        'copper',
        'greyish',
        'dark-gray',
    ];

    if (!loading) {
        return (
            <>
                <ScrollToTop />
                <Breadcrumb cases={[{ title: 'Danh mục', to: '/collection' }, { title: 'Tất cả sản phẩm' }]} />
                <div className={cx('collection')}>
                    <div className={cx('banner')}>
                        <img src={banners[3].url} alt="collection" />
                    </div>
                    <div className={cx('content')}>
                        <div className={cx('wrapper-content')}>
                            <div className={cx('heading')}>
                                <h1 className={cx('title')}>Tất cả sản phẩm</h1>
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
                                    <FilterBlock title="Màu sắc" ListColor={ListColor} />
                                    <FilterBlock title="Kích thước" ListCheckBox={ListCheckBox.size} />
                                </div>
                            </div>
                            <div className={cx('wrap-list')}>
                                <SectionCollection>
                                    <ProductShow products={products} numberColumn="col-4" />
                                </SectionCollection>
                            </div>
                            <PaginationComp
                                activePage={currentPage}
                                itemsCountPerPage={resPerPage}
                                totalItemsCount={productsCount}
                                onChange={setCurrentPageNo}
                            />
                        </div>
                    </div>
                </div>
            </>
        );
    } else {
        return <Loader />;
    }
}

export default Collection;
