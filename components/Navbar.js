import React from 'react';
import Link from 'next/link';

const Navbar = () => {
    return (


        <nav className="bg-transparent sticky top-0 z-50 p-4 mt-[-62]">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-white text-xl  font-bold">
                    <Link className='text-white' href="/">
                        AI ANIMATION
                    </Link>
                </div>
                <div className="hidden md:flex space-x-4 ">
                    <Link className='text-white' href="/">
                        Home
                    </Link>
                    <Link className='text-white' href="/about">
                        About Us
                    </Link>
                    <Link className='text-white' href="/services">
                        Pricing
                    </Link>
                    <Link className='text-white' href="/contact">
                        Features
                    </Link>
                </div>
                <div className="md:hidden">
                    <button className="text-gray-300 hover:text-white focus:outline-none focus:text-white">
                        <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                        </svg>
                    </button>
                </div>
            </div>
        </nav>






    )
}

export default Navbar
