import React, { Suspense } from 'react';
import Header from '../components/Header/Header';
import LatestNews from '../components/LatestNews';
import Navbar from '../components/Navbar';
import LeftNavbar from '../components/layout-components/LeftNavbar';
import RightNavbar from '../components/layout-components/RightNavbar';
import { Outlet } from 'react-router-dom';

const HomeLayout = () => {

    const categoriesPromise = fetch('https://openapi.programming-hero.com/api/news/categories')
        .then(res => res.json())

    return (
        <div>
            <header>
                <Header></Header>
                <section className='mt-5 w-11/12 mx-auto'>
                    <LatestNews></LatestNews>
                </section>
            </header>
            <nav>
                <Navbar></Navbar>
            </nav>
            <main>
                <div className='w-11/12 mx-auto grid grid-cols-12 gap-3'>
                    <aside className='col-span-3'>
                        <Suspense fallback={<div className='flex justify-center'><span className="loading loading-infinity loading-xl"></span></div>}>
                            <LeftNavbar categoriesPromise={categoriesPromise}></LeftNavbar>
                        </Suspense>
                    </aside>
                    <section className='col-span-6'>
                        <Outlet></Outlet>
                    </section>
                    <aside className='col-span-3'>

                        <RightNavbar></RightNavbar>
                    </aside>
                </div>
            </main>
        </div>
    );
};

export default HomeLayout;