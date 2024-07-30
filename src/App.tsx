import Navbar from './components/Navbar'
import './styles/App.css'


function App() {
const name = "Michael"

  return (
    <>
      <Navbar/>
      <h1>Hello {name}</h1>
    </>
  )
}

export default App
