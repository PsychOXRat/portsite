import React from 'react'
import {AiOutlineClose, AiOutlineMail, AiOutlineMenu} from 'react-icons/ai'
import { FaGithub, FaLinkedin, FaLinkedinIn } from 'react-icons/fa'
import {} from 'react-icons/bs'

const Main = () => {
  return (
    <div id="home"className='w-full h-screen text-center'>
        <div className='max-w-[1240px] w-full h-screen mx-auto p-2 flex justify-center items-center'>
            <div>
                <h1 className='py-4'>
                    Hi, I'm <span className='text-[#00a3d9]'>Reece</span>
                    </h1>
                    <h1 className=''>
                    A Games Computing Graduate
                    </h1>
                    <p className='py-4 max-w-[70%] m-auto'>
                        I'm a games computing graduate looking for a software development company to begin my professional coding career with and expand upon my skillset. I specialise in game development, although I want to push out of my comfort zone and into the varied world of software development.
                    </p>
                    <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
                        <div className='rounded-full shadow-lg shadow-[#00a3d9] p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <FaLinkedinIn/>
                        </div>
                        <div className='rounded-full shadow-lg shadow-[#00a3d9] p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <FaGithub/>
                        </div>
                        <div className='rounded-full shadow-lg shadow-[#00a3d9] p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <AiOutlineMail/>
                        </div>
                    </div>
            </div>
        </div>
    </div>
  )
}
export default Main