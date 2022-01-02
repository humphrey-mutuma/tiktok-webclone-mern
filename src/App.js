import Feed from "./components/Feed/Feed";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import faker from "faker";
import { AvatarGenerator } from "random-avatar-generator";
// generate random avatar
const generator = new AvatarGenerator();

function App() {
  return (
    <main>
      <Navbar />
      <section className="grid grid-cols-3 max-w-6xl mx-auto ">
        <aside className=" hidden sm:grid  sm:col-span-1 h-[89vh] overflow-x-hidden overflow-y-scroll sticky top-[11vh] ">
          <Sidebar />
        </aside>
        <section className="col-span-3 sm:col-span-2">
          <section className="w-full h-[89vh] p-4 overflow-y-scroll   snap snap-y snap-mandatory">
            <div className="snap-start  w-full h-screen">
              <Feed
                userImage={generator.generateRandomAvatar("nazuu")}
                username={faker.name.findName()}
                displayName={faker.name.findName()}
                postSong="99 problems but a react ain't one"
                postVideo="https://v16-webapp.tiktok.com/a33386b3b5cc74f71e2d6732db3f5c2c/61d1b885/video/tos/alisg/tos-alisg-pve-0037c001/9129aa0183be4848bde9e8533b46469c/?a=1988&br=3248&bt=1624&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=Yu12_FBqkag3-I&l=202201020836420102452441950C8F182A&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=amp0Ojk6Zms4ODMzODczNEApPDc2NzY8Zjs2Nzw0OjQ8aGcuZ2VpcjRnLmJgLS1kMS1zcy01NC5hMDVfL2I0NS1fLjU6Yw%3D%3D&vl=&vr="
                postLikes={faker.random.number()}
                postComments={faker.random.number()}
                postShares={faker.random.number()}
              />
            </div>
            <div className="snap-start  w-full h-screen">
              <Feed
                userImage={generator.generateRandomAvatar("jsude")}
                username={faker.name.findName()}
                displayName={faker.name.findName()}
                postSong="original sound - Moods"
                postVideo="https://www.tiktok.com/@m.alby_/video/7015572126774152450?is_from_webapp=1&sender_device=pc&web_id7047737202964645377"
                postLikes={faker.random.number()}
                postComments={faker.random.number()}
                postShares={faker.random.number()}
              />
            </div>
            <div className="snap-start  w-full h-[89vh]">
              <Feed
                userImage={generator.generateRandomAvatar("nazuu")}
                username={faker.name.findName()}
                displayName={faker.name.findName()}
                postSong="Kirikou Logobi Remix - Mia"
                postVideo="https://v16-webapp.tiktok.com/c092be0573422ee4a51aff35ef9a87a5/61d0c6b8/video/tos/alisg/tos-alisg-pve-0037c001/fc1bdb473cc34c1d87ede3e0c9f1d469/?a=1988&br=4164&bt=2082&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=Yu12_FBqkag3-I&l=202201011524530102450050272109174D&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=amtyZjo6Zjw0OTMzODczNEApOTg2ZDY0OWVmNzc7ZDY7Omc2bC4vcjQwYmtgLS1kMS1zczUwM18wNV8tNi8xLS0tLTQ6Yw%3D%3D&vl=&vr="
                postLikes={faker.random.number()}
                postComments={faker.random.number()}
                postShares={faker.random.number()}
              />{" "}
            </div>
          </section>
        </section>
      </section>
    </main>
  );
}

export default App;
