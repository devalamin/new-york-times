import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa6';

const FindUs = () => {
    return (
        <div className='mt-4'>
            <h3 className='font-bold text-xl'>Find Us On</h3>
            <div className="join join-vertical flex mt-3">
                <button className="btn join-item justify-start text-lg"> <FaFacebook className='text-[#3B599C] mr-2'></FaFacebook> Facebook</button>
                <button className="btn join-item justify-start text-lg"> <FaTwitter className='text-[#58A7DE] mr-2'></FaTwitter> Twitter</button>
                <button className="btn join-item justify-start text-lg"><FaInstagram className='text-[#D82D7E] mr-2'></FaInstagram> Instagram</button>
            </div>
        </div>
    );
};

export default FindUs;