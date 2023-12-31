import Image from "next/image"
import Link from "next/link"
import React from "react"

const ProjectItem = ({title, language, backgroundImg, projectURL}) => {
  return (
    <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-[#00a3d9] bg-[#bbbbbb] rounded-xl p-4 group hover:bg-gradient-to-r from-[#1d6581] to-[#00a3d9]">
    <Image className="rounded-xl group-hover:opacity-20" src={backgroundImg} height={720} width={1280} alt="/"/>
    <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <h3 className="text-2xl text-white trackign-wider text-center">{title}</h3>
        <p className="pb-4 pt-2 text-white text-center">{language}</p>
        <Link href={projectURL}>
            <p className="text-center py-3 rounded-lg bg-white text-[#00a3d9] font-bold text-lg">More info</p>
        </Link>
    </div>
</div>
  )
}
export default ProjectItem