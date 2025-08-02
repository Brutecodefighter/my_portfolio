
import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Navbar from './Components/NavBar'
import HeroSection from './Components/Home/Home'
import EducationTimeline from './Components/Education/Education'
import DotNavbar from './Components/Home/DotedNavBar'
import Skills from './Components/Skills/Skill'
import Projects from './Components/Projects/Projects'
import Contact from './Components/Contact/Contact'
function App() {

  return (
    <>
    <BrowserRouter>   
    <Navbar/>
    <DotNavbar/>
    <Routes>
      <Route path='/' element={<HeroSection/>}/>
      <Route path='/education' element={<EducationTimeline/>}/>
      <Route path='/skills' element={<Skills/>}/>
      <Route path='/projects' element={<Projects/>}/>
      <Route path='/contact' element={<Contact/>}/>
    </Routes>
    
   
    </BrowserRouter>
   
    </>
  )
}

export default App
