import Hero from "./components/Hero"
import {heroapi} from "./data/data.js"
import './index.css'
function App() {
  return (
    <main>
      <Hero heroapi={heroapi}/>
    </main>
  )
}

export default App
