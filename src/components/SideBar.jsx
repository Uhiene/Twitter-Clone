import React from "react";
import { FaHashtag, FaTwitter } from "react-icons/fa";
import { BiHomeCircle } from "react-icons/bi";
import { BsPeople, BsBell, BsPerson, BsBookmark } from "react-icons/bs";
import { FiMail } from "react-icons/fi";
import { CiCircleMore } from "react-icons/ci";
import { MdMoreHoriz } from "react-icons/md";
import avatar from "../assets/899.jpg";

const SideBar = () => {
  return (
    <div className="py-5 h-screen">
      <Bar />
      <Profile />
    </div>
  );
};

const Bar = () => {
  return (
    <div className="font-bold text-xl px-20 border-r border-slate-200 h-5/6 space-y-6">
      <FaTwitter className="text-blue-500 text-3xl" />
      <div className="flex space-x-3 text-gray-800 font-medium">
        <BiHomeCircle className="text-3xl" />
        <p> Home</p>
      </div>
      <div className="flex space-x-3 text-gray-800 font-medium">
        <FaHashtag className=" text-3xl" />
        <p>Explore</p>
      </div>
      <div className="flex space-x-3 text-gray-800 font-medium">
        <BsPeople className=" text-3xl" />
        <p>Communities</p>
      </div>
      <div className="flex space-x-3 text-gray-800 font-medium">
        <BsBell className=" text-3xl" />
        <p>Notifications</p>
      </div>
      <div className="flex space-x-3 text-gray-800 font-medium">
        <FiMail className=" text-3xl" />
        <p>Messages</p>
      </div>
      <div className="flex space-x-3 text-gray-800 font-medium">
        <BsBookmark className=" text-3xl" />
        <p>Bookmarks</p>
      </div>
      <div className="flex space-x-3 text-gray-800 font-medium">
        <BsPerson className=" text-3xl" />
        <p>Profile</p>
      </div>
      <div className="flex space-x-3 text-gray-800 font-medium">
        <CiCircleMore className=" text-3xl" />
        <p>More</p>
      </div>
      <Button className=" text-3xl" />
    </div>
  );
};

const Button = () => {
  return (
    <div>
      <button className="w-60 p-4 bg-blue-500 text-white rounded-full">
        Tweet
      </button>
    </div>
  );
};
const Profile = () => {
  return (
    <div className="flex jusstify-betwee">
      <div className="px-20 flex space-x-2">
        <img src={avatar} className="w-16 rounded-full" />
        <div>
          <h2 className="font-bold text-md">Code_Queen</h2>
          <p className="text-slate-400">@Chenemi_U</p>
        </div>
      </div>
      <MdMoreHoriz className="text-gray-500 font-medium text-2xl" />
    </div>
  );
};

export default SideBar;
