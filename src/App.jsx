import React from 'react'
import Footer from './COMPONENTS/Footer/Footer'
import Navbar from './COMPONENTS/Navbar/Navbar'
import Home from './COMPONENTS/Home/Home'
import Search from './COMPONENTS/Search/Search'
import Support from './COMPONENTS/Support/Support'
import Info from './COMPONENTS/Info/Info'
import Lounge from './COMPONENTS/Lounge/Lounge'
import Travelers from './COMPONENTS/Travelers/Travelers'
import Subscribers from './COMPONENTS/Subscribers/Subscribers'

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <Search / >
      <Support />
      <Info />
      <Lounge /> 
      <Travelers/> 
      <Subscribers/>
      <Footer />
    </div>
  )
}

export default App