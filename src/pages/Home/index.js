import React from 'react'
import Blockedusers from '../../componets/Blockedusers'
import Friendrequest from '../../componets/Friendrequest'
import Friends from '../../componets/Friends'
import Groupsrequest from '../../componets/Groupsrequest'
import Mygroups from '../../componets/Mygroups'
import Search from '../../componets/Search'
import Sidbar from '../../componets/Sidbar'
import Userlist from '../../componets/Userlist'

const Home = () => {
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
        <div className="w-[490px]">
          <Friends/>
          <Mygroups/>
        </div>
        <div className="w-[490px]">
          <Userlist/>
          <Blockedusers/>
        </div>
        </div>
       
    </div>
  )
}

export default Home