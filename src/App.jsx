import './App.css'
import About from './components/About/About'
import Home from './components/Home/Home'
import Navbar from './components/Navbar/Navbar'
import Experience from './components/Experience/Experience'
import Contactme from './components/Contact/Contactme'
function App() {
  

  return (
    <div className='bg-[#171d32] h-auto w-full overflow-hidden' >
      <Navbar/>
      <Home/>
      <About/>
      <Experience/>
      <Contactme />
    </div>
  )
}

export default App
