import React from 'react';
import Marquee from 'react-fast-marquee';

const LatestNews = () => {
    return (
        <div className='flex  items-center bg-base-200 p-3'>
            <button className='btn text-white bg-secondary px-7 py-4'>Latest</button>
           <Marquee className='flex gap-5' speed={70}>
             <p className='font-bold'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit, aperiam.</p>
             <p className='font-bold'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit, aperiam.</p>
             <p className='font-bold'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit, aperiam.</p>
           </Marquee>
        </div>
    );
};

export default LatestNews;