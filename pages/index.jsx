import Head from 'next/head'
import Image from 'next/image'
import swr from '../lib/swr';
import Tippy from '@tippyjs/react';


export default function Home() {
  const { data: _repositories } = swr("/api/repos");
  const repositories = _repositories ? _repositories : null;

  return (
    <>
      <div className="bg-neutral-800/10 shadow-xl rounded-lg w-full h-auto mt-6">
          <div className="relative">
            <div className="flex flex-col lg:flex-row justify-between w-full p-6 px-8 items-center h-full">
              <div className="flex flex-col lg:justify-start justify-center items-center lg:items-start mt-5 lg:mt-0 w-full">
                <div className="flex items-center">
                <p className="flex items-center text-white text-4xl font-semibold">
                  Knaves
                </p>
            
                </div>
                <p className="text-white/50 text-md mt-3">
I am a professional editor and software developer. I have been professionally involved in community management and development for 2 years. I have high-level knowledge and experience in areas such as community management and social media management.
                </p>
              </div>
              <div className={`order-first lg:order-last flex-shrink-0 relative w-[160px] h-[160px] rounded-full pulse-avatar-online `}>
                <img alt="knaves" src={`https://media.discordapp.net/attachments/1282140026200653825/1282140058672955402/DcWWWF00TXaI3JkILQU3-Q.png?ex=66e4343a&is=66e2e2ba&hm=be560b5886098e57d2d0c53a71c98f8784e800714c17d1b4935e204241d7a814&=&format=webp&quality=lossless&width=671&height=671`} width="160" height="160" className={`bg-neutral-700 w-[160px] h-[160px] rounded-full`} />
              </div>
              
            </div>
            <br></br>
            <span style={{ zIndex: '-1' }} className="text-white/5 absolute bottom-3 left-7 text-xl sm:text-2xl md:text-4xl lg:text-3xl font-semibold">Content Creator / Manager</span>
          </div>
      </div>

        <div className="bg-neutral-800/10 shadow-xl rounded-lg w-full h-auto mt-6">
          <div className="relative">
            <div className="flex flex-col lg:flex-row justify-between w-full p-6 px-8 items-center h-full">
              <div className="flex flex-col lg:justify-start justify-center items-center lg:items-start mt-5 lg:mt-0 w-full">
                <div className="flex items-center">
                <p className="flex items-center text-white text-4xl font-semibold">
                  About Me
                </p>
            
                </div>
                <p className="text-white/50 text-md mt-3">
I am 18 years old, I am from Turkey. I was born in Niğde. I am a professional content producer and I have over 15 thousand followers on social media in the field of software and cryptocurrency. I am a fullstack web developer, but as of 2024 I am not actively developing full projects.
                </p>
              </div>
              
            </div>
          </div>
      </div>


    </>
  )
}
