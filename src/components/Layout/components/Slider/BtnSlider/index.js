import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

import className from 'classnames/bind';
import styles from './BtnSlider.module.scss';
const cx = className.bind(styles);

function BtnSlider({ direction, moveSlide }) {
    return (
        <button
            className={direction === 'next' ? cx('btn-slide', 'next') : cx('btn-slide', 'prev')}
            onClick={moveSlide}
        >
            {direction === 'next' ? <FaChevronRight /> : <FaChevronLeft />}
        </button>
    );
}

export default BtnSlider;
