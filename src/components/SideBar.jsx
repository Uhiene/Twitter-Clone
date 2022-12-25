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
    <div className="font-bold px-5 text-xl sm:px-10 space-y-6">
      <FaTwitter className="text-blue-500 text-2xl" />
      <Link to={"/"} className="flex items-center space-x-3 text-gray-800 font-medium">
        <BiHomeCircle className="text-2xl" />
        <p className="hidden md:flex"> Home</p>
      </Link>
      <Link to={"/explore"}  className="flex items-center space-x-3 text-gray-800 font-medium">
        <FaHashtag className=" text-2xl" />
        <p className="hidden md:flex">Explore</p>
      </Link>
      <Link to={"/communities"} className="flex items-center space-x-3 text-gray-800 font-medium">
        <BsPeople className=" text-2xl" />
        <p className="hidden md:flex">Communities</p>
      </Link>
      <Link to={"/notifications"} className="flex items-center space-x-3 text-gray-800 font-medium">
        <BsBell className=" text-2xl" />
        <p className="hidden md:flex">Notifications</p>
      </Link>
      <Link to={"/messages"} className="flex items-center space-x-3 text-gray-800 font-medium">
        <FiMail className=" text-2xl" />
        <p className="hidden md:flex">Messages</p>
      </Link>
      <Link to={"/bookmarks"} className="flex items-center space-x-3 text-gray-800 font-medium">
        <BsBookmark className=" text-2xl" />
        <p className="hidden md:flex">Bookmarks</p>
      </Link>
      <Link to={"/profile"} className="flex items-center space-x-3 text-gray-800 font-medium">
        <BsPerson className=" text-2xl" />
        <p className="hidden md:flex">Profile</p>
      </Link>
      <Link to={"/more"} className="flex items-center space-x-3 text-gray-800 font-medium">
        <CiCircleMore className=" text-2xl" />
        <p className="hidden md:flex">More</p>
      </Link>
      <Button className=" text-2xl" />
    </div>
  );
};

const Button = () => {
  return (
    <div>
      <div className="bg-blue-500 flex items-center justify-center text-3xl w-10 h-10 text-white rounded-full md:hidden" >
        <TbFeather />
      </div>
      <button className="px-5 sm:px-14 mb-20 p-2 bg-blue-500 text-white rounded-full hidden md:flex">
        Tweet
      </button>
    </div>
  );
};
const Profile = () => {
  return (
    <div className="flex justify-between w-3/4 mx-5">
      <div className="flex justify-end space-x-2">
        <img src={avatar} className="w-12 object-contain rounded-full" />
        <div className="hidden md:block">
          <h2 className="font-bold text-sm">Code_Queen</h2>
          <p className="text-slate-400 text-sm">@Chenemi_U</p>
        </div>
      </div>
      <MdMoreHoriz className="text-gray-500 font-medium text-2xl hidden md:flex" />
    </div>
  );
};

export default SideBar;
