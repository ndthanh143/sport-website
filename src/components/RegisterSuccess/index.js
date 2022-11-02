import classNames from 'classnames/bind';
import { FaCheck } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import styles from './RegisterSuccess.module.scss';
const cx = classNames.bind(styles);
function SuccessModal() {
    return (
        <div className={cx('background')}>
            <div className={cx('container')}>
                <div className={cx('icon')}>
                    <FaCheck />
                </div>
                <h3 className={cx('title')}>Success</h3>
                <p className={cx('text')}>Registered successfully</p>

                <Link to="/account/login">
                    <button className={cx('direction-btn')}>OK</button>
                </Link>
            </div>
        </div>
    );
}

export default SuccessModal;
