import React from 'react';
import Footer from '../Shared/Footer/Footer';
import Navber from '../Shared/Nave/Navber';
import { Outlet } from 'react-router-dom';

const Root = () => {
    return (
        <div className='container mx-auto'>
            <Navber></Navber>
            <div className='min-h-[calc(100vh-274px)]'>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;