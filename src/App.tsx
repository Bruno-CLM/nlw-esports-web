import './styles/main.css'
import * as Dialog from '@radix-ui/react-dialog';
import { useState, useEffect, SetStateAction } from 'react'
import logoImg from './assets/logo.svg'

import { GameCard } from './components/GameCard'
import { CreateAdBanner } from './components/CreateAdBanner'
import { Input } from './components/form/Input';
import { CreateAdModal } from './components/form/CreateAdModal';
import axios from 'axios';

interface Game{
  id: string,
  title: string,
  bannerUrl: string,
  _count: {
      Ad: number
  }
}

function App() { 

  const [games, setGames] = useState<Game []>([])

      useEffect(() => {
        axios('http://192.168.15.149:3333/games')
        .then(response => {
          setGames(response.data)
      })
    }, [])

  return (
    <div className='max-w-[1344px] mx-auto flex flex-col items-center my-20'>
      <img src={logoImg} alt=""/>
      <h1 className='text-6xl text-white font-black mt-20'>Seu <span className='text-transparent bg-nlw-gradient bg-clip-text'>duo</span> está aqui.</h1>
    
      <div className='grid grid-cols-6 gap-6 mt-16'>

         {games.map(game => {
          return(
            <GameCard adsCount={game._count.Ad} title={game.title} bannerUrl={game.bannerUrl} key={game.id}/>
          )
         })}

      </div>
      <Dialog.Root>
        <CreateAdBanner />

       <CreateAdModal />
      </Dialog.Root>
      
    </div>
  )
}

export default App
