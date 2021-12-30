import React from "react";
import TikTokLogo from "../../images/TikTok-Logo.svg";
import { DotsVerticalIcon } from "@heroicons/react/solid";
import { SearchIcon } from "@heroicons/react/outline";

export default function Navbar() {
  return (
    <nav className=" w-full border-b-2  sticky top-0 bg-white">
      <header className="grid grid-cols-3 max-w-6xl mx-auto">
        <div className="col-span-1 flex items-center justify-start">
          <img className=" w-28 object-contain" src={TikTokLogo} alt="tiktok" />
        </div>
        <div className="col-span-1 flex items-center justify-start">
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
        <div className="col-span-1 flex items-center justify-end">
          <button className=" font-bold hover:underline  p-2 ">Upload</button>
          <button className="mx-3 bg-[red] text-white font-bold py-2 px-6 rounded-md shadow-md hover:bg-red-500">
            Log In
          </button>
          <DotsVerticalIcon className="h-5 w-5 cursor-pointer text-black " />
        </div>
      </header>
    </nav>
  );
}
