import Hero from './components/Hero'
import Navbar from './components/Navbar'
import ExperienceButtons from './components/ExperienceButtons'
import InteractiveGrid from './components/InteractiveGrid'
import NursifyTeam from './components/NursifyTeam'
import ModuleSlides from './components/ModuleSlides'
import ScrollingReviews from './components/ScrollingReviews'
import NursifyCertification from './components/NursifyCertification'
import Footer from './components/Footer'

import './styles/App.css'
import { useState } from 'react'



function App() {
  const [selectedCategory, setSelectedCategory] = useState<string>('University Administrations');

  return (
    <>
      <Navbar/>
      <Hero />
      <ExperienceButtons onChange={setSelectedCategory}/>
      <InteractiveGrid category={selectedCategory}/>
      <NursifyTeam />
      <ModuleSlides />
      <ScrollingReviews />
      <NursifyCertification/>
      <Footer />
    </>
  )
}

export default App
