import React, { useEffect } from 'react'
import Messages from './Messages'
import MessageInput from './MessageInput'
import { TiMessages } from "react-icons/ti"
import useConversation from '../../zustand/useConversation'
import { useAuthContext } from '../../context/AuthContext'
import { IoArrowBackCircleSharp } from "react-icons/io5";
import { twMerge } from "tailwind-merge";
import { cn } from '../../utils/cn'
const MessageContainer = (props) => {

  const {selectedConversation, setSelectedConversation} = useConversation()
  useEffect(()=>{
    // unmount handler
    return ()=> setSelectedConversation(null)
  },[setSelectedConversation])

  return (
    <div {...props} className={cn('w-full h-screen flex flex-col', props.className, selectedConversation && "sm:flex overflow-auto ")}>
      {!selectedConversation ? 
        <NoChatSelected/>: 
        <>
        <span
        onClick={()=>{
          setSelectedConversation(!selectedConversation)
        }}
        className={cn('hidden text-white  m-2 border border-white rounded-full w-14 h-8 transition-all duration-200 hover:text-black cursor-pointer hover:border-black', selectedConversation && "sm:flex justify-center items-center" )}>&#8676;</span>
        <div className='bg-slate-500 px-4 py-2 mb-2'>
            <span className='label-text'>To : </span>
            <span className='text-gray-900 font-bold'>{selectedConversation.fullName}</span>
        </div>
        <Messages/>
        <MessageInput/>
        </>
        }
    </div>
  )
}
export default MessageContainer;
const NoChatSelected = () => {
  const { authUser } = useAuthContext();

  return (
    <div className="flex items-center justify-center w-full h-full">
        <div className="px-4 text-center sm:text-lg md: text-xl text-gray-200 font-semibold flex flex-col items-center gap-2">
            <p>Welcom {authUser.fullName} Ⓜ️</p>
            <p>Selecet a chat to start messaging</p>
            <TiMessages className="text-3xl md:text-6xl text-center" />
        </div>
      
    </div>
  )
}
