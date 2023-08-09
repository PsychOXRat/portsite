import Image from 'next/image'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import Main from '../components/Main'
import About from '../components/About'
import Navbar from '../components/Navbar'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import GraphicDesign from '@/components/GraphicDesign'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <Head>
        <title>Reece Jones Portfolio</title>
        <meta name="description" content="Reece Jones' portfolio website"/>
        <link rel="icon" href="/assets/images/favicon.ico"/>
      </Head>
      <Main/>
      <About/>
      <Skills/>
      <Projects/>
      <GraphicDesign/>
    </div>
  )
}
