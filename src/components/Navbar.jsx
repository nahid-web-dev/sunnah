import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (

    <div className=' text-gray-700'>

      <div className=' hidden md:flex justify-between items-center h-20'>
        <h2 className=' text-4xl md:text-5xl font-semibold text-pink-500 '>Sunnah</h2>
        <div className=' flex gap-5 text-xl peer-[n<100]:cursor-pointer md:pr-[20vw] '>
          <NavLink to='/'>home</NavLink>
          <NavLink to='/menu'>menu</NavLink>
          <NavLink to='/contact'>contact</NavLink>
        </div>
      </div>

      <div className=' md:hidden py-4 flex flex-col gap-3'>
        <h2 className=' text-4xl md:text-5xl font-semibold text-pink-500'>Sunnah</h2>
        <div className=' flex gap-[6vw] sm:gap-6 text-lg sm:text-xl ustify-center '>
          <NavLink to='/' >home</NavLink>
          <NavLink to='/menu'>menu</NavLink>
          <NavLink to='/contact' >contact</NavLink>
        </div>
      </div>

    </div>
  )
}

export default Navbar