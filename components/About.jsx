import React from "react"
import Link from "next/link"
const About = () => {
  return (
    <div  id="" className='w-full md:h-1/2 p-2 flex items-center py-16'>
        <a class="anchor" id="about"/>
        <div className="max-w-[1240px] mx-auto md:grid grid-cols-3 gap-8">
            <div className='col-span-2'>
                <p className="text-[#00a3d9] uppercase text-xl tracking-widest">About</p>
                <h2 className='py-4'>Who I Am</h2>
                <p>
                    For most of my childhood I was fascinated by computers and games, which lead me to stumble upon the 3D RAD game engine where I created basic vehicle based games for school projects, one of which I made in Year 9 that was then used by one of my teachers to showcase different classes of hurricanes in an interactive way.
                    </p>
                <p className="py-2">
                    After this, I started to increase my knowledge in the game development sector by beginning to teach myself Unity to create an interactive WW1 trench diorama. Later that year, I saw a poster for the Norwich Gaming Festival in one of the computer labs, which only strengthened my interest in game development after attending as a visitor, especially after learning it was free to exhibit there. 
                </p>
                <p className="py-2">
                    In late 2015, I worked with a friend to create 2 prototypes to showcase at the event in 2016, with myself being the lead designer and programmer. These prototypes were for a 90's inspired 3D platformer, and an infinite runner style racing game. In 2017 we worked on Crumple Zone, a physics based vehicle design puzzle game, and in 2018 we showcased Astro Destroyer, a reimagining of Asteroids.
                </p>
                <p className="py-2">
                    With this being done at the same time I was doing my GCSEs and A-Levels, I decided to continue my path and applied to study Games Computing at the University of Lincoln. I learnt many skills during my time there, solidifying my passion for games and their development in the process, as well as taking part in game jams and becoming the vice president of the Computer Science Society in my final year.
                </p>
                <p>Check out some of my <Link className="underline text-[#00a3d9]" href="/#projects">projects here</Link>, and my <Link className="underline text-[#00a3d9]" href="/#graphics">graphic design here</Link>.</p>
            </div>
            <div className="w-full h-auto m-auto shadow-xl bg-[#bbbbbb] shadow-[#00a3d9] rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
                <img className="rounded-xl" src="../assets/images/CodingScreen.png" alt=""/>
            </div>
        </div>
    </div>
  )
}
export default About