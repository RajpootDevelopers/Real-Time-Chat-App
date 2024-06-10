import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar';
import MessageContainer from '../../components/messages/MessageContainer';
import { cn } from '../../utils/cn';

const Home = () => {
  return (
    <div className={'flex rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-0'}>
        <Sidebar className="sm:w-screen"></Sidebar>
        <MessageContainer className="sm:hidden"/>
    </div>
  )
}
export default Home;