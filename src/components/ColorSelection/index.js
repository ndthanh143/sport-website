import classNames from 'classnames/bind';
import styles from './ColorSelection.module.scss';
const cx = classNames.bind(styles);

function ColorSelection({ color, checked }) {
    return (
        <label className={cx('custom-radio-btn', color)}>
            <input type="radio" name="color-option" value={color} checked={checked} />
            <span className={cx('checkmark')}></span>
        </label>
    );
}

export default ColorSelection;
