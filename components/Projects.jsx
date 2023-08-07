import React from "react"
import Image from "next/image"
import Link from "next/link"
import ProjectItem from "./ProjectItem"
import crumpleImg from "../public/assets/images/CrumpleZone.jpg"
import astroImg from "../public/assets/images/AstroDestroyer.jpg"
import meltImg from "../public/assets/images/MeltRacer.jpg"
import delGameImg from "../public/assets/images/delgame.png"
import astroSDLImg from "../public/assets/images/AstroSDL.png"
import pcgImg from "../public/assets/images/PCG.png"
import projectImg from "../public/assets/images/Project.png"
import physxImg from "../public/assets/images/physXUni.jpg"
import graphicsImg from "../public/assets/images/Graphics.jpg"
const Projects = () => {
  return (
    <div id="" className="w-full">
        <a class="anchorg" id="projects"/>
        <div className="max-w-[1240px] mx-auto px-2 py-16">
            <p className="text-xl tracking-widest uppercase text-[#00a3d9]">Games portfolio</p>
            <h2 className='py-4'>Personal Projects</h2>
            <div className="grid md:grid-cols-2 gap-8">

            <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-[#00a3d9] bg-[#bbbbbb] rounded-xl p-4 group hover:bg-gradient-to-r from-[#1d6581] to-[#00a3d9]">
    <Image className="rounded-xl group-hover:opacity-20" src={crumpleImg} height={720} width={1280} alt="/"/>
    <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <h3 className="text-2xl text-white trackign-wider text-center">Crumple Zone</h3>
        <p className="pb-4 pt-2 text-white text-center">Unity/C#</p>
        <Link href="/crumplezone">
            <p className="text-center py-3 rounded-lg bg-white text-[#00a3d9] font-bold text-lg">More info</p>
        </Link>
    </div>
</div>
<div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-[#00a3d9] bg-[#bbbbbb] rounded-xl p-4 group hover:bg-gradient-to-r from-[#1d6581] to-[#00a3d9]">
    <Image className="rounded-xl group-hover:opacity-20" src={astroImg} height={720} width={1280} alt="/"/>
    <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <h3 className="text-2xl text-white trackign-wider text-center">Astro Destroyer</h3>
        <p className="pb-4 pt-2 text-white text-center">Unity/C#</p>
        <Link href="/astrodestroyer">
            <p className="text-center py-3 rounded-lg bg-white text-[#00a3d9] font-bold text-lg">More info</p>
        </Link>
    </div>
</div>
<div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-[#00a3d9] bg-[#bbbbbb] rounded-xl p-4 group hover:bg-gradient-to-r from-[#1d6581] to-[#00a3d9]">
    <Image className="rounded-xl group-hover:opacity-20" src={meltImg} height={720} width={1280} alt="/"/>
    <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <h3 className="text-2xl text-white trackign-wider text-center">Melt Racer</h3>
        <p className="pb-4 pt-2 text-white text-center">Unity/C#</p>
        <Link href="/meltracer">
            <p className="text-center py-3 rounded-lg bg-white text-[#00a3d9] font-bold text-lg">More info</p>
        </Link>
    </div>
</div>

            </div>
            <h2 className='py-6'>University Projects</h2>
            <div className="grid md:grid-cols-2 gap-8">
                
            <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-[#00a3d9] bg-[#bbbbbb] rounded-xl p-4 group hover:bg-gradient-to-r from-[#1d6581] to-[#00a3d9]">
    <Image className="rounded-xl group-hover:opacity-20" src={delGameImg} height={720} width={1280} alt="/"/>
    <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <h3 className="text-2xl text-white trackign-wider text-center">Delivery Game</h3>
        <p className="pb-4 pt-2 text-white text-center">Unity/C#</p>
        <Link href="/deliverygame">
            <p className="text-center py-3 rounded-lg bg-white text-[#00a3d9] font-bold text-lg">More info</p>
        </Link>
    </div>
</div>

<div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-[#00a3d9] bg-[#bbbbbb] rounded-xl p-4 group hover:bg-gradient-to-r from-[#1d6581] to-[#00a3d9]">
    <Image className="rounded-xl group-hover:opacity-20" src={astroSDLImg} height={720} width={1280} alt="/"/>
    <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <h3 className="text-2xl text-white trackign-wider text-center">Astro Destroyer SDL</h3>
        <p className="pb-4 pt-2 text-white text-center">C++/SDL2</p>
        <Link href="/astrosdl">
            <p className="text-center py-3 rounded-lg bg-white text-[#00a3d9] font-bold text-lg">More info</p>
        </Link>
    </div>
</div>

<div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-[#00a3d9] bg-[#bbbbbb] rounded-xl p-4 group hover:bg-gradient-to-r from-[#1d6581] to-[#00a3d9]">
    <Image className="rounded-xl group-hover:opacity-20" src={pcgImg} height={720} width={1280} alt="/"/>
    <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <h3 className="text-2xl text-white trackign-wider text-center">Procedural Content Generation</h3>
        <p className="pb-4 pt-2 text-white text-center">Unity/C#</p>
        <Link href="/pcg">
            <p className="text-center py-3 rounded-lg bg-white text-[#00a3d9] font-bold text-lg">More info</p>
        </Link>
    </div>
</div>

<div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-[#00a3d9] bg-[#bbbbbb] rounded-xl p-4 group hover:bg-gradient-to-r from-[#1d6581] to-[#00a3d9]">
    <Image className="rounded-xl group-hover:opacity-20" src={projectImg} height={720} width={1280} alt="/"/>
    <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <h3 className="text-2xl text-white trackign-wider text-center">Dissertation Project</h3>
        <p className="pb-4 pt-2 text-white text-center">Unreal Engine 4</p>
        <Link href="/dissertation">
            <p className="text-center py-3 rounded-lg bg-white text-[#00a3d9] font-bold text-lg">More info</p>
        </Link>
    </div>
</div>

<div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-[#00a3d9] bg-[#bbbbbb] rounded-xl p-4 group hover:bg-gradient-to-r from-[#1d6581] to-[#00a3d9]">
    <Image className="rounded-xl group-hover:opacity-20" src={physxImg} height={720} width={1280} alt="/"/>
    <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <h3 className="text-2xl text-white trackign-wider text-center">PhysX Dominoes</h3>
        <p className="pb-4 pt-2 text-white text-center">C++/PhysX</p>
        <Link href="/physx">
            <p className="text-center py-3 rounded-lg bg-white text-[#00a3d9] font-bold text-lg">More info</p>
        </Link>
    </div>
</div>

<div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-[#00a3d9] bg-[#bbbbbb] rounded-xl p-4 group hover:bg-gradient-to-r from-[#1d6581] to-[#00a3d9]">
    <Image className="rounded-xl group-hover:opacity-20" src={graphicsImg} height={720} width={1280} alt="/"/>
    <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <h3 className="text-2xl text-white trackign-wider text-center">Graphics</h3>
        <p className="pb-4 pt-2 text-white text-center">Unreal Engine 4/OpenGL</p>
        <Link href="/graphics">
            <p className="text-center py-3 rounded-lg bg-white text-[#00a3d9] font-bold text-lg">More info</p>
        </Link>
    </div>
</div>

            </div>
        </div>
    </div>
  )
}
export default Projects