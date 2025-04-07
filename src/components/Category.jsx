import React, { useState } from 'react';
import { CiStar } from 'react-icons/ci';
import { FaStar } from 'react-icons/fa';
import { FaEye } from 'react-icons/fa6';
import { IoSaveOutline, IoShareSocialSharp } from 'react-icons/io5';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';

const Category = ({ category }) => {
    const { details, _id, image_url, thumbnail_url, title, total_view } = category;

    const author = category.author;
    const rating = category.rating;
    const { badge, number } = rating;
    const { name, img, published_date } = author;

    const seeMore = <>
        <Link>See</Link>
    </>

    // const displayText = isExpanded ? details : `${details.slice(0, maxLength)}${details.length > maxLength ? '...' : ''}`;

    const displayText = details.length > 150 ? details.slice(0, 150) : details

    return (
        <div className='mb-10 bg-slate-50 p-2'>
            <div className='p-2 flex justify-between bg-slate-100 my-1'>
                <div className='flex space-x-2'>
                    <div>
                        <img className='h-10 w-10 rounded-full' src={img} alt="" />
                    </div>
                    <div>
                        <p>{name}</p>
                        <small className='font-light'>{published_date}</small>
                    </div>
                </div>
                <div className='flex text-xl text-gray-600 items-center space-x-2'>
                    <IoSaveOutline />
                    <IoShareSocialSharp />
                </div>
            </div>

            <div>
                <h3 className="text-lg font-semibold my-2">{title}</h3>
                <div>
                    <img className="w-full rounded" src={image_url} alt="" />
                </div>

                {/* Collapsible text */}
                <p className="my-2 text-gray-800">
                    {displayText}
                    {
                        displayText.length == 150 ? <Link to={`/news/${_id}`} className='text-blue-500 cursor-alias'>...See More</Link> : ''
                    }

                </p>

                <div className='bg-slate-100 py-3 px-1 flex justify-between items-center'>
                    <Rating
                        readonly
                        initialRating={number}
                        emptySymbol={<CiStar />}
                        fullSymbol={<FaStar />}
                        className='text-yellow-400'

                    ></Rating>
                    <div className='flex items-center space-x-2'>
                        <FaEye></FaEye>
                        <p> {total_view || 0}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Category;
