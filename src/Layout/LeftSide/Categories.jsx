import React, { use } from 'react';
import { NavLink } from 'react-router';

const CategoriesPromise = fetch('/categories.json').then(res=> res.json());

const Categories = () => {

    const categories = use(CategoriesPromise);

    return (
        <div className=''>
            <h1 className='font-bold'>All Categories ({categories.length})</h1>
            
            <div className='grid grid-cols-1 mt-5'>
                {
                categories.map(data => <NavLink to={`/category/${data.id}`} key={data.id} className="btn bg-base-100 border-none hover:bg-base-200">{data.name}</NavLink>)
            }
            </div>
        </div>
    );
};

export default Categories;