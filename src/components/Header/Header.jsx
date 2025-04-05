import React from 'react';
import logo from '../../assets/logo.png'
import moment from 'moment';


const Header = () => {
    
    return (
        <div className='py-5 flex flex-col gap-2 items-center justify-center'>
            <div>
                <img className='w-[300px]' src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMuVHXZWrIS41xopYUxL-0-CVRjboFkgWBpZDfOkt-ncDrY31-upCibmuIEzNmyIrkJg&usqp=CAU`} alt="" />
            </div>
            <h4 className='text-gray-400'>Journalism without fear an favour</h4>
            <p className='text-gray-400'>{moment().format("dddd, MMMM Do YYYY")}</p>
        </div>
    );
};

export default Header;