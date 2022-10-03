import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './breadcrumb.module.scss';

const cx = classNames.bind(styles);

function Breadcrumb({ Crumbs }) {
    const crumbs = ['Trang chủ', ...Crumbs];
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
                            )}
                        </li>
                    );
                })}
            </ol>
        </nav>
    );
}

export default Breadcrumb;
