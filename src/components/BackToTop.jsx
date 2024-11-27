'use client'

import { useEffect, useState } from "react"
import { FaArrowUp } from "react-icons/fa6"


function BackToTop() {

  const [visible, setvisible] = useState(false)


  const goToTop = (e) => {
    window.scrollTo({
      behavior: 'smooth',
      top: 0,
    })
  }

  useEffect(
    () => {

      const handleScrollChange = () => {
        // console.log(visible)
        // console.log(window.scrollY)
        if (window.scrollY >= 400) {
          // console.log('greater')
          setvisible(true)
        } else {
          setvisible(false)
        }
      }
      window.addEventListener('scroll', handleScrollChange)

      return () => {
        window.removeEventListener('scroll', handleScrollChange)
      }
    }, []
  )

  return (
    <div className={` cursor-pointer ${visible ? "top-[80vh]" : 'top-[100vh]'} fixed z-50 transition-all right-20 text-xl rounded-full bg-black/40 p-3 text-white`} onClick={goToTop}>
      <FaArrowUp className=" back-to-top-icon relative" />
    </div>
  )
}

export default BackToTop