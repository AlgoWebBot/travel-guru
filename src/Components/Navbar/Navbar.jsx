import React from 'react'
import logo from '../../../public/travel-guru-resources/logo.png'
import { BsSearch } from 'react-icons/bs';
import { Link } from 'react-router-dom';

export const Navbar = () => {
    return (
        <div className='container mx-auto text-lg font-medium '>
            <div className='flex justify-between items-center py-8'>
                <img src={logo} alt="" className='w-40 h-14 bg-white' />
                <div className='relative'>
                    <BsSearch className='absolute bottom-2 left-3 text-white' />
                    <input type="text" placeholder="Type here" className="input placeholder:text-white text-white border-white bg-transparent pl-10 input-bordered input-sm w-[350px] max-w-xs" />
                </div>
                <div className='flex justify-between items-center gap-20 text-white'>
                    <Link>Home</Link>
                    <Link>Destination</Link>
                    <Link>Blog</Link>
                    <Link>Contact</Link>
                </div>
                <button className='bg-yellow-500 btn px-10 capitalize font-normal text-lg text-black'>Login</button>
            </div>
        </div>
    )
}