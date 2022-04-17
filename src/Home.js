import React, { useContext } from 'react'
import { FaBars } from 'react-icons/fa'
import App from './App'
import { AppContext,useGlobalContext } from './context'

const Home = () => {
  const {openSidebar,openModel}=useGlobalContext()
  
  return (
  <main>
    <button className='sidebar-toggle' onClick={openSidebar}>
      <FaBars/>
    </button>
    <button className="btn" onClick={openModel}>show Model</button>
  </main>
  )
}

export default Home
