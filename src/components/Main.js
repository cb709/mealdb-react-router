import React from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import SideBar from './SideBar';

const Main = () => {
    const {categories} = useLoaderData()
    
    return (
        <div className='main'>
            <div className='sidebar'>
                <SideBar categories={categories}></SideBar>
            </div>
            <div className='content'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Main;