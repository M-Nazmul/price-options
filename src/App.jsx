// import DaisyNav from './components/DaisyNav/DaisyNav'
import NavBar from './components/NavBar/NavBar'
import './App.css'
import Browser from './components/Browser/Browser'
import PriceOptions from './components/PriceOptions/PriceOptions'
import LineChart from './components/LineChart/LineChart'

function App() {

  return (
    <div className='border-l border-slate-700 max-w-[1440px] mx-auto px-4 md:px-16 '>
      <NavBar></NavBar>
      <Browser></Browser>
      <PriceOptions></PriceOptions>
      <LineChart></LineChart>
    </div>
  )
}

export default App
