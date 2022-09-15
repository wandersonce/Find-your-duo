import { useEffect, useState } from 'react';

import './styles/main.css';

import logoImg from './assets/logo.svg';
import GameBanner from './components/GameBanner';
import CreateAdBanner from './components/CreateAdBanner';

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
        <GameBanner bannerUrl='/game1.png' title="League of Legends" adsCount={5} />
      </div>

      <CreateAdBanner />
    </div>
  )
}

export default App
