import React,{useState, useEffect} from 'react'

import { Helmet, HelmetProvider } from 'react-helmet-async';

import Header from './Header'
import Search from './Search'
import Footer from './Footer'
import MainShadow from '../shadow/MainShadow';

const Main = (props) => {
    const [loading, setLoading] = useState(true);
        useEffect(()=>{
            setTimeout(()=>{
                setLoading(false);
            }, 500);
        },[]);
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
            <div className='relative w-full overflow-hidden'>
                {!loading && (<main id="main" role="main" className='max-w-[2000px] min-h-svh mx-0 my-auto pl-64 bg-gray-950 max-md:pl-0 -z-20 pb-10 '>
                    <Search />
                    {props.children}
                </main>)}
                {loading && (<div className="flex h-svh pl-64 justify-center items-center text-navback-darkfont">
                                    <div className="animate-spin h-5 w-5 border-2 m-4 border-navback-400 border-t-navback-darkfont rounded-full animate-spin"></div>
                                    Processing...
                                </div>)}
                <MainShadow/>
                <Footer/>
            </div>
            
        </HelmetProvider>
    );
};

export default Main;