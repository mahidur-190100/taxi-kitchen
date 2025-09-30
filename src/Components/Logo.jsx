import React from 'react'
import logoImg from "../assets/logo.png"

function Logo() {
  return (
    <div className='flex items-center gap-3'> 
       <img className='w-10' src={logoImg} alt="" />
        <div className="title font-bold text-3xl">
            Taxi <span className='text-amber-400'>Kitchen</span>
        </div>
    </div>
  )
}

export default Logo