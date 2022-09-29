import classNames from 'classnames/bind';
import styles from './Button.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function Button({ to, href, primary, primaryReverse, children, onClick }) {
    let Comp = 'button';
    const props = {
        onClick,
    };

    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        Comp = 'a';
        props.href = href;
    }
    const classes = cx('wrapper', { primary, primaryReverse });

    return (
        <Comp className={classes} {...props}>
            <span>{children}</span>
        </Comp>
    );
}

export default Button;
