import React from 'react'
import '../App.css'


function Footer() {
  return (
    <div id='footerContentWrapper' className='flex justify-between items-center'>
        <div id='footerLogo' className='font-["Plus_Jakarta_Sans"] font-extrabold text-[28px] leading-[35px] text-white py-11'>
            <h1>skilled</h1>
        </div>
        <div id='footerBtn' className='bg-gradient-to-b from-blueGradientOne from-0% to-blueGradientTwo to-100% font-["Plus_Jakarta_Sans"] font-bold text-base leading-[28px] text-white px-6 py-[9px] rounded-[28px] hover:cursor-pointer'>
            <button>Get Started</button>
        </div>
    </div>
  )
}

export default Footer