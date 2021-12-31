import { HomeIcon } from "@heroicons/react/solid";
import { UsersIcon, VideoCameraIcon } from "@heroicons/react/outline";
import SuggestedAccount from "../SuggestedAccount/SuggestedAccount";
import faker from "faker";
import { AvatarGenerator } from "random-avatar-generator";
import { SearchIcon } from "@heroicons/react/outline";
import { MusicNoteIcon } from "@heroicons/react/solid";

export default function Sidebar() {
  // generate random avatar
  const generator = new AvatarGenerator();

  return (
    <aside className="font-serif">
      <section className="border-b">
        <div className="flex items-center justify-start rounded-sm cursor-pointer py-3 text-[red] hover:bg-gray-100 ">
          {" "}
          <HomeIcon className="h-8 w-8 mr-2" /> <h1>For You</h1>{" "}
        </div>
        <div className="flex items-center justify-start rounded-sm cursor-pointer py-3 hover:bg-gray-100 ">
          {" "}
          <UsersIcon className="h-8 w-8 mr-2" /> <h1>Following</h1>{" "}
        </div>
        <div className="flex items-center justify-start rounded-sm cursor-pointer py-3 hover:bg-gray-100 ">
          {" "}
          <VideoCameraIcon className="h-8 w-8 mr-2" /> <h1>LIVE</h1>
        </div>
      </section>
      <br />
      <section className="border-b">
        <p className="my-2">Suggested accounts</p>
        <SuggestedAccount
          userImage={generator.generateRandomAvatar("mary ")}
          username={faker.name.findName()}
          displayName={faker.name.findName()}
        />
        <SuggestedAccount
          userImage={generator.generateRandomAvatar(" kisha")}
          username={faker.name.findName()}
          displayName={faker.name.findName()}
        />{" "}
        <SuggestedAccount
          userImage={generator.generateRandomAvatar("jonte")}
          username={faker.name.findName()}
          displayName={faker.name.findName()}
        />{" "}
        <SuggestedAccount
          userImage={generator.generateRandomAvatar("mumu")}
          username={faker.name.findName()}
          displayName={faker.name.findName()}
        />{" "}
        <SuggestedAccount
          userImage={generator.generateRandomAvatar("juju")}
          username={faker.name.findName()}
          displayName={faker.name.findName()}
        />
        <p className="cursor-pointer my-3 text-red-500 text-sm">See all</p>
      </section>
      <br />
      <section className="border-b min-h-[10vh]">
        <h1>Following accounts</h1>
        <p className="text-gray-500 text-sm my-2">
          Accounts you follow will appear here
        </p>
      </section>
      <h1 className="my-3">Discover</h1>
      <section className="flex flex-wrap border-b">
        <span className="cursor-pointer hover:bg-gray-100 px-2 py-1 h-8 m-2 flex items-center justify-center rounded-full border">
          # christmas2021
        </span>
        <span className="cursor-pointer hover:bg-gray-100 px-2 py-1 h-8 m-2 flex items-center justify-center rounded-full border">
          # Worldcup2022
        </span>
        <span className="cursor-pointer hover:bg-gray-100 px-2 py-1 h-8 m-2 flex items-center justify-center rounded-full border">
          <MusicNoteIcon className="h-4 w-4 mr-1 text-black  " />
          Conor ft puri{" "}
        </span>{" "}
        <span className="cursor-pointer hover:bg-gray-100 px-2 py-1 h-8 m-2 flex items-center justify-center rounded-full border">
          {" "}
          <MusicNoteIcon className="h-4 w-4 mr-1 text-black  " />
          99 pros, react isn't 1 ft @jonte
        </span>
        <span className="cursor-pointer hover:bg-gray-100 px-2 py-1 h-8 m-2 flex items-center justify-center rounded-full border">
          {" "}
          <MusicNoteIcon className="h-4 w-4 mr-1 text-black  " />
          Laxed (siren Beat) - jawsh
        </span>
        <span className="cursor-pointer hover:bg-gray-100 px-2 py-1 h-8 m-2 flex items-center justify-center rounded-full border">
          <SearchIcon className="h-5 w-5 text-gray-500 " />
          Wanted gaming
        </span>{" "}
        <span className="cursor-pointer hover:bg-gray-100 px-2 py-1 h-8 m-2 flex items-center justify-center rounded-full border">
          {" "}
          <SearchIcon className="h-5 w-5 text-gray-500 " />
          global socce
        </span>
        <span className="cursor-pointer hover:bg-gray-100 px-2 py-1 h-8 m-2 flex items-center justify-center rounded-full border">
          {" "}
          <SearchIcon className="h-5 w-5 text-gray-500 " />
          football
        </span>
        <span className="cursor-pointer hover:bg-gray-100 px-2 py-1 h-8 m-2 flex items-center justify-center rounded-full border">
          #worldcup2022
        </span>
      </section>
      <br />
      <section className="flex flex-wrap">
        <span className="p-1 m-1 text-sm text-gray-400 cursor-pointer hover:underline">About</span>
        <span className="p-1 m-1 text-sm text-gray-400 cursor-pointer hover:underline">Newsroom</span>
        <span className="p-1 m-1 text-sm text-gray-400 cursor-pointer hover:underline">Careers</span>
        <span className="p-1 m-1 text-sm text-gray-400 cursor-pointer hover:underline">TikTok for Good</span>
        <span className="p-1 m-1 text-sm text-gray-400 cursor-pointer hover:underline">Developers</span>
        <span className="p-1 m-1 text-sm text-gray-400 cursor-pointer hover:underline">Help</span>
        <span className="p-1 m-1 text-sm text-gray-400 cursor-pointer hover:underline">Safety</span>
        <span className="p-1 m-1 text-sm text-gray-400 cursor-pointer hover:underline">Privacy</span>
        <span className="p-1 m-1 text-sm text-gray-400 cursor-pointer hover:underline">Portal</span>
        <span className="p-1 m-1 text-sm text-gray-400 cursor-pointer hover:underline">Community</span>
        <span className="p-1 m-1 text-sm text-gray-400 cursor-pointer hover:underline">Guidelines</span>
        <br />
      </section>
        <span className="p-1 m-1 text-sm text-gray-400 cursor-pointer hover:underline">C 2021 TikTok</span>
        <br /><br />
    </aside>
  );
}
