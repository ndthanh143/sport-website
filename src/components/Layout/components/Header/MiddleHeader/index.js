import { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './MiddleHeader.module.scss';
import images from '~/assets/images';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import Button from '~/components/Button';
const cx = classNames.bind(styles);

function MiddleHeader() {
    const [actionShow, setActionShow] = useState({
        account: false,
        cart: false,
    });

    const handleActionShow = (type) => {
        if (type == 'account') {
            if (actionShow.account == false) {
                setActionShow({ account: true, cart: false });
            } else {
                setActionShow({ account: false, cart: false });
            }
        }
        if (type == 'cart') {
            if (actionShow.cart == false) {
                setActionShow({ account: false, cart: true });
            } else {
                setActionShow({ account: false, cart: false });
            }
        }
    };

    const handleDropdownClick = (e) => {
        e.stopPropagation();
    };

    return (
        <div className={cx('middle')}>
            <form className={cx('container')}>
                <div className={cx('logo')}>
                    <img
                        src="//theme.hstatic.net/200000247969/1000814323/14/logo.png?v=37"
                        alt="Công ty TNHH Thể thao CP"
                    />
                </div>
                <div className={cx('search')}>
                    <input placeholder="Tìm kiếm sản phẩm..." spellCheck={false} required />
                    <button className={cx('search-btn')}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                </div>
                <div className={cx('action')}>
                    <div
                        className={actionShow.account ? cx('account', 'js-action-show') : cx('account')}
                        onClick={() => {
                            handleActionShow('account');
                        }}
                    >
                        <div className={cx('text')}>
                            <div className={cx('link')}>
                                <span className={cx('box-icon')}>
                                    <img src={images.user} alt="User" />
                                </span>
                                <span className={cx('box-text')}>Đăng nhập/Đăng ký</span>
                            </div>
                        </div>
                        <div className={cx('dropdown')} onClick={(e) => handleDropdownClick(e)}>
                            <div className={cx('dropdown-content')}>
                                <form>
                                    <div className={cx('title')}>
                                        <h2 className={cx('heading')}>Đăng nhập tài khoản</h2>
                                        <p className={cx('legend')}>Nhập email và mật khẩu của bạn:</p>
                                    </div>
                                    <div className={cx('inner')}>
                                        <div className={cx('form__input-wrapper')}>
                                            <input type="email" required placeholder="Email" />
                                        </div>
                                        <div className={cx('form__input-wrapper')}>
                                            <input type="password" required placeholder="Password" />
                                        </div>
                                        <div className={cx('recaptcha')}>
                                            <p className={cx('content')}>
                                                This site is protected by reCAPTCHA and the Google{' '}
                                                <a href="https://policies.google.com/privacy">Privacy Policy</a> and{' '}
                                                <a href="https://policies.google.com/terms">Terms of Service</a> apply.
                                            </p>
                                        </div>
                                        {/* <button className={cx('submit-btn', 'primary-button')} type="submit">
                                            Đăng nhập
                                        </button> */}
                                        <div className={cx('submit-btn')}>
                                            <Button primary>đăng nhập</Button>
                                        </div>
                                        <div className={cx('secondary-action')}>
                                            <p>
                                                Khách hàng mới? <a href="#">Tạo tài khoản</a>
                                            </p>
                                            <p>
                                                Quên mật khẩu? <a href="#">Khôi phục mật khẩu</a>
                                            </p>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div
                        className={actionShow.cart ? cx('cart', 'js-action-show') : cx('cart')}
                        onClick={() => handleActionShow('cart')}
                    >
                        <div className={cx('text')}>
                            <div className={cx('link')}>
                                <span className={cx('box-icon')}>
                                    <img src={images.cart} alt="Cart" />
                                    <span className={cx('count-holder')}>
                                        <span className={cx('count')}>0</span>
                                    </span>
                                </span>
                                <span className={cx('box-text')}>Giỏ hàng</span>
                            </div>
                            <div className={cx('dropdown')} onClick={(e) => handleDropdownClick(e)}>
                                <div className={cx('dropdown-content')}>
                                    <div className={cx('title')}>
                                        <h2 className={cx('content')}>giỏ hàng</h2>
                                    </div>
                                    <div className={cx('cart-view')}>
                                        <div className={cx('mini-cart-icon')}>
                                            <img src={images.cartEmty} alt="cart" />
                                        </div>
                                        <div className={cx('content')}>Hiện chưa có sản phẩm</div>
                                    </div>
                                    <table className={cx('total')}>
                                        <tbody>
                                            <tr>
                                                <td className={cx('total-text')}>Tổng tiền:</td>
                                                <td className={cx('total-amount')}>0₫</td>
                                            </tr>
                                            <tr className={cx('button')}>
                                                <td>
                                                    <span className={cx('link-to-cart')}>
                                                        <Button primary to="/cart">
                                                            xem giỏ hàng
                                                        </Button>
                                                    </span>
                                                </td>
                                                <td>
                                                    <span className={cx('link-to-pay')}>
                                                        <Button primaryReverse to="/checkout">
                                                            thanh toán
                                                        </Button>
                                                    </span>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default MiddleHeader;
