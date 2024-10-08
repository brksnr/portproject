
import { useEffect } from 'react'
import { Footer } from './components/footer'
import { Header } from './components/header'
import { Hero } from './components/hero'
import  { Profile }  from './components/profile'
import { Projects } from './components/projects'
import { Skills } from './components/skills'
import { useDarkMode } from './contexts/darkmodecontext'

function App() {
      const { darkMode } = useDarkMode();

    useEffect(() => {
      if(darkMode) {
        document.body.classList.add("body-dark-mode")
      } else {
        document.body.classList.remove("body-dark-mode")
      }
    },[darkMode])

  return (
    <>
      <Header/> 
      <Hero/>
      <Skills/>
      <Profile/>
      <Projects/>
      <Footer/>
   </>
   
  )
}

export default App
