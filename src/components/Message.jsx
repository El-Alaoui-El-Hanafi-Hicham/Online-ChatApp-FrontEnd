import { faCheckDouble, faEnvelopeCircleCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { addMessage } from './features/Conversations/ConversationsSlice'
export default function Message({id,senderID,text,status}) {
    const dispatch= useDispatch();
    dispatch(addMessage)
    const user = useSelector(store=>store.usersStore.users).find(user=>user.id==senderID)
    const LoggedUser = useSelector(store=>store.usersStore.loggedUser)
    
   if(senderID===LoggedUser){
       return (
        <div className="messageContainer Logged relative">
         <div className='message '>{text}</div>
<div className='messageStaus absolute right-2 bottom-1'>
{
status=="viewed" && <FontAwesomeIcon icon={faCheckDouble}/>
}
{
     status==="sent"  && <FontAwesomeIcon icon={faEnvelopeCircleCheck} />
}

</div>
         </div>
       )

   }
   return (
    <div className="messageContainer Other">
    <div className='message '>{text}</div>
    </div>

  )
}
