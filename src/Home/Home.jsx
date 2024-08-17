import React from 'react';
import { Outlet } from 'react-router-dom';
import Products from './Product/Products';

const Home = () => {
    return (
        <div>
          <Products></Products>
        </div>
    );
};

export default Home;