import './index.css'
import { heroapi, popularsales, toprateslaes, highlight, sneaker, story, footerAPI } from "./data/data.js"
import Hero from "./components/Hero"
import Sales from './components/Sales'
import FlexContext from './components/FlexContext'
import Stories from './components/Stories'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
function App() {
  return (
    <main className='flex flex-col gap-20 relative'>
      <Navbar />
      <Hero heroapi={heroapi} />
      <Sales endpoint={popularsales} ifExists />
      <FlexContext endpoint={highlight} ifExists />
      <Sales endpoint={toprateslaes} />
      <FlexContext endpoint={sneaker} />
      <Stories story={story}/>
      <Footer footerAPI={footerAPI}/>
    </main>
  )
}

export default App
