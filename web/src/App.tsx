import './styles/main.css'
import logo from './assets/Logo.svg'

function App() {
  return(
    <div className="max-w-[1344px] mx-auto flex flex-col items-center m-20">
      <img src={logo} alt="" />
      <h1 className="text-6xl text-white font-black mt-20">Seu <span className="text-transparent bg-nlw-gradient bg-clip-text">duo</span> está aqui</h1>
    </div>
  )
}

export default App
