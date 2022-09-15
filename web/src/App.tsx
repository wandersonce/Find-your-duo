import { useEffect, useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog'

import './styles/main.css';

import logoImg from './assets/logo.svg';
import GameBanner from './components/GameBanner';
import CreateAdBanner from './components/CreateAdBanner';
import { GameController } from 'phosphor-react';

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
            <form >
              <div>
                <label htmlFor="game">What is the game?</label>
                <input id="game" type="text" placeholder='Select the game that you want to play'/>
              </div>

              <div>
                <label htmlFor="name">Your name (or nickname)</label>
                <input id="name" type="text" placeholder='What is your game name' />
              </div>

              <div>
                <div>
                  <label htmlFor="yearsPlaying">How long have you being playing?</label>
                  <input id="yearsPlaying" type="number" placeholder='Is ok be ZERO'/>
                </div>
                <div>
                  <label htmlFor="discord">What is your Discord ID</label>
                  <input id="discord" type="text" placeholder='User#0000'/>
                </div>
              </div>

              <div>
                <div>
                  <label htmlFor="weekDays">Days that you play</label>
                </div>
                <div>
                  <label htmlFor="hourStart">What is your play time?</label>
                  <div>
                    <input type="time"  id="hourStart" placeholder='From'/>
                    <input type="time"  id="hourEnd" placeholder='To'/>
                  </div>
                </div>
              </div>

              <div>
                <input type="checkbox"/>
                Do I normally use Voicechat
              </div>

              <footer>
                <button>Cancel</button>
                <button type="submit">
                  <GameController />
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
