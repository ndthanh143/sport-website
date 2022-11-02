import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes } from '~/routes';
import { DefaultLayout } from '~/components/Layout';
import ScrollToTop from './ScrollToTop';
import { useEffect } from 'react';
import store from './store';
import { loadUser } from '~/actions/userActions';

function App() {
    useEffect(() => {
        store.dispatch(loadUser());
    }, []);

    return (
        <Router>
            <ScrollToTop />
            <div className="App">
                <Routes>
                    {publicRoutes.map((route, index) => {
                        const Page = route.component;
                        let Layout = route.layout || DefaultLayout;
                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <Layout>
                                        <Page />
                                    </Layout>
                                }
                            />
                        );
                    })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
