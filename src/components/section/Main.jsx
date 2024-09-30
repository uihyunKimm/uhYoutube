import React from 'react';

import Header from './Header'
import Footer from './Footer'

const Main = (props) => {
    return (
        <>
            <Header />
            <main id="main" role="main" className='max-w-full min-h-svh mx-0 my-auto pl-64 bg-slate-700'>
                {props.children}
            </main>
            <Footer/>
        </>
    );
};

export default Main;