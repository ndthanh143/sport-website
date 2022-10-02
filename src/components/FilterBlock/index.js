import classNames from 'classnames/bind';
import { FaChevronDown } from 'react-icons/fa';
import styles from './FilterBlock.module.scss';

const cx = classNames.bind(styles);
function FilterBlock() {
    return (
        <div className={cx('filter-block-wrap', 'col-4')}>
            <div className={cx('filter-block')}>
                <div className={cx('subtitle')}>
                    <span>Text</span>
                    <span className={cx('icon')}>
                        <FaChevronDown />
                    </span>
                </div>
                <div className={cx('content')}>
                    <ul className={cx('checkbox-list')}>
                        <li>
                            <input type="checkbox" />
                            <label>CheckBox</label>
                        </li>
                        <li>
                            <input type="checkbox" />
                            <label>CheckBox</label>
                        </li>
                        <li>
                            <input type="checkbox" />
                            <label>CheckBox</label>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default FilterBlock;
