import React from "react"
import Image from "next/image";
import crumpleImg from "../public/assets/images/CrumpleZone.jpg"
import {BsArrowLeft} from 'react-icons/bs'
import YoutubeEmbed from "@/components/YoutubeEmbed";
import Link from "next/link";

const crumplezone = () => {
  return (
    <div className="w-full">
        <div className="w-screen h-[30vh] lg:h-[40vh] relative">
            <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10"/>
            <Image className="absolute z-1" layout='fill' objectFit="cover" src={crumpleImg} alt='/' />
            <div className="absolute top-[85%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
              <h2 className="py-2">Crumple Zone</h2>
              <h3>Unity/C#</h3>
            </div>
        </div>
        
      <div className="max-w-[1240px] mx-auto p-2 grid grid-cols-1 md:grid-cols-5 gap-8 pt-8">
        <div className="md:col-span-3">
          <p className="text-xl tracking-widest uppercase text-[#00a3d9]">Project</p>
          <h2 className="py-4">Overview</h2>
          <p>Crumple Zone is a game prototype I created in 2017 to showcase at that year's Norwich Gaming Festival. The premise of the game is to build a contraption that gets the dummy to the finish line as fast as possible. The game takes heavy inspiration from the games Besiege and Crashtastic in both art style and gameplay, becoming a blend of both games. The game was a success at the festival, proving popular throughout every day we were there and always bringing people back for more.</p>
          <Link href="https://drive.google.com/file/d/1NmuYyky3T0guGBNhK2KLlgE9_cFW650u/view?usp=sharing">
          <button className="px-8 py-2 mt-4 mr-8 hover:scale-105 ease-in duration-300">Demo</button>
          </Link>
        </div>

        <div className=" flex md:col-span-2 shadow-xl shadow-[#00a3d9] rounded-xl p-4 bg-[#bbbbbb] aspect-video w-full">
          <YoutubeEmbed embedId="MWxJaNf7M-o" title={"Crumple Zone - Teaser Trailer"}/>
        </div>

      </div>
      <div className="max-w-[1240px] mx-auto p-4 grid md:grid-cols-2 gap-8 pt-8">
        <div className="col-span-1 shadow-xl shadow-[#00a3d9] rounded-xl bg-[#bbbbbb] p-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid md:grid-cols-2 gap-8 ">
              <div className="shadow-xl shadow-[#00a3d9] rounded-xl bg-gradient-to-r from-[#1d6581] to-[#00a3d9] p-4 text-center">
              <p className="text-white py-2 text-center font-bold">Unity</p>
              </div>
              <div className="shadow-xl shadow-[#00a3d9] rounded-xl bg-gradient-to-r from-[#1d6581] to-[#00a3d9] p-4">
              <p className="text-white py-2 text-center font-bold">C#</p>
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
export default crumplezone;