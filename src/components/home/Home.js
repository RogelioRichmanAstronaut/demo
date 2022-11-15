import React from 'react'
import Principal from '../principal/Principal'
import Sidebar from '../sidebar/Sidebar'
import './home.css'
const Home = () => {
  return (
    <div className='containeri'>
      <Sidebar />
      <Principal />
    </div>
  )
}

export default Home
