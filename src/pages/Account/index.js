import { useLocation } from 'react-router-dom';
import className from 'classnames/bind';
import styles from './Account.module.scss';
import Login from '~/components/Login';
import Register from '~/components/Register';

const cx = className.bind(styles);

function Account(props) {
    const location = useLocation();
    return <div className={cx('container')}>{location.pathname === '/account/login' ? <Login /> : <Register />}</div>;
}

export default Account;
