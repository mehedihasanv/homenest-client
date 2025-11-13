import React from 'react';
import Navbar from './Navbar';
import { Outlet } from 'react-router';
import Footer from './Footer';

const MainLayout = () => {
    
    return (
        <div>
            <header>
                <Navbar></Navbar>
            </header>

            <main className='container mx-auto'>
                <Outlet></Outlet>

            </main>

            <footer>
                <Footer></Footer>

            </footer>
            
        </div>
    );
};

export default MainLayout;