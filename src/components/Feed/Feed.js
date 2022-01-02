import { MusicNoteIcon } from "@heroicons/react/solid";
import { HeartIcon } from "@heroicons/react/outline";
import {
  ChatIcon,
  ReplyIcon,
  HeartIcon as HeartIcon2,
} from "@heroicons/react/solid";
import Ticker from "react-ticker";
import React, { useState } from "react";

export default function Feed({
  userImage,
  displayName,
  username,
  postSong,
  postVideo,
  postLikes,
  postComments,
  postShares,
}) {
  const [likes, setLikes] = useState(false);
  const [comments, setComments] = useState(false);
  const [shares, setShares] = useState(false);

  return (
    <section className=" border-b">
      <header>
        <div className=" flex justify-between">
          <section className="flex  items-center justify-start py-2 flex-1 ">
            <div className="h-10 w-10 bg-black rounded-full border-[1px solid red]">
              <img src={userImage} alt="" />
            </div>
            <div className=" ml-2 w-3/4 lg:w-1/2  ">
              <h1 className="cursor-pointer hover:underline line-clamp-1 ">
                {username}{" "}
                <span className="text-xs text-gray-500">{displayName}</span>
                <br />
              </h1>
              <p className="text-xs text-gray-500 my-1 line-clamp-1">
                another TikTok #dance ! #flipbook
              </p>
              <div className="flex w-full items-center ">
                <MusicNoteIcon className=" h-4 w-4 mr-1 text-black  " />
                <div className="flex-1">
                  <Ticker mode="smooth">
                    {({ index }) => (
                      <>
                        <h1 className="line-clamp-1">{postSong}</h1>
                      </>
                    )}
                  </Ticker>
                </div>
              </div>
            </div>
          </section>
          <section className="flex">
            <button className="border border-red-500 text-[red] h-8 sm:h-10 px-2 sm:px-4  rounded-full sm:rounded-sm">
              Follow
            </button>
          </section>
        </div>
      </header>
      <main className="p-2 flex">
        <section className=" ml-10 h-[75vh] w-[18rem] rounded-lg">
          <video loop className="w-full h-full rounded-lg object-fill" controls>
            <source src={postVideo} type="video/mp4" />
            <source src={postVideo} type="video/ogg" />
            Your browser does not support HTML video.
          </video>
        </section>
        <section className=" ml-3 flex items-end  justify-center">
          <div className="mb-5">
            <span className="grid place-items-center">
              {likes ? (
                <div
                  onClick={(e) => setLikes(!likes)}
                  className=" cursor-pointer h-10  w-10 rounded-full p-1 bg-gray-200 hover:bg-gray-300 "
                >
                  <HeartIcon2 className=" h-full w-full   text-[red]  " />
                </div>
              ) : (
                <div
                  onClick={(e) => setLikes(!likes)}
                  className=" cursor-pointer h-10  w-10 rounded-full p-1 bg-gray-200 hover:bg-gray-300"
                >
                  <HeartIcon className=" h-full w-full   text-[red]  " />
                </div>
              )}

              <p className="text-sm text-gray-500">
                {likes ? postLikes + 1 : postLikes}
              </p>
            </span>
            <span className="grid place-items-center">
              <div
                onClick={(e) => setComments(!comments)}
                className=" cursor-pointer h-10  w-10 rounded-full p-1 bg-gray-200 hover:bg-gray-300"
              >
                <ChatIcon
                  className={` h-full w-full  ${
                    comments ? "text-blue-800" : "text-black"
                  }   `}
                />
              </div>
              <p className="text-sm text-gray-500">
                {comments ? postComments + 1 : postComments}
              </p>
            </span>
            <span className="grid place-items-center ">
              <div
                onClick={(e) => setShares(!shares)}
                className=" cursor-pointer h-10  w-10 rounded-full p-1 bg-gray-200 hover:bg-gray-300 "
              >
                <ReplyIcon
                  className={` h-full w-full  ${
                    shares ? "text-green-800" : "text-black"
                  }   `}
                />
              </div>
              <p className="text-sm text-gray-500">
                {shares ? postShares + 1 : postShares}
              </p>
            </span>
          </div>
        </section>
      </main>
    </section>
  );
}
