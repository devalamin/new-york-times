import React, { Suspense } from 'react';
import Header from '../components/Header/Header';
import LatestNews from '../components/LatestNews';
import Navbar from '../components/Navbar';
import LeftNavbar from '../components/layout-components/LeftNavbar';

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
                <div className='w-11/12 mx-auto grid grid-cols-12'>
                    <aside className='col-span-3'>
                        <Suspense fallback={<span className="loading loading-infinity loading-xl"></span>}>
                            <LeftNavbar categoriesPromise={categoriesPromise}></LeftNavbar>
                        </Suspense>
                    </aside>
                    <section className='col-span-6'>Main content</section>
                    <aside className='col-span-3'>right navbar</aside>
                </div>
            </main>
        </div>
    );
};

export default HomeLayout;