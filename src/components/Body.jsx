import React from 'react'
import Top from './body/Top'
import Bottom from './body/Bottom'

function Body() {
  return (
    <div id='bodyContentWrapper'>
        <div id='topWrapper' className='mb-[66px] px-4'>
            <Top />
        </div>
        <div id='bottomWrapper' className='bg-gradient-to-b from-white from-0% to-offWhite to-100% px-4'>
            <Bottom />
        </div>
    </div>
  )
}

export default Body