import Hero from './components/Hero'
import Navbar from './components/Navbar'
import ExperienceButtons from './components/ExperienceButtons'
import InteractiveGrid from './components/InteractiveGrid'
import NursifyTeam from './components/NursifyTeam'
import ModuleSlides from './components/ModuleSlides'
import Testimonials from './components/Testimonials'
import ScrollingReviews from './components/ScrollingReviews'
import './styles/App.css'


function App() {


  return (
    <>
      <Navbar/>
      <Hero />
      <ExperienceButtons/>
      <InteractiveGrid />
      <NursifyTeam />
      <ModuleSlides />
      <Testimonials />
      <ScrollingReviews />
    </>
  )
}

export default App
