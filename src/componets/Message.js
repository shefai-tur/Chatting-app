import React from 'react'
import Friendrequest from './Friendrequest'
import Groupsrequest from './Groupsrequest'
import Search from './Search'
import Sidbar from './Sidbar'

const Message = () => {
  return (
    <div className='bg-page'>
    <div className="flex p-6 gap-x-11	">
    <div className="w-[186px]">
        <Sidbar/>
    </div>
    <div className="w-[573px]">
     <Search/>
     <Groupsrequest/>
     <Friendrequest/>
    </div>
    <div className="w-[980px]">
     shefaitur rahman
    </div>
    </div>
   
</div>
  )
}

export default Message