import React from 'react';
import { CiStar } from 'react-icons/ci';
import { FaArrowLeft, FaEye, FaStar } from 'react-icons/fa';
import { IoSaveOutline, IoShareSocialSharp } from 'react-icons/io5';
import Rating from 'react-rating';
import { Link, useLoaderData } from 'react-router-dom';
import RightNavbar from '../components/layout-components/RightNavbar';
import Header from '../components/Header/Header';
import { BiLeftArrow } from 'react-icons/bi';

const NewsDetails = () => {

    const newsDetails = useLoaderData()
    const category = newsDetails.data[0]
    const { details, _id, image_url, thumbnail_url, title, total_view } = category;

    const author = category.author;
    const rating = category.rating;
    const { badge, number } = rating;
    const { name, img, published_date } = author;

    return (

        <div>
            <Header></Header>
            <section className='grid grid-cols-12 gap-4 w-11/12 mx-auto'>
                <section className='col-span-9'>
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
                                {details}

                            </p>

                            <Link to={`/category/${category?.category_id}`} className='bg-[#D72050] pl-2 w-sm text-white text-start flex items-center py-3 space-x-3'><FaArrowLeft /> <p>All News In This Category</p></Link>
                        </div>
                    </div>
                </section>
                <section className='col-span-3'>
                    <RightNavbar></RightNavbar>
                </section>
            </section>
        </div>
    );
};

export default NewsDetails;