import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar';
import MessageContainer from '../../components/messages/MessageContainer';

const Home = () => {
  return (
    <div className='flex sm:h-[450px] md:h-[100vh] lg:h-[100vh] rounded-lg overflow-hidden  bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-0'>
        <Sidebar></Sidebar>
        <MessageContainer/>

      
    </div>
  )
}

export default Home;
