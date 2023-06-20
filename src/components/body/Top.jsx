import React from 'react'
import '../../App.css'
import TopImage from '../../assets/image-hero-mobile@2x.webp';
import TabletImage from '../../assets/image-hero-tablet@2x.webp'
import DesktopImage from '../../assets/image-hero-desktop@2x.webp'

function Top() {
  return (
    <div id='topContentWrapper' className='flex flex-col text-left'>
        <div id="textWrapper" className='md:max-w-[398px] xl:max-w-[457px]'>
            <div id="heading" className='mb-[26px] font-["Plus_Jakarta_Sans"] text-[40px] leading-[50px] font-extrabold text-naval xl:text-[56px] xl:leading-[71px] xl:mb-[29px]'>
                <h2>Maximize skill, minimize budget</h2>
            </div>
            <div id="subLine" className='mb-6 font-["Plus_Jakarta_Sans"] text-base leading-[26px] font-medium text-silver xl:text-lg xl:leading-[28px] xl:mb-10 xl:max-w-[445px]'>
                <p>Our modern courses across a range of in-demand skills will give you the knowledge you need to live the life you want.</p>
            </div>
            <div id="topButton" className='mb-[46px] rounded-[31.5px] text-white bg-gradient-to-b from-orangeGradientTwo from-0% to-orangeGradientOne to-100% px-[37px] py-[15px] w-[167px] text-center font-["Plus_Jakarta_Sans"] text-base leading-[26px] font-bold xl:text-lg xl:leading-[28px] xl:w-[180px] xl:hover:cursor-pointer'>
                <button>Get Started</button>
            </div>
        </div>
        <div id='topImage' className='md:absolute md:w-[368px] md:h-[640px] md:overflow-hidden md:left-[400px] md:top-[-65px] xl:w-[653px] xl:h-fit xl:top-[-180px] xl:left-[787px]'>
            <img src={TopImage} alt="Cofee drinker" className='md:hidden' />
            <img src={TabletImage} alt="Cofee drinker" className='hidden md:block md:max-w-[640px] md:w-[640px] xl:hidden' />
            <img src={DesktopImage} alt="Cofee drinker" className='hidden xl:block xl:max-w-[991px] xl:w-[991px] xl:h-full' />
        </div>
    </div>
  )
}

export default Top