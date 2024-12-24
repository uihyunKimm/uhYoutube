import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';

import Header from './Header'
import Search from './Search'
import Footer from './Footer'

const Main = (props) => {
    return (
        <HelmetProvider>
            <Helmet
                titleTemplate='%s | Linkstorage'
                defaultTitle='uxuihkk | Linkstorage'
                defer={false}
            >
                {props.title && <title>{props.title}</title>}
                <meta name="description" content={props.description} />
            </Helmet>

            <Header />
            <main id="main" role="main" className='max-w-[2000px] min-h-svh mx-0 my-auto pl-64 bg-gray-950 max-md:pl-0'>
                <Search />
                {props.children}
            </main>
            <Footer/>
        </HelmetProvider>
    );
};

export default Main;