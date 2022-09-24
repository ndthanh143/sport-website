import Header from '~/components/Layout/components/Header';
import Slider from '~/components/Layout/components/Slider';
function DefaultLayout({ children }) {
    return (
        <div>
            <Header />
            <div className="Container">{children}</div>
            <Slider />
        </div>
    );
}

export default DefaultLayout;
