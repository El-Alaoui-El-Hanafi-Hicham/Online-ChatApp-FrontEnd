import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addMessage } from './features/Conversations/ConversationsSlice'

function ConversationInput() {
    const dispatch=useDispatch()
    const MessageInput= useRef()
  const conversations =useSelector(store=>store.ConversationsStore.conversations);
const {users,loggedUser}=useSelector(store=>store.usersStore)
const ConversationId=useSelector(store => store.ConversationsStore).SelectedConversation
const sendMessage = () =>{
    const messageData= {
        ConversationId,
        MessageText:MessageInput.current.value,
        loggedUser 
    }
    dispatch(addMessage(messageData))
}
  return (
    <div className='ConversationInput'>
        <input type='text' ref={MessageInput}/> 
    <button onClick={sendMessage}>Send </button>
    </div>
  )
}

export default ConversationInput