import React from 'react';
import Header from '../components/Header/Header';
import LatestNews from '../components/LatestNews';

const HomeLayout = () => {
    return (
        <div>
            <header>
                <Header></Header>
                <section className='mt-10 w-11/12 mx-auto'>
                    <LatestNews></LatestNews>
                </section>
            </header>
            <nav></nav>
            <main></main>
        </div>
    );
};

export default HomeLayout;