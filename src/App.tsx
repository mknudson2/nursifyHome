import Hero from './components/Hero'
import Navbar from './components/Navbar'
import ExperienceButtons from './components/ExperienceButtons'
import InteractiveGrid from './components/InteractiveGrid'
import NursifyTeam from './components/NursifyTeam'
import './styles/App.css'


function App() {


  return (
    <>
      <Navbar/>
      <Hero />
      <ExperienceButtons/>
      <InteractiveGrid />
      <NursifyTeam />
    </>
  )
}

export default App
