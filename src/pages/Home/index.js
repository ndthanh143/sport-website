import React from 'react';
import Slider from '~/components/Layout/components/Slider';
import Collections from '~/components/Layout/components/Collections';
import SectionCollection from '~/components/Layout/components/SectionColection';
import MediumProductList from '~/components/ProductShow/MediumProductList';
import Banner from '~/components/Banner';
import banners from '~/assets/images/banner';
import SectionLookBooks from '~/components/SectionLookBooks';

import classNames from 'classnames/bind';
import styles from './home.module.scss';
const cx = classNames.bind(styles);

function Home() {
    return (
        <React.Fragment>
            <Slider />
            <Collections />
            <SectionCollection title="sản phẩm mới" to="/collection">
                <MediumProductList numberColumn="col-4" />
                <div>
                    <Banner url={banners[0].url} to={banners[0].to} />
                </div>
            </SectionCollection>
            <SectionCollection title="Combo thời trang thể thao" className={cx('section-combo-sport')}>
                <SectionLookBooks />
            </SectionCollection>
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
            <SectionCollection title="Trang phục bóng chuyền" to="/collection">
                <MediumProductList numberColumn="col-6" />
            </SectionCollection>
        </React.Fragment>
    );
}

export default Home;
