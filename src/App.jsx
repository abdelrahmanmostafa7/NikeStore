import './index.css'
import Hero from "./components/Hero"
import { heroapi, popularsales, toprateslaes, highlight, sneaker , story} from "./data/data.js"
import Sales from './components/Sales'
import FlexContext from './components/FlexContext'
import Stories from './components/Stories'
import Footer from './components/Footer'
function App() {
  return (
    <main className='flex flex-col gap-20 relative'>
      <Hero heroapi={heroapi} />
      <Sales endpoint={popularsales} ifExists />
      <FlexContext endpoint={highlight} ifExists />
      <Sales endpoint={toprateslaes} />
      <FlexContext endpoint={sneaker} />
      <Stories story={story}/>
      <Footer />s
    </main>
  )
}

export default App
