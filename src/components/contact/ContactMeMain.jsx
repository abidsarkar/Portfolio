import React from 'react'
import ContactMe_left from './ContactMe_left'
import ContactMeRight from './ContactMeRight'

const ContactMeMain = () => {
  return (
    <div id='contact' className='py-16 px-6 bg-[#333] text-white'>
       <h2 className="text-center text-4xl sm:text-6xl  mb-10 font-semibold font-poppins bg-clip-text text-transparent radial-gradient-text">
        Contact Me
      </h2>
      <div className='flex justify-around sm:flex-row flex-col items-center gap-10'>
        <ContactMe_left/>
        <ContactMeRight/>
      </div>
    </div>
  )
}

export default ContactMeMain