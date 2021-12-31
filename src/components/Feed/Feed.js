import { MusicNoteIcon } from "@heroicons/react/solid";
import { HeartIcon } from "@heroicons/react/outline";
import { ChatIcon, ReplyIcon } from "@heroicons/react/solid";

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
  return (
    <section className="p-2">
      <header>
        <div className=" flex justify-between">
          <section className="flex items-center justify-start py-2 ">
            <div className="h-10 w-10 rounded-full border-[1px solid red]">
              <img src={userImage} alt="" />
            </div>
            <div className=" ml-2">
              <h1 className="cursor-pointer hover:underline">
                {username}{" "}
                <span className="text-xs text-gray-500">{displayName}</span>
              </h1>

              <p className="text-sm font-bold mt-2 cursor-pointer hover:underline text-gray-500 flex items-center ">
                <MusicNoteIcon className="h-4 w-4 mr-1 text-black  " />
                {postSong}
              </p>
            </div>
          </section>
          <section className="flex">
            <button className="border border-red-500 text-[red] h-10  px-4  rounded-sm">
              Follow
            </button>
          </section>
        </div>
      </header>
      <main className="p-2 flex">
        <section className=" ml-10 h-[76vh] w-[18rem] rounded-lg">
          <video className="w-full h-full rounded-lg object-fill" controls>
            <source src={postVideo} type="video/mp4" />
            <source src={postVideo} type="video/ogg" />
            Your browser does not support HTML video.
          </video>
        </section>
        <section className=" ml-3 flex items-end  justify-center">
          <div className="mb-5">
            <span className="grid place-items-center">
              <div className=" h-10  w-10 rounded-full p-1 bg-gray-200 ">
                <HeartIcon className=" h-full w-full   text-[red]  " />
              </div>
              <p className="text-sm text-gray-500">{postLikes}</p>
            </span>
            <span className="grid place-items-center">
              <div className=" h-10  w-10 rounded-full p-1 bg-gray-200 ">
                <ChatIcon className=" h-full w-full   text-black  " />
              </div>
              <p className="text-sm text-gray-500">{postComments}</p>
            </span>
            <span className="grid place-items-center">
              <div className=" h-10  w-10 rounded-full p-1 bg-gray-200 ">
                <ReplyIcon className=" h-full w-full   text-black  " />
              </div>
              <p className="text-sm text-gray-500">{postShares}</p>
            </span>
          </div>
        </section>
      </main>
    </section>
  );
}
