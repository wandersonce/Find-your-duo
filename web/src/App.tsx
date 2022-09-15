import { useEffect, useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog'

import './styles/main.css';

import logoImg from './assets/logo.svg';
import GameBanner from './components/GameBanner';
import CreateAdBanner from './components/CreateAdBanner';
import { GameController } from 'phosphor-react';
import Input from './components/Form/Input';

interface Game{
  id: string;
  title: string;
  bannerUrl: string;
  _count: {
    ads: number;
  }
}

function App() {
  const [games, setGames] = useState<Game[]>([]);

  useEffect(() =>{
    fetch('http://localhost:3333/games')
    .then(response => response.json())
    .then(data => {
      setGames(data);
    })
  },[])

  return (
    <div className='max-w-[1344px] mx-auto flex items-center flex-col my-20'>
      <img src={logoImg}/>

      <h1 className='text-6xl text-white font-black mt-20'>
        Your <span className='text-transparent bg-clip-text bg-nlw-gradient'>Duo</span> is Here
      </h1>

      <div className='grid grid-cols-6 gap-6 mt-16'>
        {games.map(game => (
          <GameBanner 
            key={game.id} 
            bannerUrl={game.bannerUrl} 
            title={game.title} 
            adsCount={game._count.ads} 
          />
        ))}
        
      </div>
      <Dialog.Root>
        <CreateAdBanner />
        <Dialog.Portal>
          <Dialog.Overlay className='bg-black/60 inset-0 fixed'/>

          <Dialog.Content className='fixed bg-[#2A2634] py-8 px-10 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-[480px] shadow-black/25'>
            <Dialog.Title className='text-3xl text-white font-black'>Publish a Post</Dialog.Title>
            <form className='mt-8 flex flex-col gap-4'>
              <div className='flex flex-col gap-2'>
                <label className='font-semibold' htmlFor="game">What is the game?</label>
                <Input id="game" placeholder='Select the game that you want to play'/>
              </div>

              <div>
                <label htmlFor="name">Your name (or nickname)</label>
                <Input id="name" type="text" placeholder='What is your game name' />
              </div>

              <div className='grid grid-cols-2 gap-6'>
                <div className='flex flex-col gap-2'>
                  <label htmlFor="yearsPlaying">How long have you being playing?</label>
                  <Input id="yearsPlaying" type="number" placeholder='Is ok be ZERO'/>
                </div>
                <div className='flex flex-col gap-2 justify-between'> 
                  <label htmlFor="discord">What is your Discord ID</label>
                  <Input id="discord" type="text" placeholder='User#0000'/>
                </div>
              </div>

              <div className='flex gap-6'>
                <div className='flex flex-col gap-2'>
                  <label htmlFor="weekDays">Days that you play</label>
                  <div className='grid grid-cols-4 gap-2'>
                    <button
                    className='w-8 h-8 rounded bg-zinc-900'
                    title="Sunday">S</button>
                    <button
                    className='w-8 h-8 rounded bg-zinc-900'
                    title="Monday">M</button>
                    <button
                    className='w-8 h-8 rounded bg-zinc-900'
                    title="Tuesday ">T</button>
                    <button
                    className='w-8 h-8 rounded bg-zinc-900'
                    title="Wednesday">W</button>
                    <button
                    className='w-8 h-8 rounded bg-zinc-900'
                    title="Thursday">T</button>
                    <button
                    className='w-8 h-8 rounded bg-zinc-900'
                    title="Friday">F</button>
                    <button
                    className='w-8 h-8 rounded bg-zinc-900'
                    title="Saturday">S</button>
                  </div>
                </div>
                 
                <div className='flex flex-col gap-2 flex-1'>
                  <label htmlFor="hourStart">What is your play time?</label>
                  <div className='grid grid-cols-2 gap-2'>
                    <Input type="time"  id="hourStart" placeholder='From'/>
                    <Input type="time"  id="hourEnd" placeholder='To'/>
                  </div>
                </div>
              </div>

              <div className='mt-2 flex gap-2 text-sm'>
                <Input type="checkbox"/>
                Do I normally use Voicechat
              </div>

              <footer className='mt-4 flex justify-end gap-4'>
                <Dialog.Close className='bg-zinc-500 px-5 h-12 rounded-md font-semibold hover:bg-zinc-600'>Cancel</Dialog.Close>
                <button className='bg-violet-500 px-5 h-12 rounded-md font-semibold flex items-center gap-3 hover:bg-violet-600' type="submit">
                  <GameController size={24} />
                  Find your Duo
                </button>
              </footer>
            </form>
          </Dialog.Content>

        </Dialog.Portal>
      </Dialog.Root>
    </div>
  )
}

export default App
