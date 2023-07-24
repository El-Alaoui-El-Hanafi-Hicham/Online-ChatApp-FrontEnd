import React, { useEffect } from 'react'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SideBar from './components/sideBar'
import ConversationDetails from './components/ConversationDetails'
import { Divider } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { AddUser } from './components/features/Users/UserSlice'

function App() {
  const [count, setCount] = useState(0)
const dispatch = useDispatch();
useEffect(() => {
dispatch(AddUser);
}, [])
  return (
    <div className='Main'>
     <SideBar />
     <Divider orientation='vertical' variant='fullWidth'/>
     <ConversationDetails />
    </div>
  )
}

export default App
