import React from 'react'
import {AiOutlineSearch }from "react-icons/ai"
import {BsThreeDotsVertical }from "react-icons/bs"
const Search = () => {
  return (
    <div className='relative'>
        <input className='w-full py-4	pl-16 rounded-2xl outline-none' type="text" placeholder='Search' />
        <AiOutlineSearch className='absolute top-5 left-6 text-xl'/>
        <BsThreeDotsVertical className='absolute top-5 right-6 text-xl'/>
    </div>
  )
}

export default Search