import React, { use, useState } from 'react';
import { NavLink } from 'react-router-dom';

const LeftNavbar = ({ categoriesPromise }) => {
    const allCategories = use(categoriesPromise)
    const categories = allCategories.data.news_category
    console.log(categories);


    return (
        <div>
            <h3>All Categories({categories.length})</h3>
            <div className='w-2/3 mt-5 flex flex-col space-y-2'>
                {
                    categories.map(category => <NavLink to={`/news/${category.category_id}`} className='btn btn-primary' key={category.category_id}>{category.category_name}</NavLink>)
                }
            </div>
        </div>
    );
};

export default LeftNavbar;