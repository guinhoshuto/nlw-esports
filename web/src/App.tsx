import './styles/main.css'
import * as Dialog from '@radix-ui/react-dialog'
import { GameBanner } from './components/GameBanner'
import { CreateAdBanner } from './components/CreateAdBanner'
import { CreateAdModal } from './components/CreateAdModal'
import logo from './assets/Logo.svg'
import { useEffect, useState } from 'react'

interface Game {
  id: string,
  title: string,
  bannerUrl: string;
  _count: {
    ads: number
  }
}

function App() {

  const [games, setGames] = useState<Game[]>([])

  useEffect(() => {
    fetch('http://localhost:3000/games/')
      .then(response => response.json())
      .then(data => {
        setGames(data)
      })
  }, [])

  return (
    <div className="max-w-[1344px] mx-auto flex flex-col items-center m-20">
      <img src={logo} alt="" />
      <h1 className="text-6xl text-white font-black mt-20 ">Seu <span className="text-transparent bg-nlw-gradient bg-clip-text">duo</span> está aqui</h1>
      <div className="grid grid-cols-6 gap-6 mt-16">
        {games.map(game => (
          <GameBanner
            bannerUrl={game.bannerUrl}
            title={game.title}
            adsCount={game._count.ads}
            key={game.id}
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
