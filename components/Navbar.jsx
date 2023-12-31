import React, {useState} from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {AiOutlineClose, AiOutlineMail, AiOutlineMenu} from 'react-icons/ai'
import { FaGithub, FaLinkedin, FaLinkedinIn } from 'react-icons/fa'
import {} from 'react-icons/bs'

const Navbar = () => {
    const [nav, setNav] = useState(false)

    const handleNav =()=> {
        setNav(!nav)
    }
  return (

    <div className='fixed w-full h-20 shadow-xl z-[1000] bg-white'>
        <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
            <div className='flex items-center space-x-4'>
            <Image src="/../assets/images/cglogo512.png" width={50} height={50} alt="/"/>
            <p className='text-[#00a3d9]'>Reece Jones</p>
            </div>
        
        <div>
            <ul className='hidden md:flex'>
                <Link href='/#home'>
                    <li className='ml-10 text-sm uppercase hover:border-b border-[#00a3d9]'>Home</li>
                </Link>
                <Link href='/#about'>
                    <li className='ml-10 text-sm uppercase hover:border-b border-[#00a3d9]'>About</li>
                </Link>
                <Link href='/#skills'>
                    <li className='ml-10 text-sm uppercase hover:border-b border-[#00a3d9]'>Skills</li>
                </Link>
                <Link href='/#projects'>
                    <li className='ml-10 text-sm uppercase hover:border-b border-[#00a3d9]'>Games Portfolio</li>
                </Link>
                <Link href='/#graphics'>
                    <li className='ml-10 text-sm uppercase hover:border-b border-[#00a3d9]'>Graphic Design</li>
                </Link>
            </ul>
            <div onClick={handleNav} className='md:hidden rounded-full shadow-lg shadow-[#00a3d9] p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                <AiOutlineMenu size={25}/>
            </div>
        </div>
        </div>

        <div className={nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/50' : ''}>
            <div className={nav ? ' fixed right-0 top-0 w-[384px] sm:w-[60%] md:w-[576px] h-screen bg-[#ecf0f3] p-10 ease-in duration-500' :
            'fixed right-[-110%] top-0 w-[384px] sm:w-[60%] md:w-[576px] h-screen bg-[#ecf0f3] p-10 ease-in duration-500' }>
                <div>
                    <div className='flex w-full items-center justify-between'>
                        <Image src="/../assets/images/cglogo512.png" width={50} height={50} alt="/"/>
                        <div onClick={handleNav}className='rounded-full shadow-lg shadow-[#00a3d9] p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                            <AiOutlineClose/>
                        </div>
                    </div>
                </div>
                <div className='py-4 flex flex-col '>
                    <ul className='uppercase'>
                    <Link href='/#home'>
                        <li className='py-4 text-sm border-b border-[#00a3d9]'>Home</li>
                        </Link>
                        <Link href='/#about'>
                        <li className='py-4 text-sm border-b border-[#00a3d9]'>About</li>
                        </Link>
                        <Link href='/#skills'>
                        <li className='py-4 text-sm border-b border-[#00a3d9]'>Skills</li>
                        </Link>
                        <Link href='/#projects'>
                        <li className='py-4 text-sm border-b border-[#00a3d9]'>Games Portfolio</li>
                        </Link>
                        <Link href='/#graphics'>
                        <li className='py-4 text-sm border-b border-[#00a3d9]'>Graphic Design</li>
                        </Link>
                    </ul>
                    <div className='pt-40'>
                        <p className='uppercase tracking-widest text-[#00a3d9]'>
                            Get in contact
                        </p>
                        <div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
                            <div className='rounded-full shadow-lg shadow-[#00a3d9] p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                            <Link href="https://www.linkedin.com/in/reeceajones/">
                            <FaLinkedinIn/>
                            </Link>
                            </div>
                            <div className='rounded-full shadow-lg shadow-[#00a3d9] p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                            <Link href="https://github.com/PsychOXRat">
                            <FaGithub/>
                            </Link>
                            </div>
                            <div className='rounded-full shadow-lg shadow-[#00a3d9] p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                            <Link href="mailto:jonesreecea@gmail.com">
                            <AiOutlineMail/>
                            </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
export default Navbar