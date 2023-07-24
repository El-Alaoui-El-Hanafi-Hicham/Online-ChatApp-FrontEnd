import { createSlice } from "@reduxjs/toolkit";
import { isDate, sub } from "date-fns";
const initialState={
    // conversations:[
    //     {id:0,senderID:0,receiverID:1,message:"Hello",status:"view",date:sub(new Date(),{minutes:6}).toISOString()},
    //     {id:0,senderID:1,receiverID:0,message:"How Are You Doing",status:"view",date:sub(new Date(),{minutes:4}).toISOString()},
    //     {id:0,senderID:1,receiverID:0,message:"Hello",status:"view",date:sub(new Date(),{minutes:4}).toISOString()}

    // ],
    conversations: [
        {
          "id": 1,
          "participants": [
            {
              "id": 1,
              "name": "John"
            },
            {
              "id": 2,
              "name": "Jane"
            }
          ],
          "messages": [
            {
              "id": 1,
              "senderID": 1,
              "text": "Hi Jane! How are you?",
              "status":"viewed"
            },
            {
              "id": 2,
              "senderID": 2,
              "text": "Hi John! I'm doing great. How about you?",
              "status":"viewed"
            },
            {
              "id": 3,
              "senderID": 1,
              "text": "Ok See You Tonight",
              "status":"sent"
            }
          ]
        },
        {
          "id": 2,
          "participants": [
            {
              "id": 1,
              "name": "John"
            },
            {
              "id": 3,
              "name": "Bob"
            }
          ],
          "messages": [
            {
              "id": 1,
              "senderID": 1,
              "text": "Hey Bob! What's up?",
              "status":"viewed"
            },
            {
              "id": 2,
              "senderID": 3,
              "text": "Hey John! Not much, just chilling.",
              "status":"viewed"
            },
            {
              "id": 3,
              "senderID": 1,
              "text": "Cool! Let's catch up sometime.",
              "status":"viewed"
            },
            {
              "id": 4,
              "senderID": 3,
              "text": "Cool! Let's catch up sometime.",
              "status":"viewed"
            },
            {
              "id": 55,
              "senderID": 1,
              "text": "Cool! Let's catch up sometime.",
              "status":"viewed"
            }
          ]
        }
      ],
    SelectedConversation:null
}
const ConversationSlice=createSlice({
    name:"conversations",
    initialState,
    reducers:{
ChooseConversation(state,action){
    state.SelectedConversation=action.payload
},
addMessage(state,action){
  const { ConversationId, MessageText, loggedUser } = action.payload;
  const conversation = state.conversations.find(conv => conv.id === ConversationId);


  if (conversation) {
    conversation.messages.push({
      id:conversation.length+1,
      text: MessageText,
      senderId: loggedUser,
      status:"sent"
      // Add any additional message properties here as needed
    });
  }
}
    }
})
export const {ChooseConversation,addMessage} = ConversationSlice.actions
export default ConversationSlice.reducer;