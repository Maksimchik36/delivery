import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header';
import Footer from '../Footer';
import LoaderSuspense from 'components/share/loaders/LoaderSuspense/LoaderSuspense';


const SharedLayout = () => {
    return (
        <>
            <Header />
            <Suspense fallback={<LoaderSuspense />}>
                <Outlet />
            </Suspense>
            <Footer />
        </>
    );
};

export default SharedLayout;