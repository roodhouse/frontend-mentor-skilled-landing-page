import React from 'react'
import '../App.css'


function Header() {
  return (
    <div id='headerContentWrapper' className='flex justify-between items-center'>
        <div id='headerLogo' className='font-["Plus_Jakarta_Sans"] font-extrabold text-[28px] leading-[35px] text-naval'>
            <h1>skilled</h1>
        </div>
        <div id='headerBtn' className='bg-naval font-["Plus_Jakarta_Sans"] font-bold text-base leading-[28px] text-white px-6 py-[9px] rounded-[28px] xl:hover:bg-purple xl:hover:cursor-pointer'>
            <button>Get Started</button>
        </div>
    </div>
  )
}

export default Header