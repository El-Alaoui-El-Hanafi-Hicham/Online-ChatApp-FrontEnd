import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ChooseConversation } from './features/Conversations/ConversationsSlice'

export default function Conversation({id,name,img}) {
  const dispatch=useDispatch()
  const conversations =useSelector(store=>store.ConversationsStore.conversations);
  const loggedUser =useSelector(store=>store.usersStore.loggedUser);

  let ChoosedConversation=conversations.filter(conv=>conv.participants.map(par=>par.id===id ))
  ChoosedConversation=ChoosedConversation.find(conv=>conv.participants.find(par=>par.id===id));
  return (
    <div className='Conversation flex gap-2 px-5 py-4 rounded-xl cursor-pointer' onClick={()=>dispatch(ChooseConversation(ChoosedConversation.id))}>
         <div className=' h-24 w-24 rounded-full overflow-hidden'>
         <img className='  shadow  max-w-full align-middle border-none h-full w-full object-cover object-center' src={img} alt="" />
         </div>
         <div className='flex flex-col gap-2 w-8/12'>
         <strong className='uppercase text-lg'>{name}</strong>
         <p>Hello Hicham, dont forget ...</p>
         </div>
         <div>
            2:30
         </div>
    </div>
  )
}
