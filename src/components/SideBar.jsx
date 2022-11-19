import React from "react";
import { FaHashtag, FaTwitter } from "react-icons/fa";
import { BiHomeCircle } from "react-icons/bi";
import { BsPeopleFill, BsBell, BsPersonFill, BsBookmarkFill } from "react-icons/bs";
import { FiMail } from "react-icons/fi";
import { CiCircleMore } from "react-icons/ci";

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
      <div className="flex space-x-3">
        <BiHomeCircle className="text-black text-3xl" />
        <p> Home</p>
      </div>
      <div className="flex space-x-3">
        <FaHashtag className=" text-3xl" />
        <p>Explore</p>
      </div>
      <div className="flex space-x-3">
        <BsPeopleFill className=" text-3xl" />
        <p>Communities</p>
      </div>
      <div className="flex space-x-3">
        <BsBell className=" text-3xl" />
        <p>Notifications</p>
      </div>
      <div className="flex space-x-3">
        <FiMail className=" text-3xl" />
        <p>Messages</p>
      </div>
      <div className="flex space-x-3">
        <BsBookmarkFill className=" text-3xl" />
        <p>Bookmarks</p>
      </div>
      <div className="flex space-x-3">
        <BsPersonFill className=" text-3xl" />
        <p>Profile</p>
      </div>
      <div className="flex space-x-3">
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
      <button className="px-8 p-2 bg-blue-500 text-white rounded-3xl">
        Tweet
      </button>
    </div>
  );
};
const Profile = () => {
  return (
    <div className="px-20 flex space-x-2">
      <img src="https://uhiene.github.io/images/ojo.jpeg" alt="" className="w-12 rounded-3xl" />
      <div>
        <h2 className="font-bold text-md">Code_Queen</h2>
        <p className="text-slate-400">@Chenemi_U</p>
      </div>
    </div>
  );
};

export default SideBar;
