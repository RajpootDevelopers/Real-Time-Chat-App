import React from 'react'
import Conversation from './Conversation'
import useGetConversations from '../../hooks/useGetConversations';
import { getRandomEmoji } from '../../utils/emojis.js';

const Conversations = () => {
	const { loading, conversations} = useGetConversations();

  return (
	<div className=' py-2 flex flex-col overflow-auto'>
		{
			conversations.map((conversation, idx)=>{	
				return <Conversation 
						key={conversation._id}
						conversation={conversation}
						emoji = {getRandomEmoji()}
						lastIdx = {idx === conversations.length - 1 }
						/>
			})
		}
		{loading ? <span className='loading loading-spinner mx-auto'/> : null}
	</div>
  )
}

export default Conversations
