import {MagnifyingGlassPlus} from 'phosphor-react';

import './styles/main.css';

import logoImg from './assets/logo.svg';

function App() {
  return (
    <div className='max-w-[1344px] mx-auto flex items-center flex-col my-20'>
      <img src={logoImg}/>

      <h1 className='text-6xl text-white font-black mt-20'>
        Your <span className='text-transparent bg-clip-text bg-nlw-gradient'>Duo</span> is Here
      </h1>

      <div className='grid grid-cols-6 gap-6 mt-16'>
        <a href="" className='relative rounded-lg overflow-hidden'>
          <img src="/game1.png" alt="" />

          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0" >
            <strong className='font-bold text-white block '>Dota 2</strong>
            <span className='text-zinc-300 text-sm block mt-1'>4 Posts</span>
          </div>
        </a>
        <a href="" className='relative rounded-lg overflow-hidden'>
          <img src="/game2.png" alt="" />

          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0" >
            <strong className='font-bold text-white block '>CS-GO</strong>
            <span className='text-zinc-300 text-sm block mt-1'>4 Posts</span>
          </div>
        </a>
        <a href="" className='relative rounded-lg overflow-hidden'>
          <img src="/game3.png" alt="" />

          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0" >
            <strong className='font-bold text-white block '>APEX Legends</strong>
            <span className='text-zinc-300 text-sm block mt-1'>4 Posts</span>
          </div>
        </a>
        <a href="" className='relative rounded-lg overflow-hidden'>
          <img src="/game4.png" alt="" />

          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0" >
            <strong className='font-bold text-white block '>Fortnite</strong>
            <span className='text-zinc-300 text-sm block mt-1'>4 Posts</span>
          </div>
        </a>
        <a href="" className='relative rounded-lg overflow-hidden'>
          <img src="/game5.png" alt="" />

          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0" >
            <strong className='font-bold text-white block '>World of Warcraft</strong>
            <span className='text-zinc-300 text-sm block mt-1'>4 Posts</span>
          </div>
        </a>
        <a href="" className='relative rounded-lg overflow-hidden'> 
          <img src="/game6.png" alt="" />

          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0" >
            <strong className='font-bold text-white block '>League of Legends</strong>
            <span className='text-zinc-300 text-sm block mt-1'>4 Posts</span>
          </div>
        </a>

      </div>

    <div className='pt-1 mt-8 bg-nlw-gradient self-stretch rounded-lg overflow-hidden'>
      <div className='bg-[#2A2634] px-8 py-6 flex justify-between items-center'> 
        <div>
        <strong className='text-2xl text-white font-black block'>Didn't find your duo?</strong>
        <span className='text-zinc-400'>Share a post to find new players!</span>
        </div>

        <button className="py-3 px-4 bg-violet-500 text-white rounded flex items-center gap-3 hover:bg-violet-600">
          <MagnifyingGlassPlus size={24}/>
          Publish a Post
        </button>
      </div>
    </div>
    </div>
  )
}

export default App
