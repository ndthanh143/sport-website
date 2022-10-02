import classNames from 'classnames/bind';
import styles from './Pagination.module.scss';
import images from '~/assets/images';

const cx = classNames.bind(styles);

function Pagination() {
    return (
        <div className={cx('pagination')}>
            <div className={cx('pagination-node')}>
                <a href="/collection" className={cx('prev')}>
                    <img src={images.arrow} />
                </a>
                <a href="/collection" className={cx('page-node')}>
                    1
                </a>
                <a href="/collection" className={cx('page-node')}>
                    2
                </a>
                <a href="/collection" className={cx('page-node')}>
                    3
                </a>
                <a href="/collection" className={cx('page-node')}>
                    4
                </a>
                <a href="/collection" className={cx('next')}>
                    <img src={images.arrow} />
                </a>
            </div>
        </div>
    );
}

export default Pagination;
