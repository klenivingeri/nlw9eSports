import './styles/main.css'
import logoImg from '../src/assets/logo-nlw.svg'


function App() {
  return (
  <div className="max-w-[1344px] mx-auto flex flex-col items-center my-20">
    <img src={logoImg}  alt="" />
    <h1 className="text-6xl text-white font-black my-20">
      Seu
      <span className="bg-nlw-gradient text-transparent bg-clip-text">
        duo
      </span>
      está aqui.
    </h1>
  </div>
  )
}

export default App
