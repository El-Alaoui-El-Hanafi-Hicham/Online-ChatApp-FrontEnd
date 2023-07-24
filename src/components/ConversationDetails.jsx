import { Button } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import ConversationHeader from './ConversationHeader'
import Message from './Message'
import ConversationInput from './ConversationInput'



export default function ConversationDetails() {
  const {  conversations } = useSelector(store => store.ConversationsStore)
const {users,loggedUser}=useSelector(store=>store.usersStore)
const ConversationId=useSelector(store => store.ConversationsStore).SelectedConversation
  if (ConversationId) {
    const selectedConversation = conversations.find(conversation => conversation.id === ConversationId)
    const {id} =selectedConversation.participants.find(par=>par.id!=loggedUser)
    const UserDetails=users.find(user=> {
      return user.id==id;
    })
    
    return (
    <div className='flex flex-col position-relative overflow-hidden ConversationDetails'>
    <ConversationHeader selectedConversation={selectedConversation} UserDetails={UserDetails}/>
    <div >
      {selectedConversation.messages.map((message,index)=>
      
        <Message key={index} {...message}/>
        )}
    </div>
    <ConversationInput/>
    </div>
  )
}

  return (
<div className='flex flex-col items-center justify-start '>
    <h1> Welcome to the best Chat App Ever</h1>
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGsfeqSIVF8uixxPhiC49nqk96qVjqAZi3sA&usqp=CAU" alt="" />    
</div>
  );
}
