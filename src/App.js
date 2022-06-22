import React from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import Hero from './Hero'
import Submenu from './Submenu'
import { useGlobalContext } from './ContextAPI'
import './style.css'

const App = () => {
  // const data = useGlobalContext()
  // console.log(data)
  return (
    <>
      <Navbar />
      <Sidebar />
      <Hero />
      <Submenu />
    </>
  )
}

export default App