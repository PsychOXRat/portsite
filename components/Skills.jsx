import React from "react"
import Image from 'next/image'

const Skills = () => {
  return (
    <div id="" className="w-full lg:h-1/2 p-2">
        <a class="anchors" id="skills"/>
        <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
            <p className="text-xl tracking-widest uppercase text-[#00a3d9]">Skills</p>
            <h2 className="py-4">What I Can Do</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="p-6 bg-[#bbbbbb] shadow-xl shadow-[#00a3d9] rounded-xl hover:scale-105 ease-in duration-300">
                    <div className="grid grid-cols-2 gap-4 justify-center items-center">
                        <div className="m-auto">
                        <   Image src="/../assets/images/python.png" height={64} width={64} alt="/"/>
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <h3 className="text-xl">Python</h3>
                        </div>
                    </div>    
                </div>
                <div className="p-6 bg-[#bbbbbb] shadow-xl shadow-[#00a3d9] rounded-xl hover:scale-105 ease-in duration-300">
                    <div className="grid grid-cols-2 gap-4 justify-center items-center">
                        <div className="m-auto">
                        <   Image src="/../assets/images/CSharp.png" height={64} width={64} alt="/"/>
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <h3 className="text-xl">C Sharp</h3>
                        </div>
                    </div>    
                </div>
                <div className="p-6 bg-[#bbbbbb] shadow-xl shadow-[#00a3d9] rounded-xl hover:scale-105 ease-in duration-300">
                    <div className="grid grid-cols-2 gap-4 justify-center items-center">
                        <div className="m-auto">
                        <   Image src="/../assets/images/C++.png" height={64} width={64} alt="/"/>
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <h3 className="text-xl">C++</h3>
                        </div>
                    </div>    
                </div>
                <div className="p-6 bg-[#bbbbbb] shadow-xl shadow-[#00a3d9] rounded-xl hover:scale-105 ease-in duration-300">
                    <div className="grid grid-cols-2 gap-4 justify-center items-center">
                        <div className="m-auto">
                        <   Image src="/../assets/images/physx.png" height={64} width={181} alt="/"/>
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <h3 className="text-xl">PhysX</h3>
                        </div>
                    </div>    
                </div>
                <div className="p-6 bg-[#bbbbbb] shadow-xl shadow-[#00a3d9] rounded-xl hover:scale-105 ease-in duration-300">
                    <div className="grid grid-cols-2 gap-4 justify-center items-center">
                        <div className="m-auto">
                        <   Image src="/../assets/images/unity.png" height={64} width={64} alt="/"/>
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <h3 className="text-xl">Unity</h3>
                        </div>
                    </div>    
                </div>
                <div className="p-6 bg-[#bbbbbb] shadow-xl shadow-[#00a3d9] rounded-xl hover:scale-105 ease-in duration-300">
                    <div className="grid grid-cols-2 gap-4 justify-center items-center">
                        <div className="m-auto">
                        <   Image src="/../assets/images/unreal.png" height={64} width={64} alt="/"/>
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <h3 className="text-xl">Unreal Engine 4/5</h3>
                        </div>
                    </div>    
                </div>
                <div className="p-6 bg-[#bbbbbb] shadow-xl shadow-[#00a3d9] rounded-xl hover:scale-105 ease-in duration-300">
                    <div className="grid grid-cols-2 gap-4 justify-center items-center">
                        <div className="m-auto">
                        <   Image src="/../assets/images/JavaScript.png" height={64} width={64} alt="/"/>
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <h3 className="text-xl">JavaScript</h3>
                        </div>
                    </div>    
                </div>
                <div className="p-6 bg-[#bbbbbb] shadow-xl shadow-[#00a3d9] rounded-xl hover:scale-105 ease-in duration-300">
                    <div className="grid grid-cols-2 gap-4 justify-center items-center">
                        <div className="m-auto">
                        <   Image src="/../assets/images/React.png" height={64} width={64} alt="/"/>
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <h3 className="text-xl">React</h3>
                        </div>
                    </div>    
                </div>
                <div className="p-6 bg-[#bbbbbb] shadow-xl shadow-[#00a3d9] rounded-xl hover:scale-105 ease-in duration-300">
                    <div className="grid grid-cols-2 gap-4 justify-center items-center">
                        <div className="m-auto">
                        <   Image src="/../assets/images/tailwind.png" height={64} width={64} alt="/"/>
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <h3 className="text-xl">Tailwind</h3>
                        </div>
                    </div>    
                </div>
            </div>
        </div>
    </div>
    )
}
export default Skills