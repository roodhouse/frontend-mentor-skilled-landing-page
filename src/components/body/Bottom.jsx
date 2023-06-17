import React from 'react'
import Animation from '../../assets/icon-animation.svg'
import Design from '../../assets/icon-design.svg'
import Photo from '../../assets/icon-photography.svg'
import Crypto from '../../assets/icon-crypto.svg'
import Business from '../../assets/icon-business.svg'

function Bottom() {
  return (
    <div id='bottomContentWrapper'>
        <div id="bottomHeading" className='rounded-[10px] bg-gradient-to-b from-orangeGradientTwo from-0% to-orangeGradientOne to-100% pt-6 pb-8 px-7 text-white text-2xl leading-[32px] text-left font-extrabold mb-4'>
            <h2>Check out our most popular courses!</h2>
        </div>
        <div id="bottomCards">
            <div id="animationCard" className='flex flex-col items-start text-left bg-white px-7 mb-4 shadow-[0px_25px_50px_rgba(6,22,141,0.0442381)]'>
                <div id="animationImageContainer" className='max-h-[24px]'>
                    <div id='animationImage'>
                        <img src={Animation} alt="Animation card" />
                    </div>
                </div>
                <div id="animationTextContainer" className='pt-[56px] rounded-[10px]'>
                    <div id="animationTitle" className='mb-4 font-["Plus_Jakarta_Sans"] font-extrabold text-xl leading-[25px] text-naval'>
                        <h3>Animation</h3>
                    </div>
                    <div id="animationText" className='mb-6 font-["Plus_Jakarta_Sans"] font-medium text-base leading-[26px] text-silver'>
                        <p>Learn the latest animation techniques to create stunning motion design and captivate your audience.</p>
                    </div>
                    <div id="animationAsk" className='mb-8 font-["Plus_Jakarta_Sans"] font-bold text-lg leading-[28px] text-hotPink'>
                        <p>Get Started</p>
                    </div>
                </div>
            </div>
            <div id="designCard" className='flex flex-col items-start text-left mb-4 shadow-[0px_25px_50px_rgba(6,22,141,0.0442381)]'>
                <div id="designImageContainer" className='max-h-[24px] bg-[#F2F3FB] w-full px-7 z-10'>
                    <div id='designImage'>
                        <img src={Design} alt="Design card" />
                    </div>
                </div>
                <div id="designTextContainer" className='pt-[56px] px-7 rounded-[10px] bg-white'>
                    <div id="designTitle" className='mb-4 font-["Plus_Jakarta_Sans"] font-extrabold text-xl leading-[25px] text-naval'>
                        <h3>Design</h3>
                    </div>
                    <div id="designText" className='mb-6 font-["Plus_Jakarta_Sans"] font-medium text-base leading-[26px] text-silver'>
                        <p>Create beautiful, usable interfaces to help shape the future of how the web looks.</p>
                    </div>
                    <div id="designAsk" className='mb-8 font-["Plus_Jakarta_Sans"] font-bold text-lg leading-[28px] text-hotPink'>
                        <p>Get Started</p>
                    </div>
                </div>
            </div>

            <div id="photoCard" className='flex flex-col items-start text-left mb-4 shadow-[0px_25px_50px_rgba(6,22,141,0.0442381)]'>
                <div id="photoImageContainer" className='max-h-[24px] bg-[#F1F4FD] w-full px-7 z-10'>
                    <div id='photoImage'>
                        <img src={Photo} alt="Photography card" />
                    </div>
                </div>
                <div id="photoTextContainer" className='pt-[56px] px-7 rounded-[10px] bg-white'>
                    <div id="photoTitle" className='mb-4 font-["Plus_Jakarta_Sans"] font-extrabold text-xl leading-[25px] text-naval'>
                        <h3>Photo</h3>
                    </div>
                    <div id="photoText" className='mb-6 font-["Plus_Jakarta_Sans"] font-medium text-base leading-[26px] text-silver'>
                        <p>Explore critical fundamentals like lighting, composition, and focus to capture exceptional photos.</p>
                    </div>
                    <div id="photoAsk" className='mb-8 font-["Plus_Jakarta_Sans"] font-bold text-lg leading-[28px] text-hotPink'>
                        <p>Get Started</p>
                    </div>
                </div>
            </div>

            <div id="cryptoCard" className='flex flex-col items-start text-left mb-4 shadow-[0px_25px_50px_rgba(6,22,141,0.0442381)]'>
                <div id="cryptoImageContainer" className='max-h-[24px] bg-offWhite w-full px-7 z-10'>
                    <div id='cryptoImage'>
                        <img src={Crypto} alt="Crypto card" />
                    </div>
                </div>
                <div id="cryptoTextContainer" className='pt-[56px] px-7 rounded-[10px] bg-white'>
                    <div id="cryptoTitle" className='mb-4 font-["Plus_Jakarta_Sans"] font-extrabold text-xl leading-[25px] text-naval'>
                        <h3>Crypto</h3>
                    </div>
                    <div id="cryptoText" className='mb-6 font-["Plus_Jakarta_Sans"] font-medium text-base leading-[26px] text-silver'>
                        <p>All you need to know to get started investing in crypto. Go from beginner to advanced with this 54 hour course.</p>
                    </div>
                    <div id="cryptoAsk" className='mb-8 font-["Plus_Jakarta_Sans"] font-bold text-lg leading-[28px] text-hotPink'>
                        <p>Get Started</p>
                    </div>
                </div>
            </div>

            <div id="businessCard" className='flex flex-col items-start text-left mb-4 shadow-[0px_25px_50px_rgba(6,22,141,0.0442381)]'>
                <div id="businessImageContainer" className='max-h-[24px] bg-offWhite w-full px-7 z-10'>
                    <div id='businessImage'>
                        <img src={Business} alt="Business card" />
                    </div>
                </div>
                <div id="businessTextContainer" className='pt-[56px] px-7 rounded-[10px] bg-white'>
                    <div id="businessTitle" className='mb-4 font-["Plus_Jakarta_Sans"] font-extrabold text-xl leading-[25px] text-naval'>
                        <h3>Business</h3>
                    </div>
                    <div id="businessText" className='mb-6 font-["Plus_Jakarta_Sans"] font-medium text-base leading-[26px] text-silver'>
                        <p>A step-by-step playbook to help you start, scale, and sustain your business without outside investment.</p>
                    </div>
                    <div id="businessAsk" className='mb-8 font-["Plus_Jakarta_Sans"] font-bold text-lg leading-[28px] text-hotPink'>
                        <p>Get Started</p>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default Bottom