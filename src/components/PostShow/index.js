import classNames from 'classnames/bind';
import styles from './PostShow.module.scss';
import posts from '~/assets/images/posts';

const cx = classNames.bind(styles);
function PostShow({ numberColumn }) {
    return (
        <div className={cx('posts-list', 'row')}>
            {posts.map((post, index) => (
                <div className={cx('post', numberColumn)} key={index}>
                    <div className={cx('thumb')}>
                        <img src={post.url} alt={post.title} />
                    </div>
                    <div className={cx('description')}>
                        <span className={cx('title')}>
                            <p>{post.title}</p>
                        </span>
                        <span className={cx('date')}>
                            <p>Tin tức</p> <p>- {post.date}</p>
                        </span>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default PostShow;
