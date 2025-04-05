import React, { use, useState } from 'react';

const LeftNavbar = ({ categoriesPromise }) => {
    // const [categories, setCategories] = useState([])
    const allCategories = use(categoriesPromise)
    const categories = allCategories.data.news_category
    console.log(categories);
    // setCategories(allCategories.data.news_category)

    return (
        <div>
            <h3>All Categories({categories.length})</h3>
            <div className='w-2/3 mt-5 flex flex-col space-y-2'>
                {
                    categories.map(category => <button className='btn btn-primary' key={category.category_id}>{category.category_name}</button>)
                }
            </div>
        </div>
    );
};

export default LeftNavbar;