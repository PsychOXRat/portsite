import React from "react"
import Image from "next/image";
import crumpleImg from "../public/assets/images/Project.png"
import {BsArrowLeft} from 'react-icons/bs'
import YoutubeEmbed from "@/components/YoutubeEmbed";
import Link from "next/link";

const dissertation = () => {
  return (
    <div className="w-full">
        <div className="w-screen h-[30vh] lg:h-[40vh] relative">
            <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10"/>
            <Image className="absolute z-1" layout='fill' objectFit="cover" src={crumpleImg} alt='/' />
            <div className="absolute top-[85%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
              <h2 className="py-2">Dissertation Project Artefact</h2>
              <h3>Unreal Engine 4</h3>
            </div>
        </div>
        
      <div className="max-w-[1240px] mx-auto p-2 grid grid-cols-1 md:grid-cols-5 gap-8 pt-8">
        <div className="md:col-span-3">
          <p className="text-xl tracking-widest uppercase text-[#00a3d9]">Project</p>
          <h2 className="py-4">Overview</h2>
          <p>Created for my dissertation, this project consisted of 4 test games to gather data on whether people can perceive a difference between realistic and arcade physics, by stating which felt more realistic, which they found more fun to play with, and to what degree each of those responses were.  The vehicle physics were built from scratch, and utilises tyre slip, suspension travel, spring, and damping, wheel weights, differential values, engine torque curves and RPM, gear ratios, and traction control, among other things.</p>
          <p>This was enough for me to be able to tweak the settings for the suspension, grip, and steering characteristics separately to have a realistic and arcade value for each of them, and put them on the car one by one to compare specific parts, as 3 of the 4 tests focused on a single part each, being grip, suspension, and steering, whilst the 4th test combined all of the arcade settings on one car, and all of the realistic settings on the other. </p>
        </div>

        <div className=" flex md:col-span-2 shadow-xl shadow-[#00a3d9] rounded-xl p-4 bg-[#bbbbbb] aspect-video w-full">
          <YoutubeEmbed embedId="mGk9loIVcQI" title={"Project Video"}/>
        </div>

      </div>
      <div className="max-w-[1240px] mx-auto p-4 grid md:grid-cols-2 gap-8 pt-8">
        <div className="col-span-1 shadow-xl shadow-[#00a3d9] rounded-xl bg-[#bbbbbb] p-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid md:grid-cols-1 gap-8 ">
              <div className="shadow-xl shadow-[#00a3d9] rounded-xl bg-gradient-to-r from-[#1d6581] to-[#00a3d9] p-4 text-center">
              <p className="text-white py-2 text-center font-bold">Unreal Engine 4</p>
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
export default dissertation;