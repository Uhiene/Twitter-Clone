import React from "react";
import { FaHashtag, FaTwitter } from "react-icons/fa";
import { BiHomeCircle } from "react-icons/bi";
import { BsPeople, BsBell, BsPerson, BsBookmark } from "react-icons/bs";
import { FiMail } from "react-icons/fi";
import { CiCircleMore } from "react-icons/ci";
import { MdMoreHoriz } from "react-icons/md";
import avatar from "../assets/899.jpg";
import { TbFeather } from "react-icons/tb";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <div className="py-5 h-screen w-20 sm:w-1/4">
      <Bar />
      <Profile />
    </div>
  );
};

const Bar = () => {
  return (
    <div className="font-bold text-xl px-5 sm:px-10 border-r border-slate-200 h-5/6 space-y-6 mb-36">
      <FaTwitter className="text-blue-500 text-3xl" />
      <Link to={"/"} className="flex space-x-3 text-gray-800 font-medium">
        <BiHomeCircle className="text-3xl" />
        <p className="hidden md:flex"> Home</p>
      </Link>
      <Link to={"/explore"}  className="flex space-x-3 text-gray-800 font-medium">
        <FaHashtag className=" text-3xl" />
        <p className="hidden md:flex">Explore</p>
      </Link>
      <div className="flex space-x-3 text-gray-800 font-medium">
        <BsPeople className=" text-3xl" />
        <p className="hidden md:flex">Communities</p>
      </div>
      <div className="flex space-x-3 text-gray-800 font-medium">
        <BsBell className=" text-3xl" />
        <p className="hidden md:flex">Notifications</p>
      </div>
      <div className="flex space-x-3 text-gray-800 font-medium">
        <FiMail className=" text-3xl" />
        <p className="hidden md:flex">Messages</p>
      </div>
      <div className="flex space-x-3 text-gray-800 font-medium">
        <BsBookmark className=" text-3xl" />
        <p className="hidden md:flex">Bookmarks</p>
      </div>
      <div className="flex space-x-3 text-gray-800 font-medium">
        <BsPerson className=" text-3xl" />
        <p className="hidden md:flex">Profile</p>
      </div>
      <div className="flex space-x-3 text-gray-800 font-medium">
        <CiCircleMore className=" text-3xl" />
        <p className="hidden md:flex">More</p>
      </div>
      <Button className=" text-3xl" />
    </div>
  );
};

const Button = () => {
  return (
    <div>
      <div className="bg-blue-500 flex items-center justify-center text-3xl w-10 h-10 text-white rounded-full md:hidden" >
        <TbFeather />
      </div>
      <button className="px-5 sm:px-10 mb-20 p-4 bg-blue-500 text-white rounded-full hidden md:flex">
        Tweet
      </button>
      
    </div>
  );
};
const Profile = () => {
  return (
    <div className="flex jusstify-betwee">
      <div className="px-5 sm:px-10 flex space-x-2">
        <img src={avatar} className="w-16 rounded-full" />
        <div className="hidden md:block">
          <h2 className="font-bold text-md">Code_Queen</h2>
          <p className="text-slate-400">@Chenemi_U</p>
        </div>
      </div>
      <MdMoreHoriz className="text-gray-500 font-medium text-2xl hidden md:flex" />
    </div>
  );
};

export default SideBar;
