import React from "react";

export default function SuggestedAccount({ userImage, username, displayName }) {
  return (
    <div className="flex items-center justify-center md:justify-start py-2 cursor-pointer hover:bg-gray-100  rounded-md">
      <div className="h-10 w-10 rounded-full ">
        <img src={userImage} alt="" />
      </div>
      <div className="hidden md:block ml-2">
        <h1>{username}</h1>
        <p className="text-xs text-gray-500">{displayName}</p>
      </div>
    </div>
  );
}
