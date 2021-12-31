import React from "react";

export default function SuggestedAccount({ userImage, username, displayName }) {
  return (
    <div className="flex items-center py-2 cursor-pointer hover:bg-gray-100  rounded-md">
      <div className="h-10 w-10 rounded-full border-[1px solid red]">
        <img src={userImage} alt="" />
      </div>
      <div className="ml-2">
        <h1>{username}</h1>
        <p className="text-xs text-gray-500">{displayName}</p>
      </div>
    </div>
  );
}
