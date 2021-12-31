import { MusicNoteIcon } from "@heroicons/react/solid";

export default function Feed({
  userImage,
  displayName,
  username,
  postSong,
  postVideo,
  postLikes,
  postComments,
  postRetweets,
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
        <div></div>
        <div></div>
      </header>
      <main></main>
    </section>
  );
}
