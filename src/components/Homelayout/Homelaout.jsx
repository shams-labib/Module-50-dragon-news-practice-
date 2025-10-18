import React from 'react';
import { Outlet } from 'react-router';
import Header from '../../Pages/Header/Header';
import LatestNews from '../LatestNews/LatestNews';
import Navbar from '../Navber/Navbar';

const Homelaout = () => {
    return (
        <div>
            <header>
             <Header></Header>

             <section className='w-11/12 mx-auto'>
                <LatestNews></LatestNews>
             </section>

             <nav className='w-11/12 mx-auto'>
                <Navbar></Navbar>
             </nav>
            </header>
            <main>
                <aside className='left-aside'>

                </aside>
                <section>
                    <Outlet>

                    </Outlet>
                </section>
                <aside className='right-aside'>

                </aside>
            </main>
        </div>
    );
};

export default Homelaout;