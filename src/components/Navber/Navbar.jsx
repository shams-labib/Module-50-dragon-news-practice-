import React from 'react';
import { NavLink } from 'react-router';
import user from '../../assets/user.png'

const Navbar = () => {
    return (
        <div className='flex justify-between items-center my-3'>
            <div></div>
            <div className='flex gap-4 text-accent'>
                <NavLink>Home</NavLink>
                <NavLink>About</NavLink>
                <NavLink>Career</NavLink>
            </div>
            <div className='flex gap-4'>
                <img className='rounded-full ' src={user} alt="" />
                <button className='px-9 py-2 text-white bg-primary rounded-lg'>Log In</button>
            </div>
        </div>
    );
};

export default Navbar;