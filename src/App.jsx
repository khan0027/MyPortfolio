import './App.css'
import About from './components/About/About'
import Home from './components/Home/Home'
import Navbar from './components/Navbar/Navbar'
import Experience from './components/Experience/Experience'
import Contactme from './components/Contact/Contactme'
import {createBrowserRouter,createRoutesFromElements,Route, RouterProvider} from 'react-router-dom'
import RootLayout from './components/Layout/RootLayout'

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayout/>} >
        <Route index element={<Home/>}  />
        <Route path='about' element={<About/>} />
        <Route path='skills'  element={<Experience/>} />
        <Route path='contactme' element={<Contactme/>} />
      </Route>
    )
  );

  return (
    <RouterProvider router={router} />
  )
}

export default App
