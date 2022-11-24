import React from 'react'
import avatar from "../assets/princess.jpg";
import { BsEmojiSmile, BsStar } from "react-icons/bs";
import { BiMessageRounded } from "react-icons/bi";
import { AiOutlineFileGif, AiOutlineHeart, AiOutlinePicture, AiOutlineRetweet } from "react-icons/ai";
import { CiBoxList } from "react-icons/ci";
import { TbCalendarTime } from "react-icons/tb";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { MdMoreHoriz, MdSaveAlt } from "react-icons/md";
import { useGlobalState } from "../store";

const MainPage = () => {
  const [user] = useGlobalState("user");
  return (
    <div className="border-r border-slate-200 w-2/4">
      <Header />
      <Post />
      <Tweets user={user} />
    </div>
  );
};

const Header = () => {
  return (
    <div className="flex justify-between font-bold text-xl px-4">
      <p>Home</p>
      <BsStar />
    </div>
  );
}

const Post = () => {
  return (
    <div className="border-b border-slate-200 flex space-x-4 p-4">
      <div>
        <img src={avatar} alt="" className="w-16 h-14 rounded-full" />
      </div>
      <div className='w-full'>
        <p className="text-xl text-slate-400 mt-5 font-base">Whats Happeneing?</p>
        <div className="flex justify-between w-full pt-5 pb-5">
          <div className="flex w-1/2 justify-between">
            <AiOutlinePicture className='text-2xl text-blue-500' />
            <AiOutlineFileGif className='text-2xl text-blue-500' />
            <CiBoxList className='text-2xl text-blue-500' />
            <BsEmojiSmile className='text-2xl text-blue-500' />
            <TbCalendarTime className='text-2xl text-blue-500' />
            <HiOutlineLocationMarker className='text-2xl text-blue-500' />
          </div>
          <button className="px-8 font-bold p-2 bg-blue-500 text-white rounded-full">
            Tweet
          </button>
        </div>
      </div>
    </div>
  );
};

const Tweets = ({ user }) => {
  return (
    <div className="">
      {user.map((p, i) => (
        <div className="flex space-x-4 border-b border-slate-200 p-4" key={i}>
          <div>
            <img src={p.image} alt="" className="w-14 rounded-full" />
          </div>
          <div className="text-slate-700">
            <div className="flex justify-between">
              <div className="flex">
                <h1 className="font-bold">{p.userName}</h1>
                <p className="text-slate-500 "> {p.userAccount} {p.time}</p>
              </div>
              <MdMoreHoriz className="text-2xl" />
            </div>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor,
              voluptatibus.
            </p>
            <div className="flex justify-between">
              <div className="flex space-x-3 w-1/4 items-center">
                <BiMessageRounded className="text-xl " />
                <p>{p.comments}</p>
              </div>
              <div className="flex space-x-3 w-1/4 items-center">
                <AiOutlineRetweet className="text-xl" />
                <p>{p.retweets}</p>
              </div>
              <div className="flex space-x-3 w-1/4 items-center">
                <AiOutlineHeart className="text-xl" />
                <p>{p.likes}</p>
              </div>
              <div className="flex space-x-3 w-1/4 items-center">
                <MdSaveAlt className="text-xl" />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MainPage