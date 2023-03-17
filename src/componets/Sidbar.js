import React from 'react'
import {AiFillHome} from "react-icons/ai"
import {FiMessageSquare,FiLogOut} from "react-icons/fi"
import {IoMdNotifications,IoMdSettings} from "react-icons/io"
const Sidbar = () => {
  return (
    <div className='bg-primary w-full rounded-xl'>
        <div>
            <image>
                <img className='px-10 pt-8 rounded-full ' src="images/profileimg.png" alt="profileimg" loading='lazy'/>
            </image>
            <div className='px-16 pt-20'>
           <AiFillHome className='text-5xl text-white'/>
            </div>
            <div className='px-16 pt-20'>
           <FiMessageSquare className='text-5xl text-white '/>
            </div>
            <div className='px-16 pt-20'>
           <IoMdNotifications className='text-5xl text-white '/>
            </div>
            <div className='px-16 pt-20'>
           <IoMdSettings className='text-5xl text-white '/>
            </div>
            <div className='px-16 pt-40 pb-12'>
           <FiLogOut className='text-5xl text-white '/>
            </div>
        </div>
    </div>
  )
}

export default Sidbar