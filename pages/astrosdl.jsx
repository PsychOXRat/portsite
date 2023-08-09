import React from "react"
import Image from "next/image";
import crumpleImg from "../public/assets/images/AstroSDL.png"
import {BsArrowLeft} from 'react-icons/bs'
import YoutubeEmbed from "@/components/YoutubeEmbed";
import Link from "next/link";

const astrosdl = () => {
  return (
    <div className="w-full">
        <div className="w-screen h-[30vh] lg:h-[40vh] relative">
            <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10"/>
            <Image className="absolute z-1" layout='fill' objectFit="cover" src={crumpleImg} alt='/' />
            <div className="absolute top-[85%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
              <h2 className="py-2">Astro Destroyer SDL Version</h2>
              <h3>C++/SDL2</h3>
            </div>
        </div>
        
      <div className="max-w-[1240px] mx-auto p-2 grid grid-cols-1 md:grid-cols-5 gap-8 pt-8">
        <div className="md:col-span-3">
          <p className="text-xl tracking-widest uppercase text-[#00a3d9]">Project</p>
          <h2 className="py-4">Overview</h2>
          <p>Astro Destroyer - SDL Version is a different version of one of my previous projects, Astro Destroyer, however as I was making the engine from scratch, I had to change some of the features such as enemies and gravity being removed, and adding powerups to meet the module's requirements. The instant death was also removed in place of a countdown timer for the same reason, however getting hit by an asteroid produces no points.</p>
          <p>This game was developed as part of the Game Programming module in my second year, it is programmed entirely in C++ and uses SDL for the graphics. This project helped me understand lower level engine development as well as how to implement collision detection and memory management.</p>
          <Link href="https://drive.google.com/file/d/1GXfA0JRViLnOSHPUTCJYDGzLIRlLvVLt/view?usp=sharing">
          <button className="px-8 py-2 mt-4 mr-8 hover:scale-105 ease-in duration-300">Demo</button>
          </Link>
          <Link href="https://github.com/PsychOXRat/Astro-Destroyer">
          <button className="px-8 py-2 mt-4 mr-8 hover:scale-105 ease-in duration-300">Code</button>
          </Link>
        </div>

        <div className=" flex md:col-span-2 shadow-xl shadow-[#00a3d9] rounded-xl p-4 bg-[#bbbbbb] aspect-video w-full">
          <YoutubeEmbed embedId="5tgSxQeDpB4" title={"Astro Destroyer SDL"}/>
        </div>

      </div>
      <div className="max-w-[1240px] mx-auto p-4 grid md:grid-cols-2 gap-8 pt-8">
        <div className="col-span-1 shadow-xl shadow-[#00a3d9] rounded-xl bg-[#bbbbbb] p-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid md:grid-cols-2 gap-8 ">
              <div className="shadow-xl shadow-[#00a3d9] rounded-xl bg-gradient-to-r from-[#1d6581] to-[#00a3d9] p-4 text-center">
              <p className="text-white py-2 text-center font-bold">C++</p>
              </div>
              <div className="shadow-xl shadow-[#00a3d9] rounded-xl bg-gradient-to-r from-[#1d6581] to-[#00a3d9] p-4">
              <p className="text-white py-2 text-center font-bold">SDL2</p>
              </div>
            </div>
          </div>
        </div>

      </div>
      
      <div className="flex justify-center max-w-[1240px] pt-6 pb-4 mx-auto">
      <Link href='/#projects' alt='Back'>
      <div className='rounded-full shadow-lg shadow-[#00a3d9] p-3 cursor-pointer hover:scale-105 ease-in duration-300 items-center'>
                            <BsArrowLeft size={30}/>
                        </div>
      </Link>
      </div>

        </div>
  );
};
export default astrosdl;