import Home from '~/pages/Home';
import Contact from '~/pages/Contact';
import About from '~/pages/About';
import News from '~/pages/News';
import Collection from '~/pages/Collection';
import SideBarLayout from '~/components/Layout/SideBarLayout';

//public routes
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/contact', component: Contact },
    { path: '/about', component: About },
    { path: '/news', component: News, layout: SideBarLayout },
    { path: '/collection', component: Collection },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
