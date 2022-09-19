import { FaChevronUp } from 'react-icons/fa';
import config from '~/config';
import Menu, { MenuItem } from './Menu';

function NavBar() {
    return (
        <Menu>
            <MenuItem title="Trang chủ" to={config.routes.home} />
            <MenuItem title="Danh mục sản phẩm " to={config.routes.collection} icon={<FaChevronUp />} />
            <MenuItem title="Tin tức &amp; sự kiện" to={config.routes.news} />
            <MenuItem title="Giới thiệu" to={config.routes.about} />
            <MenuItem title="Liên hệ" to={config.routes.contact} />
        </Menu>
    );
}

export default NavBar;
