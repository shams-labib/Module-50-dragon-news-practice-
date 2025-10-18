import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';

const SocialLogin = () => {
    return (
        <div>
            <h1 className='text-lg font-semibold'>Log In With</h1>

            <div className='grid grid-cols-1 mt-5 space-y-3'>
                <button className="btn btn-outline btn-secondary"><span><FcGoogle size={25}></FcGoogle></span>Log In With Google</button>
            <button className="btn btn-outline btn-primary"><span><FaGithub size={25}></FaGithub></span>Log In With Github</button>
            </div>
        </div>
    );
};

export default SocialLogin;