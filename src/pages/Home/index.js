import React from 'react';
import Slider from '~/components/Layout/components/Slider';
import Collections from '~/components/Layout/components/Collections';
import SectionCollection from '~/components/Layout/components/SectionCollection';
import MediumProductList from '~/components/ProductShow/MediumProductList';
import Banner from '~/components/Banner';
import banners from '~/assets/images/banner';
import SectionLookBooks from '~/components/SectionLookBooks';

import classNames from 'classnames/bind';
import styles from './home.module.scss';
import Button from '~/components/Button';
import PostShow from '~/components/PostShow';
const cx = classNames.bind(styles);

function Home() {
    return (
        <React.Fragment>
            <Slider />
            <Collections />
            <div className={cx('section-new-product')}>
                <SectionCollection title="sản phẩm mới" to="/collection">
                    <MediumProductList numberColumn="col-4" />
                    <div>
                        <Banner url={banners[0].url} to={banners[0].to} />
                    </div>
                </SectionCollection>
            </div>
            <div className={cx('section-combo')}>
                <SectionCollection title="Combo thời trang thể thao">
                    <SectionLookBooks />
                </SectionCollection>
            </div>
            <SectionCollection title="Trang phục bóng đá" to="/collection">
                <MediumProductList numberColumn="col-4" horizontal />
                <div className={cx('section-football-clothes', 'row')}>
                    <div className={cx('banner', 'col-2')}>
                        <Banner url={banners[1].url} to={banners[1].to} />
                    </div>
                    <div className={cx('banner', 'col-2')}>
                        <Banner url={banners[2].url} to={banners[2].to} />
                    </div>
                </div>
            </SectionCollection>
            <div className={cx('section-voleyball')}>
                <SectionCollection title="Trang phục bóng chuyền" to="/collection">
                    <MediumProductList numberColumn="col-6" />
                </SectionCollection>
            </div>
            <div className={cx('section-bottom')}>
                <SectionCollection>
                    <div className={cx('wrapper')}>
                        <Button basic className={cx('bottom-btn')}>
                            Xem thêm nhiều sản phẩm của cp sport
                        </Button>
                    </div>
                </SectionCollection>
            </div>
            <div className={cx('new-posts')}>
                <SectionCollection title={'Bài viết mới nhất'} titleAlignCenter>
                    <PostShow numberColumn={'col-4'} />
                </SectionCollection>
            </div>
        </React.Fragment>
    );
}

export default Home;
