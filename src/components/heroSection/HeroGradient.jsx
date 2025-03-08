import React from 'react'

const HeroGradient = () => {
  return (
    <div>
        <div className='shadow-cyanMediumShadow absolute top-0 right-0 -z-10 animate-pulse'></div>
        <div className='shadow-orangeMediumShadow absolute top-0 left-0 -z-10 animate-pulse'></div>
        <div className='shadow-cyanMediumShadow absolute bottom-0 left-0'></div>
    </div>
  )
}

export default HeroGradient