import { useEffect, useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog'
import axios from 'axios';
import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'

import './styles/main.css';

import logoImg from './assets/logo.svg';
import GameBanner from './components/GameBanner';
import CreateAdBanner from './components/CreateAdBanner';
import CreateAdModal from './components/createAdModal';

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
  const [ref] = useKeenSlider<HTMLDivElement>({
    slides: {
      perView: 7,
      spacing: 15
    },
    loop: true,
    mode: "free-snap",
  })
  console.log('here')

  useEffect(() =>{
    axios('http://localhost:3333/games')
    .then(response => {
      setGames(response.data);
    })
  },[])

  return (
    <div className='max-w-[1344px] mx-auto flex items-center flex-col my-20'>
      <img src={logoImg}/>

      <h1 className='text-6xl text-white font-black mt-20'>
        Your <span className='text-transparent bg-clip-text bg-nlw-gradient'>Duo</span> is Here
      </h1>

      <div ref={ref} className='keen-slider grid grid-cols-6 gap-6 mt-16'>
        {games.map((game, index) => (
          <GameBanner 
            key={game.id} 
            indexMap={index}
            bannerUrl={game.bannerUrl} 
            title={game.title} 
            adsCount={game._count.ads} 
          />
        ))}
        
      </div>
      <Dialog.Root>
        <CreateAdBanner />
        <CreateAdModal />
      </Dialog.Root>
    </div>
  )
}

export default App
