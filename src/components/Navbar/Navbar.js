import React from "react";
import TikTokLogo from "../../images/TikTok-Logo.svg";
import { ChatAltIcon, CloudUploadIcon } from "@heroicons/react/solid";
import { PaperAirplaneIcon, SearchIcon } from "@heroicons/react/outline";

export default function Navbar() {
  return (
    <nav className=" w-full border-b-[1px]  h-[11vh] sticky top-0 bg-white z-50">
      <header className="grid grid-cols-2 sm:grid-cols-3 max-w-6xl mx-auto">
        <div className=" col-span-1 flex items-center justify-start">
          <img className=" w-28 object-contain" src={TikTokLogo} alt="tiktok" />
        </div>
        <div className="hidden sm:col-span-1 sm:flex items-center justify-start">
          <form className="flex w-full items-center justify-center rounded-full bg-gray-50 border hover:border hover:border-gray-300 ">
            <div className=" flex-1 ">
              <input
                placeholder="Search accounts and videos"
                type="text"
                className="p-2 w-full rounded-full bg-gray-50  outline-0 "
              />
            </div>
            <div className="border-l p-3 hover:bg-gray-200 rounded-r-full cursor-pointer">
              <SearchIcon className="h-5 w-5 text-gray-500 " />
            </div>
          </form>
        </div>
        <div className=" col-span-1 flex items-center justify-between ">
          {/* <button className=" font-bold hover:underline text-sm sm:text-base  p-2 ">
            Upload
          </button>
          <button className="sm:mx-3 text-sm sm:text-base flex flex-nowrap bg-[red] text-white font-bold py-2 px-3 sm:px-6 rounded-md shadow-md hover:bg-red-500">
            Log In
          </button> */}
          <div className="  sm:1/3 lg:w-1/2"></div>
          <CloudUploadIcon className="h-6 w-6 cursor-pointer text-black " />
          <PaperAirplaneIcon className="rotate-45 h-6 w-6 cursor-pointer text-black " />
          <ChatAltIcon className="h-6 w-6 cursor-pointer text-black " />
          <div className="h-10 w-10 mr-1 rounded-full">
            <img
              className="w-full h-full object-cover rounded-full cursor-pointer"
              src="https://cdn.pixabay.com/photo/2016/11/29/13/14/attractive-1869761__340.jpg"
              alt=""
            />
          </div>{" "}
        </div>
      </header>
    </nav>
  );
}
