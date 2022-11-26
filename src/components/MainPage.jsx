import React from "react";
import avatar from "../assets/899.jpg";
import { BsEmojiSmile, BsStar } from "react-icons/bs";
import {
  AiOutlineFileGif,
  AiOutlineHeart,
  AiOutlinePicture,
  AiOutlineRetweet,
} from "react-icons/ai";
import { BiMessageRounded } from "react-icons/bi";
import { CiBoxList } from "react-icons/ci";
import { TbCalendarTime } from "react-icons/tb";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { MdSaveAlt } from "react-icons/md";
import { useGlobalState } from "../store";

const MainPage = () => {
  const [user] = useGlobalState("user");
  return (
    <div className="border-r border-slate-200 w-3/5">
      <Header />
      <Post />
      <Tweets user={user} />
    </div>
  );
};

const Header = () => {
  return (
    <div className="flex justify-between font-bold text-gray-800 text-xl px-4">
      <p>Home</p>
      <BsStar />
    </div>
  );
};

const Post = () => {
  return (
    <div className="border-b border-slate-200 flex space-x-4 p-4">
      <div>
        <img src={avatar} alt="" className="w-16 rounded-full" />
      </div>
      <div className="w-full">
        <p className="text-xl text-gray-400 mt-5 font-base">
          Whats Happeneing?
        </p>
        <div className="flex justify-between w-full pt-5 pb-5">
          <div className="flex w-1/2 justify-between text-2xl text-blue-500 font-medium">
            <AiOutlinePicture />
            <AiOutlineFileGif />
            <CiBoxList />
            <BsEmojiSmile />
            <TbCalendarTime />
            <HiOutlineLocationMarker />
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
            <img src={p.image} alt="" className="w-16 rounded-full" />
          </div>
          <div>
            <div className="flex">
              <h1 className="font-bold text-gray-800">{p.userName} </h1>
              <p className="text-gray-400 ">
                {p.userAccount} {p.time}
              </p>
            </div>
            <p className="text-gray-600 text-md font-medium">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor,
              voluptatibus.
            </p>
            <div className="flex justify-between w-4/5 my-2 text-gray-600">
              <div className="flex items-center text-2xl space-x-3">
                <BiMessageRounded /> <p className="text-sm">{p.comments}</p>
              </div>
              <div className="flex items-center text-2xl space-x-3">
                <AiOutlineRetweet /> <p className="text-sm">{p.retweets}</p>
              </div>
              <div className="flex items-center text-2xl space-x-3">
                <AiOutlineHeart /> <p className="text-sm">{p.likes}</p>
              </div>
              <div className="flex items-center text-2xl space-x-3">
                <MdSaveAlt />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MainPage;
