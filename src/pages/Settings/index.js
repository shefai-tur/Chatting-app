import React from 'react'
import Search from '../../componets/Search'
import Sidbar from '../../componets/Sidbar'

const Settings = () => {
  return (
     <div className='bg-page'>
        <div className="flex p-6 gap-x-11	">
        <div className="w-[186px]">
            <Sidbar active="stng"/>
        </div>
        <div className="w-[1553px]">
         <Search/>
        </div>
        </div>
       
    </div>
  )
}

export default Settings