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
            postSong="sonido original - ortegaortega786"
            postVideo="https://v16-webapp.tiktok.com/4053ba282100e6d7a4f166e0c8cd3b4b/61cf19f2/video/tos/alisg/tos-alisg-pve-0037c001/60803bc08c4641c8928c00d854d59da7/?a=1988&br=428&bt=214&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=0&ds=1&er=&ft=Yu12_FBqkag3-I&l=2021123108545901024500502712F7CD03&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=amk8OWU6Zjh5ODMzODczNEApOGc2OGY7NGVnNztkOzlpOGdxZjM2cjRnZG1gLS1kMS1zc14yXjQxLzQ2My9jM2MxMjU6Yw%3D%3D&vl=&vr="
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
