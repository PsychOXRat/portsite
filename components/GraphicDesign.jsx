import React from "react"
import Link from "next/link"
import Image from "next/image"

const GraphicDesign = () => {
  return (
    <div id="" className="w-full md:h-1/2 p-2 flex items-center py-16">
        <a class="anchorgr" id="graphics"/>
        <div className="max-w-[1240px] mx-auto px-2 py-4 ">
            <p className="text-xl tracking-widest uppercase text-[#00a3d9]">Graphic Design</p>
            <h2 className='py-4'>Liveries</h2>
            <p className=" text-lg tracking-wider">Recreations and Adaptations</p>
            
            <div className='w-full md:h-1/2 p-2 flex items-center py-4'>
        <div className="max-w-[1240px] mx-auto md:grid grid-cols-3 gap-8">
            <div className='col-span-2'>
                <p className="text-[#00a3d9] uppercase text-xl tracking-widest">Re-Volt AMW livery adaptation</p>
                <p>
                The livery on display in the lower right was an adaptation I made of a livery for the AMW car from the cult classic game Re-Volt, after being commisioned to fit it onto the Mercedes AMG GT3 car in the iRacing simualtor. This recreation and adaptation was made by finding the original game's livery image and AI upscaling it from 512x512 up to 1024x1024 in order to find a closer match for fonts and get a clearer view of the design itself. Once this was done I proceeded to create the base of the livery on the Mercedes' UV map, making some design decisions in order to let the livery work with the different shape of the Mercedes, most notably of which takes place on the bonnet of the car. I then created the individual sponsor logos that were visible on the original car and placed them in the same locations where possible. The client was pleased with the end result of this and would continue to commision me.
                    </p>
            </div>
            <div className="w-full h-auto m-auto shadow-xl bg-[#bbbbbb] shadow-[#00a3d9] rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
                <img className="rounded-xl" src="../assets/images/amw.png" alt=""/>
            </div>
        </div>
    </div>

    <div className='w-full md:h-1/2 p-2 flex items-center py-4'>
        <div className="max-w-[1240px] mx-auto md:grid grid-cols-3 gap-8">
            <div className='col-span-2'>
                <p className="text-[#00a3d9] uppercase text-xl tracking-widest">Re-Volt Cougar livery adaptation</p>
                <p>
                As with the livery above, I was also commisioned to recreate a livery from the Cougar car from Re-Volt onto the Ferrari 488 GT3 car in iRacing. The steps to make this livery were very similar to the AMW livery, however to ensure I was staying accurate I spent a longer time searching for the specific font used on the side of the car due to its prominence and size on the car, which ended up looking very similar to the original design of the car. I also decided to use the background of the car's number from the roof to replace the background of iRacing's car numbers on the side of the car. Again, the client was pleased with the end result.
                    </p>
            </div>
            <div className="w-full h-auto m-auto shadow-xl bg-[#bbbbbb] shadow-[#00a3d9] rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
                <img className="rounded-xl" src="../assets/images/XKL12.png" alt=""/>
            </div>
        </div>
    </div>

    <div className='w-full md:h-1/2 p-2 flex items-center py-4'>
        <div className="max-w-[1240px] mx-auto md:grid grid-cols-3 gap-8">
            <div className='col-span-2'>
                <p className="text-[#00a3d9] uppercase text-xl tracking-widest">Audi A4 Super Touring car '96/'97 livery adaptation</p>
                <p>
                For this livery, I was commisioned to both recreate and adapt the livery that was present on the Audi A4 Super Touring car during the 1996 and 1997 seasons of the British touring Car Championship onto the Audi R8 LMS GT3 in iRacing, as well as adding or changing elements to link the car to the client's fictional Perfection 75% Autosport team. To create this I gathered a bunch of reference images from images of the car whilst it was racing as well as from an auction site that was selling a refurbished version of the car. Because of this the livery I created contained elements of the 1996, 1997, and the refurbished car, with different sponsors and designs from each making onto the final design, the result of which left the client very happy.
                    </p>
            </div>
            <div className="w-full h-auto m-auto shadow-xl bg-[#bbbbbb] shadow-[#00a3d9] rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
                <img className="rounded-xl" src="../assets/images/audi.png" alt=""/>
            </div>
        </div>
    </div>

    <div className='w-full md:h-1/2 p-2 flex items-center py-4'>
        <div className="max-w-[1240px] mx-auto md:grid grid-cols-3 gap-8">
            <div className='col-span-2'>
                <p className="text-[#00a3d9] uppercase text-xl tracking-widest">Borderlands 2 Maliwan Manufacturer livery adaptation</p>
                <p>
                This livery was part of a personal project of mine to create livery designs for the Mercedes AMG GT3 in iRacing based off of the gun designs that the specific manufacturers in Borderlands 2 have. As a base I tried to recreate the border effect from the game, adding comic book style lines around the car's body lines to give it a drawn effect. I then took reference images of different guns from the game that Maliwan manufactures  and used that to create the base design on the car. From there I added smaller elements, such as hidden "Vault" symbols on the car, the company's tagline on the rear of the car, and a hexagonal pattern across the whole car to further match the manufacturer's brand.
                    </p>
            </div>
            <div className="w-full h-auto m-auto shadow-xl bg-[#bbbbbb] shadow-[#00a3d9] rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
                <img className="rounded-xl" src="../assets/images/borderlands.png" alt=""/>
            </div>
        </div>
    </div>

    <div className='w-full md:h-1/2 p-2 flex items-center py-4'>
        <div className="max-w-[1240px] mx-auto ">
            <div className='col-span-2'>
                <p className="text-[#00a3d9] uppercase text-xl tracking-widest">Burnout Paradise Nakamura Ikusa GT livery adaptation</p>
                <p className="pb-2">
                Another personal project of mine was turning the Nakamura Ikusa GT from one of my all-time favourite games Burnout Paradise into a livery inside of iRacing. The start of this process was extractng the texture of the car from Burnout Paradise Remastered, then assembling it into parts on the UV Map of the BMW M4 GT4 car. Once I had the layout correct, I then painstakingly recreated every element by hand, getting the exact fonts that were used originally or as close as I could get, even goign as far as creating a high resolution version of the licence plate, a detail that could easily have been overlooked. After the main design was done, I had to separate it out so that I could use it as a mask for the spec mapping. The stickers were given a gloss finish, the main paint a dark metallic blue to match the game, and the bonnet recieved a carbon makeover, with lighting details from the spec mapping. Once it was complete, there was only one thing left for me to do; recreate a Burnout Paradise crash cam to complete the look as seen below. 
                    </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 pb-4">
            <div className="w-full h-auto m-auto shadow-xl bg-[#bbbbbb] shadow-[#00a3d9] rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
                <img className="rounded-xl" src="../assets/images/Nakamura2.jpg" alt=""/>
            </div>
            <div className="w-full h-auto m-auto shadow-xl bg-[#bbbbbb] shadow-[#00a3d9] rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
                <img className="rounded-xl" src="../assets/images/Nakamura.jpg" alt=""/>
            </div>
            </div>
        </div>
    </div>

    <h2 className="py-4">Brand Design </h2>
    <p className="text-[#00a3d9] uppercase text-xl tracking-widest">Perfection 75% Autosport</p>
    <div className=" max-w-[1240px] grid md:grid-cols-3 gap-8 pb-4 pt-2">
            <div className="w-full h-auto m-auto shadow-xl bg-[#bbbbbb] shadow-[#00a3d9] rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
                <img className="rounded-xl" src="../assets/images/p75-1.png" alt=""/>
            </div>
            <div className="w-full h-auto m-auto shadow-xl bg-[#bbbbbb] shadow-[#00a3d9] rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
                <img className="rounded-xl" src="../assets/images/p75-2.png" alt=""/>
            </div>
            <div className="w-full h-auto m-auto shadow-xl bg-[#bbbbbb] shadow-[#00a3d9] rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
                <img className="rounded-xl" src="../assets/images/lambo.png" alt=""/>
            </div>
            </div>
            <p className="pt-4">
            After being commisioned to recreate the Re-Volt liveries, I was re-commisioned to create the brand for the client's team Perfection 75% Autosport, which I had also become a part of. The only limitation I was given was the colour scheme, which had to be the same orange and urple as in the AMW livery, anything beyond this I had free rein on. Because of this I wanted to try a design that I hadn't seen before, a regular livery broken up into triangles along its entirety, with the colour changing depending from corner to corner, with the front left and right being purple and orange repsectively, switching to the opposite on the rear of the car. I was also given the ability to create fake sponsors for the team, based on references within the team that look realistic enough that they'd pass for sponsors you might see in the real world, which was a fun task to be given. I also created a variation of the main livery for a 3 hour charity race in aid of the Trussell Trust called "The Race to Get This Bread" which was livestreamed to over 100 thousand people across the main channels it was broadcast on. This variation included switching out some sponsors for the Trussell Trust logo, changing the number background on the side of the car, adding a banner to the car's windscreen and including a small logo referencing the event. After using the Audi for a while, we decided to try a new car, the Lamborghini Huracan. This car let me take what I had leanred fro mthe first livery and re-imagine it as a sleeker, less complex version to fit with the angular nature of the Huracan's shape, resulting in a less busy, and objectively better looking, iteration of it that still kept the staple sponsors from the old car.
I was also given the job of creating a design for some racing gloves for the team members to wear which are shown below. The main theme of the livery is present in the design, as is the colours and a small version of the team logo. The text on the gloves is in the same font as the logo except for Crosse's who wanted a different font on his. 
Overall this was a fun project to work on and allowed me to try out new ideas I wouldn't have otherwise thought of.
                    </p>
                    <div className="pt-4">
            <div className="max-w-[1240px] w-auto h-auto m-auto shadow-xl bg-[#bbbbbb] shadow-[#00a3d9] rounded-xl flex items-center justify-center p-4 hover:scale-[1.03] ease-in duration-300">
                <img className="rounded-xl" src="../assets/images/p75gloves.png" width={1200}alt=""/>
            </div>
            </div>
</div>
</div>
  )
}
export default GraphicDesign