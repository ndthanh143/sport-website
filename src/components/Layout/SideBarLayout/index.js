import SideBar from '~/components/Layout/components/SideBar';
import Footer from '~/components/Layout/components/Footer';
import Header from '~/components/Layout/components/Header';
import Breadcrumb from '~/components/Breadcrumb';
import classNames from 'classnames/bind';
import styles from './SideBarLayout.module.scss';
const cx = classNames.bind(styles);

function SideBarLayout({ children, sideBarList }) {
    return (
        <>
            <Header />
            <div className={cx('container')}>
                <div className={cx('content')}>{children}</div>
                <div className={cx('wrap-sideBar')}>
                    <SideBar>{sideBarList}</SideBar>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default SideBarLayout;
