// import DaisyNav from './components/DaisyNav/DaisyNav'
import NavBar from './components/NavBar/NavBar'
import './App.css'
import Browser from './components/Browser/Browser'
import PriceOptions from './components/PriceOptions/PriceOptions'

function App() {

  return (
    <div className='max-w-[1320px] mx-auto px-16 md:px-[85px]'>
      <NavBar></NavBar>
      <Browser></Browser>
      <PriceOptions></PriceOptions>
    </div>
  )
}

export default App
