import Home from '~/pages/Home';
import Contact from '~/pages/Contact';
import About from '~/pages/About';
import News from '~/pages/News';
import Collection from '~/pages/Collection';
import ProductDetails from '~/pages/ProductDetails';
import Search from '~/pages/Search';

// import SideBarLayout from '~/components/Layout/SideBarLayout';
import Account from '~/pages/Account';
import Cart from '~/pages/Cart';
import Dashboard from '~/pages/Admin/Dashboard';

//public routes
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/contact', component: Contact },
    { path: '/about', component: About },
    { path: '/news', component: News },
    { path: '/collection/thoi-trang-the-thao', component: Collection },
    { path: '/collection/quan-ao-bong-da', component: Collection },
    { path: '/collection/quan-ao-bong-chuyen', component: Collection },
    { path: '/collection/trang-phuc-chay-bo', component: Collection },
    { path: '/collection/phu-kien-the-thao', component: Collection },
    { path: '/collection/do-clb-doi-tuyen', component: Collection },
    { path: '/collection', component: Collection },
    { path: '/product/:id', component: ProductDetails },
    { path: '/search/:keyword', component: Search },
    { path: '/account', component: Account },
    { path: '/account/login', component: Account },
    { path: '/account/register', component: Account },
    { path: '/cart', component: Cart },
];

const privateRoutes = [{ path: '/admin/dashboard', component: Dashboard }];

export { publicRoutes, privateRoutes };
