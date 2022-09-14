import './styles/main.css'
import { MagnifyingGlassPlus } from 'phosphor-react'
import logo from './assets/Logo.svg'

function App() {
  return(
    <div className="max-w-[1344px] mx-auto flex flex-col items-center m-20">
      <img src={logo} alt="" />
      <h1 className="text-6xl text-white font-black mt-20 ">Seu <span className="text-transparent bg-nlw-gradient bg-clip-text">duo</span> está aqui</h1>
      <div className="grid grid-cols-6 gap-6 mt-16">
        <a href="" className="relative rounded-lg overflow-hidden">
          <img src="/g1.png" alt="" />
          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
            <strong className="font-bold text-white block text-md">League of Legends</strong>
            <span className="text-sm text-zinc-300 block mt-1">5 anúncios</span>
          </div>
        </a>
        <a href="" className="relative rounded-lg overflow-hidden">
          <img src="/g6.png" alt="" />
          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
            <strong className="font-bold text-white block text-md">League of Legends</strong>
            <span className="text-sm text-zinc-300 block mt-1">5 anúncios</span>
          </div>
        </a>

        <a href="" className="relative rounded-lg overflow-hidden">
          <img src="/g5.png" alt="" />
          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
            <strong className="font-bold text-white block text-md">League of Legends</strong>
            <span className="text-sm text-zinc-300 block mt-1">5 anúncios</span>
          </div>
        </a>

        <a href="" className="relative rounded-lg overflow-hidden">
          <img src="/g2.png" alt="" />
          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
            <strong className="font-bold text-white block text-md">League of Legends</strong>
            <span className="text-sm text-zinc-300 block mt-1">5 anúncios</span>
          </div>
        </a>
        <a href="" className="relative rounded-lg overflow-hidden">
          <img src="/g3.png" alt="" />
          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
            <strong className="font-bold text-white block text-md">League of Legends</strong>
            <span className="text-sm text-zinc-300 block mt-1">5 anúncios</span>
          </div>
        </a>
        <a href="" className="relative rounded-lg overflow-hidden">
          <img src="/g4.png" alt="" />
          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
            <strong className="font-bold text-white block text-md">League of Legends</strong>
            <span className="text-sm text-zinc-300 block mt-1">5 anúncios</span>
          </div>
        </a>
      </div>
      <div className="pt-1 mt-8 bg-nlw-gradient self-stretch rounded-lg overflow-hidden">
        <div className="bg-[#2A2634] px-8 py-6 flex justify-between align-center">
          <div>
            <strong className="text-2xl text-white font-black block">Não encontrou seu duo?</strong>
            <span className="text-zinc-400">Publique um anúncio para encontrar novos players</span>
          </div>
          <button className="py-3 px-4 bg-violet-500 text-white rounded hover:bg-violet-600 flex items-center gap-3">Publicar Anúncio <MagnifyingGlassPlus size={24}/></button>
        </div>
      </div>
    </div>
  )
}

export default App
