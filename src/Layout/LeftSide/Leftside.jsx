import React, { Suspense } from 'react';
import Categories from './Categories';

const Leftside = () => {
    return (
        <div>
            <Suspense fallback={<span className="loading loading-spinner text-info"></span>}>
            <Categories></Categories>
            </Suspense>
        </div>
    );
};

export default Leftside;