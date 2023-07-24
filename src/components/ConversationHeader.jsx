import React from 'react'

export default function ConversationHeader({UserDetails,selectedConversation}) {
    return (
        <div className='ConversationDetails flex items-center h-32p gap-3 w-full mb-5'>
            <div className=' h-24 w-24 rounded-full overflow-hidden'>
         <img className='  shadow  max-w-full align-middle border-none w-full h-full object-cover object-center' src={UserDetails.img} alt="" />
          </div>
          <div>{UserDetails.name}</div>
        </div>
      )
}
