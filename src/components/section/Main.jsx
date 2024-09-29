import React from 'react';

const Main = (props) => {
    return (
        <main id="main" role="main" className='max-w-full min-h-svh mx-0 my-auto pl-64 bg-slate-700'>
            {props.children}
        </main>
    );
};

export default Main;