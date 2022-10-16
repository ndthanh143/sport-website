import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './sideBar.module.scss';
import SideBox from '~/components/SideBox';
import PostShow from '~/components/PostShow';
const cx = classNames.bind(styles);

function SideBar({ children }) {
    return (
        <div className={cx('container')}>
            <SideBox title="Bài viết mới nhất">
                <PostShow horizontal miniShow />
            </SideBox>
            <SideBox>
                <ul className={cx('menu-list')}>
                    <li className={cx('item')}>
                        <Link to="/">Trang chủ</Link>
                    </li>
                    <li className={cx('item')}>
                        <Link to="/collection">Danh mục sản phẩm</Link>
                    </li>
                    <li className={cx('item')}>
                        <Link to="/news">Tin tức &amp; sự kiện</Link>
                    </li>
                    <li className={cx('item')}>
                        <Link to="/contact">Liên hệ</Link>
                    </li>
                </ul>
            </SideBox>
        </div>
    );
}

export default SideBar;
