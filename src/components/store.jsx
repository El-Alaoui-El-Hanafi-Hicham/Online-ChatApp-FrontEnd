import { configureStore } from "@reduxjs/toolkit";
import { createStoreHook } from "react-redux";
import {  applyMiddleware } from "redux";
import UserSlice from "./features/Users/UserSlice";
import ConversationsSlice from "./features/Conversations/ConversationsSlice";
export default configureStore({
    reducer: {
        usersStore:UserSlice,
    ConversationsStore:ConversationsSlice
    } //add reducers here
  })