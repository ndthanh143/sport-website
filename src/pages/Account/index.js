import { useLocation, Link, useNavigate } from 'react-router-dom';
import className from 'classnames/bind';
import styles from './Account.module.scss';
import Login from '~/components/Login';
import Register from '~/components/Register';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '~/actions/userActions';

const cx = className.bind(styles);

function Account(props) {
    const location = useLocation();
    const navigate = useNavigate();

    const dispatch = useDispatch();
    const { isAuthenticated, error, loading, user } = useSelector((state) => state.auth);

    let ComponentRender;
    switch (location.pathname) {
        case '/account/login':
            ComponentRender = Login;
            break;
        case '/account/register':
            ComponentRender = Register;
            break;
        case '/account':
            if (isAuthenticated) {
                ComponentRender = null;
            } else {
                navigate('/account/login');
            }
            break;
        default:
            return;
    }

    const handleLogout = () => {
        dispatch(logout());
        window.location.reload();
    };

    return (
        <div className={cx('container')}>
            {ComponentRender ? (
                <ComponentRender />
            ) : (
                <>
                    <div className={cx('heading')}>
                        <h2>Tài khoản của bạn</h2>
                    </div>
                    <div className={cx('wrapper')}>
                        <div className={cx('sidebar')}>
                            <h4 className={cx('title')}>Tài khoản</h4>
                            <ul className={cx('list-item')}>
                                <li className={cx('item')}>
                                    <Link to="/account">Thông tin tài khoản</Link>
                                </li>
                                <li className={cx('item')}>
                                    <Link to="">Danh sách địa chỉ</Link>
                                </li>
                                <li className={cx('item')} onClick={handleLogout}>
                                    <Link to="/">Đăng xuất</Link>
                                </li>
                            </ul>
                        </div>
                        <div className={cx('content')}>
                            <div className={cx('info')}>
                                <h4 className={cx('title')}>Thông tin tài khoản</h4>
                                <div className={cx('detail')}>
                                    <p className={cx('text', 'userName')}>{user.name}</p>
                                    <p className={cx('text')}>{user.email}</p>
                                    <p className={cx('text')}>Việt Nam</p>
                                </div>
                            </div>
                            <div className={cx('order')}>
                                <p className={cx('text')}>Bạn chưa đặt mua sản phẩm.</p>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}

export default Account;
