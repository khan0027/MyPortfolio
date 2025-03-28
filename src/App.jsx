import './App.css'
import About from './components/About/About'
import Home from './components/Home/Home'
import Navbar from './components/Navbar/Navbar'
import Experience from './components/Experience/Experience'
function App() {
  

  return (
    <div className='bg-[#171d32] h-auto w-full overflow-hidden' >
      <Navbar/>
      <Home/>
      <About/>
      <Experience/>
    </div>
  )
}

export default App
