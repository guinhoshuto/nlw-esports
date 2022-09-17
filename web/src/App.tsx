import './styles/main.css'
import * as Dialog from '@radix-ui/react-dialog'
import { GameBanner } from './components/GameBanner'
import { CreateAdBanner } from './components/CreateAdBanner'
import { Input } from './components/Forms/input'
import logo from './assets/Logo.svg'
import { useEffect, useState } from 'react'
import { GameController } from 'phosphor-react'

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
        <Dialog.Portal>
          <Dialog.Overlay className="bg-black/60 inset-0 fixed" />
          <Dialog.Content className="fixed bg-[#2A2634] px-10 py-8 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-[480px] shadow-lg shadow-black/25">
            <Dialog.Title className="text-3xl font-black">Publique seu anúncio</Dialog.Title>
            <form className="mt-8 flex-col gap-4">
              <div className="flex flex-col gap-2">
                <label htmlFor="game" className="font-semibold">Qual o game?</label>
                <Input
                  id="game"
                  placeholder="Como te chamam no game?"
                />
              </div>

              <div className="flex flex-col gap-2 mt-4">
                <label htmlFor="name">Seu username</label>
                <Input
                  id="name"
                  placeholder="Como te chamam dentro do game?"
                />
              </div>

              <div className="grid grid-cols-2 gap-6 mt-4">
                <div className="flex flex-col gap-2">
                  <label htmlFor="yearsPlaying">Quantos há anos joga</label>
                  <Input
                    id="yearsPlaying"
                    placeholder='tudo bem ser 0'
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="discord">Qual seu discord</label>
                  <Input
                    type="text"
                    id="discord"
                    placeholder='Usuario#0000'
                  />
                </div>
              </div>

              <div className="flex gap-6 mt-4">
                <div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="weekDays">Quando costuma jogar?</label>
                  </div>
                  <div className="grid grid-cols-4 gap-2">
                    <button className="h-8 w-8 rounded bg-zinc-900" title="Domingo">D</button>
                    <button className="h-8 w-8 rounded bg-zinc-900" title="Segunda">S</button>
                    <button className="h-8 w-8 rounded bg-zinc-900" title="Terça">T</button>
                    <button className="h-8 w-8 rounded bg-zinc-900" title="Quarta">Q</button>
                    <button className="h-8 w-8 rounded bg-zinc-900" title="Quinta">Q</button>
                    <button className="h-8 w-8 rounded bg-zinc-900" title="Sexta">S</button>
                    <button className="h-8 w-8 rounded bg-zinc-900" title="Sábado">S</button>
                  </div>

                </div>
                <div className="flex flex-col gap-2 flex-1">
                  <label htmlFor="hourStart">Qual horário do dia?</label>
                  <div className="grid grid-cols-2 gap-2">
                    <Input
                      type="time"
                      id="hourStart"
                      placeholder='De'
                    />
                    <Input
                      type="time"
                      id="hourEnd"
                      placeholder='Até'
                    />
                  </div>
                </div>
              </div>

              <div className="mt-4 flex gap-2 text-sm">
                <Input type="checkbox" />
                Costumo me conectar ao chat de voz
              </div>

              <footer className='mt-4 flex justify-end gap-4'>
                <Dialog.Close
                  type="button"
                  className="bg-zinc-500 px-5 h-12 rounded-md font-semibold hover:bg-zinc-600">
                  Cancelar
                </Dialog.Close>
                <button className="bg-violet-500 px-5 h-12 rounded-md font-semibold items-center gap-3 hover:bg-violet-600" type="submit">
                  <GameController className='w-6 h-6 inline-block' /> Encontrar duo
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
