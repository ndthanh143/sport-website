import { useState } from 'react';
import Header from '~/components/Layout/components/Header';
import Footer from '~/components/Layout/components/Footer';
import Breadcrumb from '~/components/Breadcrumb';

function DefaultLayout({ children }) {
    return (
        <>
            <Header />
            <Breadcrumb />
            <div className="Container">{children}</div>
            <Footer />
        </>
    );
}

export default DefaultLayout;
