import { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './MiddleHeader.module.scss';
import images from '~/assets/images';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles);

function MiddleHeader() {
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
                    <div className={cx('account')}>
                        <div className={cx('text')}>
                            <div className={cx('link')}>
                                <span className={cx('box-icon')}>
                                    <img src={images.user} alt="User" />
                                </span>
                                <span className={cx('box-text')}>Đăng nhập/Đăng ký</span>
                            </div>
                        </div>
                        {/* <div className={cx('dropdown')}>
                                <div className={cx('dropdown-content')}></div>
                            </div> */}
                    </div>
                    <div className={cx('cart')}>
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
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default MiddleHeader;
