import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './breadcrumb.module.scss';

const cx = classNames.bind(styles);

function Breadcrumb() {
    const { pathname } = useLocation();
    let addCrumb = [];

    const pathCase = {
        collectionAll: '/collection',
        news: '/news',
        about: '/about',
        contact: '/contact',
    };

    switch (pathname) {
        case pathCase.collectionAll:
            addCrumb = ['Danh mục', 'Tất cả sản phẩm'];
            break;
        case pathCase.news:
            addCrumb = ['Tin tức'];
            break;
        case pathCase.about:
            addCrumb = ['Giới Thiệu Công Ty TNHH Thể Thao CP'];
            break;
        case pathCase.contact:
            addCrumb = ['Liên hệ'];
            break;
        default:
            return;
    }
    const crumbs = ['Trang chủ', ...addCrumb];
    return (
        <nav className={cx('container')}>
            <ol className={cx('breadcrumb-list')}>
                {crumbs.map((crumb, index) => {
                    const disabled = index === crumbs.length - 1 ? 'disabled' : false;

                    return (
                        <li key={index} className={cx('item')}>
                            {disabled ? (
                                <span className={cx('btn', 'disabled')}>{crumb}</span>
                            ) : (
                                <Link to="/" className={cx('btn')}>
                                    {crumb}
                                </Link>
                                // <span></span>
                            )}
                        </li>
                    );
                })}
            </ol>
        </nav>
    );
}

export default Breadcrumb;
