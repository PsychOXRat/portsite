import React from "react"
import Image from "next/image";
import crumpleImg from "../public/assets/images/delgame.png"
import {BsArrowLeft} from 'react-icons/bs'
import YoutubeEmbed from "@/components/YoutubeEmbed";
import Link from "next/link";

const deliverygame = () => {
  return (
    <div className="w-full">
        <div className="w-screen h-[30vh] lg:h-[40vh] relative">
            <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10"/>
            <Image className="absolute z-1" layout='fill' objectFit="cover" src={crumpleImg} alt='/' />
            <div className="absolute top-[85%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
              <h2 className="py-2">Delivery Game</h2>
              <h3>Unity/C#</h3>
            </div>
        </div>
        
      <div className="max-w-[1240px] mx-auto p-2 grid grid-cols-1 md:grid-cols-5 gap-8 pt-8">
        <div className="md:col-span-3">
          <p className="text-xl tracking-widest uppercase text-[#00a3d9]">Project</p>
          <h2 className="py-4">Overview</h2>
          <p>Delivery Game is, as the name suggests, a game about delivering packages!</p>
<p>With a strict time limit, you must come up with a strategy that allows you to be as efficient as possible. </p>
<p>This game was developed as part of Team Software Engineering in my second year of university in a group of 5, however due to external reasons this number fell to 2 for the majority of its development after the concept stage. I was the lead designer and programmer for this project, and developed my leadership and time management skills during it. The parts I developed were the vehicle physics and core gameplay features (delivering the items to locations, keeping count of deliveries, and checking the time limit).</p>
          <Link href="https://drive.google.com/file/d/1xe7BZId5OwCzZYHZ6nj9zNLQVlx7xYvG/view?usp=sharing">
          <button className="px-8 py-2 mt-4 mr-8 hover:scale-105 ease-in duration-300">Demo</button>
          </Link>
        </div>

        <div className=" flex md:col-span-2 shadow-xl shadow-[#00a3d9] rounded-xl p-4 bg-[#bbbbbb] aspect-video w-full">
          <YoutubeEmbed embedId="5w7lcXjF6SM" title={"Delivery Game"}/>
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
export default deliverygame;