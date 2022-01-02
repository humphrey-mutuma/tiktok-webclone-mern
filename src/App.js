import Feed from "./components/Feed/Feed";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import faker from "faker";
import { AvatarGenerator } from "random-avatar-generator";
// generate random avatar
const generator = new AvatarGenerator();

function App() {
  return (
    <main className="">
      <Navbar />
      <section className="grid grid-cols-3 max-w-6xl mx-auto min-h-screen">
        <aside className=" hidden sm:grid  sm:col-span-1 h-[89vh] overflow-x-hidden overflow-y-scroll sticky top-[11vh] ">
          <Sidebar />
        </aside>
        <section className="col-span-3 sm:col-span-2  ">
          <Feed
            userImage={generator.generateRandomAvatar("nazuu")}
            username={faker.name.findName()}
            displayName={faker.name.findName()}
            postSong="99 problems but a react ain't one"
            postVideo="https://v16-webapp.tiktok.com/ebe60415c278f561eb7ec15c90f2829d/61d0ba2d/video/tos/alisg/tos-alisg-pve-0037c001/85b2004f059a40b19abf93430b20c364/?a=1988&br=4964&bt=2482&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=Yu12_FBqkag3-I&l=2022010114311701024504302602F959BF&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=M3czOTU6ZjQ2OjMzODczNEApO2k5OGg1PGU7NzQ5O2ZmM2diNGNzcjRnbjVgLS1kMS1zczI0XzExNGAvXjNeX2FeLjY6Yw%3D%3D&vl=&vr="
            postLikes={faker.random.number()}
            postComments={faker.random.number()}
            postShares={faker.random.number()}
          />
          <Feed
            userImage={generator.generateRandomAvatar("jsude")}
            username={faker.name.findName()}
            displayName={faker.name.findName()}
            postSong="original sound - Moods"
            postVideo="https://v16-webapp.tiktok.com/a463d390153e5ec5de4b604e01ce0fe6/61d0c6b3/video/tos/alisg/tos-alisg-pve-0037c001/48754f7fd50c4132b766cc2dcb6b6f25/?a=1988&br=3324&bt=1662&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=Yu12_FBqkag3-I&l=202201011524530102450050272109174D&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=ajppaTc6ZjNwOTMzODczNEApM2U5Z2dpNWRlNzlmPDtpOmdjc21fcjQwYXFgLS1kMS1zczAvNi9gYjViXi8uXi82YTY6Yw%3D%3D&vl=&vr="
            postLikes={faker.random.number()}
            postComments={faker.random.number()}
            postShares={faker.random.number()}
          />
          <Feed
            userImage={generator.generateRandomAvatar("nazuu")}
            username={faker.name.findName()}
            displayName={faker.name.findName()}
            postSong="Kirikou Logobi Remix - Mia"
            postVideo="https://v16-webapp.tiktok.com/c092be0573422ee4a51aff35ef9a87a5/61d0c6b8/video/tos/alisg/tos-alisg-pve-0037c001/fc1bdb473cc34c1d87ede3e0c9f1d469/?a=1988&br=4164&bt=2082&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=Yu12_FBqkag3-I&l=202201011524530102450050272109174D&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=amtyZjo6Zjw0OTMzODczNEApOTg2ZDY0OWVmNzc7ZDY7Omc2bC4vcjQwYmtgLS1kMS1zczUwM18wNV8tNi8xLS0tLTQ6Yw%3D%3D&vl=&vr="
            postLikes={faker.random.number()}
            postComments={faker.random.number()}
            postShares={faker.random.number()}
          />
        </section>
      </section>
    </main>
  );
}

export default App;
