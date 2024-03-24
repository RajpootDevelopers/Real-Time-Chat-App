import { BsSend } from "react-icons/bs";
import React, { useState } from 'react'
import useSendMessage from "../../hooks/useSendMessage.js"

const MessageInput = () => {
  const [ message, setMessage ] = useState("");
  const { loading, sendMessages} = useSendMessage();
  
  async function handleSubmit (e){
    e.preventDefault();
    if(!message) return;
    if(message.trim() === "") return;
    await sendMessages(message);
    setMessage("")
  }

  return (
    <form className="px-4 my-3" onSubmit={handleSubmit}>
        <div className="w-full relative">
            <input type="text"
            className="border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 text-white"
            placeholder="Send a message"
            value={message}
            onChange={(e)=>setMessage(e.target.value)}
            />
            {/* <input type="file" className="absolute inset-y-2 inset-x-2 opacity-5" placeholder="img"/> */}
            <button type="submit" className="absolute inset-y-0 end-1 flex items-center pe-3 ">
              { loading ? (
                <div className="loading loading-spinner"></div>
              ) : (
                <BsSend />
              )
            }  
            </button>
        </div>
      
    </form>
  )
}

export default MessageInput;


