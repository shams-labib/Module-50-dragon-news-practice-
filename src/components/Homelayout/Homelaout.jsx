import React from 'react';
import { Outlet } from 'react-router';
import Header from '../../Pages/Header/Header';
import LatestNews from '../LatestNews/LatestNews';
import Navbar from '../Navber/Navbar';
import Leftside from '../../Layout/LeftSide/Leftside';
import RightAside from '../../Layout/Rightside/RightAside';

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
            <main className='w-11/12 mx-auto grid grid-cols-12 gap-10'>
                <aside className='left-aside col-span-3'>
                      <Leftside></Leftside>
                </aside>
                <section className='col-span-6'>
                    <Outlet>
                   
                    </Outlet>
                </section>
                <aside className='right-aside col-span-3'>
                       <RightAside></RightAside>
                </aside>
            </main>
        </div>
    );
};

export default Homelaout;