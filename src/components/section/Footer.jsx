import React from 'react';
import { MdContentCopy } from "react-icons/md";

const Footer = () => {
    /* function copyToClipBoard() {
        let content = document.getElementById('email');
        content.execCommand('copy');
    } */
    return (
        <footer id='footer' role='contenttinfo' className='relative text-center text-navback-font font-extralight tracking-[0.2rem] bg-transparent backdrop-blur-md p-5 pl-64 w-full text-[0.8rem] max-md:w-full  max-md:ml-0 z-10 overflow-visible opacity-70 hover:opacity-100 transition-opacity md:w-full md:ml-0'>
            <a href="mailto:dmlxld@gmail.com" id='email' rel="noopener noreferrer">
                dmlxld@gmail.com
                {/* <MdContentCopy /> */}
            </a>
            {/* <button onClick={copyToClipBoard()}></button> */}
        </footer>
    );
};

export default Footer;