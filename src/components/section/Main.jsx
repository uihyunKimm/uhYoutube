import React from 'react';

import Header from './Header'
import Footer from './Footer'
import { Helmet, HelmetProvider } from 'react-helmet-async';

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
            <main id="main" role="main" className='max-w-full min-h-svh mx-0 my-auto pl-64 bg-slate-700'>
                {props.children}
            </main>
            <Footer/>
        </HelmetProvider>
    );
};

export default Main;