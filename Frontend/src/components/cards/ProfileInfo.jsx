import React from 'react'
import { getInitials } from '../../utils/helper'

const ProfileInfo = ({OnLogout}) =>{
  return (
    <div className='flex items-center gap-3'>
        <div className='w-12 h-12 flex items-center justify-center rounded-full text-slate-950 font-medium bg-slate-100'>
           {getInitials("Muskan Tiwari")} 
        </div>
        <div>
            <p className='text-sm font-medium'>MUSKAN</p>
        </div>
        <button className='text-sm bg-red-500 p-1 rounded-md text-white hover:opacity-80' onClick={OnLogout}>Logout</button>
    </div>
  )
}

export default ProfileInfo