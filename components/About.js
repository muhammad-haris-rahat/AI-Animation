import React from 'react'



const About = () => {
    return (
        <>
            <div className=' bg-[#0F0A1E] grid grid-cols-2 '>
                <div className='col-span-4  md:col-span-1 scale-none rotate-none transform-3d'>
                    {/* <img className='' src="/Img/Group3.png" alt="" /> */}

                    <div className="animate-float">
                        <img
                            src="/Img/Group3.png"
                            alt="Animated Image"
                            width={700}
                            height={700}
                        />
                    </div>

                </div>

                <div className=' col-span-2 md:col-span-1 pl-3  md:mt-48  '>
                    <button className='text-white mt-0 ml-16 md:ml-0 md:mt-16 px-7 py-3 border-[#444267] border-2 rounded-full md:px-7 md:py-3 bg-[#1F1B48]  '>About us</button>
                    <h1 className='text-2xl mt-1 md:mt-10 md:text-6xl text-white '>Revolutionizing <span className='font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#DE4DBC] to-[#1D86C2]'>Animation</span> with AI</h1>
                    <p className=' md:py-5 md:pr-10 text-white'>We are dedicated to transforming the creative process by using cutting-edge AI to simplify animation.Our expertise empowers creaters to achieve stunning results effortlessly.With a team of experts in AI,design,and animation,we push the <br /> boundaries of creativity.Our AI tools tackle common challenges,providing <br /> a smarter and faster way to bring your ideas to life.   </p>
                    <button className='text-white mb-4 mt-4 border-[#444267] border-2 rounded-full px-7 py-3  bg-gradient-to-r from-[#DE4DBC] to-[#1D86C2]'>Contact us</button>

                </div>


                {/* <div className='flex justify-center items-center h-screen bg-gray-100'>
            <div className='bg-white p-6 rounded-lg shadow-lg text-center'>
                <button className='text-white mt-16 px-7 py-3 border-[#444267] border-2 rounded-full md:px-7 md:py-3 bg-[#1F1B48]'>
                    About us
                </button>
                <h1 className='text-2xl mt-1 md:mt-10 md:text-6xl text-white'>
                    Revolutionizing <span className='font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#DE4DBC] to-[#1D86C2]'>Animation</span> with AI
                </h1>
                <div className='flex justify-center'>
                    <p className='md:py-5 md:pr-10 text-white'>
                        We are dedicated to transforming the creative process by using cutting-edge AI to simplify animation. Our expertise empowers creators to achieve stunning results effortlessly. With a team of experts in AI, design, and animation, we push the 
                        boundaries of creativity. Our AI tools tackle common challenges, providing 
                        a smarter and faster way to bring your ideas to life.
                    </p>
                </div>
                <button className='text-white mt-4 border-[#444267] border-2 rounded-full px-7 py-3 bg-gradient-to-r from-[#DE4DBC] to-[#1D86C2]'>
                    Contact us
                </button>
            </div>
        </div> */}


                {/* <img className='py-7 pr-2' src="/Img/Frame43325.png" alt="" /> */}

            </div>


        </>
    )
}

export default About
