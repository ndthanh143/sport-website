import Pagination from '~/components/Pagination';
import PostShow from '~/components/PostShow';

function News() {
    return (
        <>
            <PostShow horizontal largeShow />
            <Pagination />
        </>
    );
}

export default News;
