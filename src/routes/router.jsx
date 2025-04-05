import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import HomeLayout from '../layouts/HomeLayout';

const router = createBrowserRouter([
    {
        path:'/',
        element:<HomeLayout></HomeLayout>
    },
    {
        path:'/news',
        element:<h1>This is news</h1>
    },
    {
        path:'/auth',
        element:<h3>This is login</h3>
    },
    {
        path:'*',
        element:<p>Something Wrong</p>
    }
])

export default router;