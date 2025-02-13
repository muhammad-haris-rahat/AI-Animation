import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component
import { faFacebookF, faInstagram, faLinkedinIn } from "@fortawesome/free-brands-svg-icons"; // Import the icons you need
const Get = () => {
  return (
    <div className=' pt-12 md:pt-32  bg-gradient-to-r from-[#DE4DBC] to-[#1D86C2] pb-5'>


      <div className='text-white text-2xl md:text-6xl md:pt-5  flex justify-center' >
        <h1>Get in Touch with Us</h1>
      </div>

      <div className='text-white text-lg md:text-xl pt-5  flex justify-center whitespace-normal md:whitespace-pre-line' >
        <p className='pl-5 pb-5'>Have a question or need support? We’re here to help! Use the form  below for general inquiries, feedback, or assistance</p>
      </div>



      <div className="relative flex items-center md:mt-3 md:flex justify-center">
        <input className="appearance-none bg-transparent border border-gray-300 rounded-full w-full md:w-1/2 py-2 px-4 leading-tight focus:outline-none focus:border-blue-500" type="email" placeholder="Enter your Email" aria-label="Full name" />
        <button className="absolute right-0 top-0 mt-1 mr-1 md:mr-[340px]  bg-gradient-to-r from-[#DE4DBC] to-[#1D86C2]  text-white font-bold py-1 px-3 rounded-full" type="button">
          Contact Us
        </button>
      </div>

      <div className='border-t border-t-[#c796e6] mt-8 w-full md:mt-16 md:w-5/6 md:ml-32'></div>


      <div className='mt-2 flex space-x-8 md:flex items-center justify-center md:space-x-96  md:mt-5'>

        <div className='text-white ml-5 md:ml-0 flex space-x-3 md:space-x-6 md:mt-2'>

          <FontAwesomeIcon style={{fontSize:"20px", color:"white"}} icon={faFacebookF}></FontAwesomeIcon>
          <FontAwesomeIcon style={{fontSize:"20px", color:"white"}} icon={faInstagram}></FontAwesomeIcon>
          <FontAwesomeIcon style={{fontSize:"20px", color:"white"}} icon={faLinkedinIn}></FontAwesomeIcon>
          

        </div>

        <div className='text-white flex  md:space-x-3'>

          <img className='h-8  ml-7 md:ml-0 ' src="/Img/sparkling.png" alt="" />
          <h1 className='text-lg md:text-xl'>AI Animation</h1>
          

          </div>

        

        <div className='text-white '>

          {/* <h1>AI Animation</h1> */}

          <div className="container mx-auto flex justify-between items-center">

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
            {/* <div className="md:hidden">
              <button className="text-gray-300 hover:text-white focus:outline-none focus:text-white">
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              </button>
            </div> */}
          </div>

        </div>

      </div>

      {/* <img className='p-10  ' src="/Img/Get.png" alt="" /> */}

    </div>
  )
}

export default Get
