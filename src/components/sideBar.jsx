import React from 'react'
import Conversation from './Conversation'
import { Divider } from '@mui/material'
import { useSelector } from 'react-redux'

export default function sideBar() {
  const conversations =useSelector(store=>store.ConversationsStore.conversations);
  const users =useSelector(store=>store.usersStore.users);
  const loggedUser =useSelector(store=>store.usersStore.loggedUser);
  const LogedInUserConversations =conversations.filter(conversation=>conversation.participants.find(part=>part.id===loggedUser))
  const usersChatedWithTheLoggedOne=LogedInUserConversations.map(conv=>conv.participants.find(par=>par.id!==loggedUser && par.id ))
  const usersSet=new Set();
  usersChatedWithTheLoggedOne.forEach(ChatUser => {
    usersSet.add(users.find(user=>user.id===ChatUser.id))
  });
  const generateConversations = () => {
    const conversationComponents = Array.from(usersSet).map(user => (
      
      <Conversation key={user.id} {...user} />
    ));
    return conversationComponents;
  };
  
  return (
<div className="sidenav">
{generateConversations()}

</div>  )
}
