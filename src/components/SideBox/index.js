import classNames from 'classnames/bind';
import styles from './SideBox.module.scss';
const cx = classNames.bind(styles);

function SideBox({ title, children }) {
    return (
        <div className={cx('container')}>
            <div className={cx('title')}>
                <h2>{title}</h2>
            </div>
            <div className={cx('content')}>{children}</div>
        </div>
    );
}

export default SideBox;
