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
            postVideo="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
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
