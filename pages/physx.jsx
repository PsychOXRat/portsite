import React from "react"
import Image from "next/image";
import crumpleImg from "../public/assets/images/physXUni.jpg"
import {BsArrowLeft} from 'react-icons/bs'
import YoutubeEmbed from "@/components/YoutubeEmbed";
import Link from "next/link";

const physx = () => {
  return (
    <div className="w-full">
        <div className="w-screen h-[30vh] lg:h-[40vh] relative">
            <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10"/>
            <Image className="absolute z-1" layout='fill' objectFit="cover" src={crumpleImg} alt='/' />
            <div className="absolute top-[85%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
              <h2 className="py-2">PhysX Dominoes</h2>
              <h3>Unity/C#</h3>
            </div>
        </div>
        
      <div className="max-w-[1240px] mx-auto p-2 grid grid-cols-1 md:grid-cols-5 gap-8 pt-8">
        <div className="md:col-span-3">
          <p className="text-xl tracking-widest uppercase text-[#00a3d9]">Project</p>
          <h2 className="py-4">Overview</h2>
          <p>This piece of software was developed using C++ and PhysX to meet the requirements of the module, which had to be a domino run utilising different PhysX features such as cloth, physics materials, triggers and joints. My code was built in a way that allowed for the domino run to be easily edited within code, being able to list the type of positioning you want, whether that's a straight line, a curve, stairs, a drop or a gap by stating the number of dominoes to spawn, the sizing of them, the spacing of them, the turn angle (positive or negative to turn left or right), and height difference (again, positive or negative to go up or down) to quickly create a scene without having to manually position each domino and allow for quick changes to the layout. The code also checks whether the domino is floating before it is placed and puts a platform underneath it to stop them from falling down.</p>
        </div>

        <div className=" flex md:col-span-2 shadow-xl shadow-[#00a3d9] rounded-xl p-4 bg-[#bbbbbb] aspect-video w-full">
          <YoutubeEmbed embedId="Yjksv__AJhw" title={"PhysX Video"}/>
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
              <p className="text-white py-2 text-center font-bold">PhysX</p>
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
export default physx;