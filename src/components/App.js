import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import Detail from './Detail'
import Goodies from './Goodies'
import Info from './Info'
import Footer from './Footer'
import AOS from 'aos'
import 'aos/dist/aos.css'

const App = () => {
  React.useEffect(() => {
    AOS.init()
  }, [])

  return (
    <div>
      <Navbar />
      <Hero />
      <Detail />
      <Goodies />
      <Info />
      <Footer />
    </div>
  )
}

export default App
