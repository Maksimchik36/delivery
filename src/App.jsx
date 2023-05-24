import React, { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import SharedLayout from 'components/layout/SharedLayout';

const Shops = lazy(() => import('./pages/Shops'));
const ShoppingCart = lazy(() => import('./pages/ShoppingCart'));


const NotFound = lazy(() => import('./pages/NotFound'));

const App = () => {


  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          {/* Outlet start */}
          <Route index element={<Shops />} />
          <Route path="shoppingCart" element={<ShoppingCart />} />

          <Route path="*" element={<NotFound />} />
          {/* Outlet end */}
        </Route>
      </Routes>
    </>
  );
};

export default App;