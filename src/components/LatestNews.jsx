import React from 'react';
import Marquee from 'react-fast-marquee';
import { Link } from 'react-router-dom';

const LatestNews = () => {
    return (
        <div className='flex items-center gap-2 bg-gray-100 py-2'>
            <p className='px-4 ml-2 py-2 bg-[#D72050] text-white'>Latest</p>
            <Marquee className='' pauseOnHover>
                <Link to='/news'>Wednesday, August 24, 2022 | Tag Cloud Tags: Biden, EU, Euro, Europe, Joe Biden, Military, News, Russia, Security, UK, Ukraine, United States, Worthy News (Worthy News) - U.S. President Joe Biden has announced nearly $3 billion in new</Link>
                
            </Marquee>
        </div>
    );
};

export default LatestNews;