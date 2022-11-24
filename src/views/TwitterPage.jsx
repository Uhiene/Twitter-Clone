import React from 'react'
import { BsFiles } from 'react-icons/bs'
import { FaMinus, FaTimes } from 'react-icons/fa'
import { MdMoreHoriz } from 'react-icons/md'
import AsidePage from '../components/AsidePage'
import MainPage from '../components/MainPage'
import SideBar from '../components/SideBar'

const TwitterPage = () => {
  return (
    <div>
      <div className="p-5 flex justify-between">
        <div>Twitter-Home/Twitter</div>
        <div className="flex space-x-5">
          <MdMoreHoriz />
          <FaTimes />
          <BsFiles />
          <FaMinus />
        </div>
      </div>

      <div className="flex justify-between">
        <SideBar />
        <MainPage className="border-2 border-black" />
        <AsidePage className="border-2 border-black" />
      </div>
    </div>
  );
}

export default TwitterPage