import React from 'react'


const Home = () => {
    return (
        <>
            <div className='bg-[url("@/public/Img/bgHome.png")] grid grid-cols-2 '>
                <div className='md: my-20 text-8xl text-white mx-16  sm: text-xl mt-48 mx-2   lg:text-8xl' >
                    <h1>Unleash <br /> <span className='font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#DE4DBC] to-[#1D86C2]'> Creativity </span>with <br /> AI Animation</h1>
                </div>
                <div>
                    <img className='md:mt-10  sm: mt-56 ' src="/Img/AI-Image.png" alt="" />

                </div>
            </div>
            
            <div className='md:z-40 absolute lg:bottom-[-220] '>
                <img className='mt-[-18] ' src="/Img/Slideer.png" alt="" />
            </div>




        </>
    )
}

export default Home
