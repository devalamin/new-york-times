import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Category from '../components/Category';

const CategoryNews = () => {
    const { data } = useLoaderData()
    console.log(data);
    return (
        <div>
            <div>
                {
                    data.map(category =><Category 
                        key={category._id}
                        category={category}
                        ></Category>)
                }
            </div>
        </div>
    );
};

export default CategoryNews;