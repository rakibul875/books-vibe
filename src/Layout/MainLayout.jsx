import React from 'react';
import NavBar from '../components/shared/navBar/NavBar';
import { Outlet } from 'react-router';

const MainLayout = () => {
    return (
        <div>
            <NavBar/>
            <Outlet/>
        </div>
    );
};

export default MainLayout;