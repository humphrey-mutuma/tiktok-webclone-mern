import Feed from "./components/Feed/Feed";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import { useEffect, useState } from "react";
import axios from "./axios";

function App() {
  const [feed, setFeed] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get("/api/feed");
      setFeed(data);
      return data;
    };
    fetchData();
  }, []);

  return (
    <main>
      <Navbar />
      <section className="grid grid-cols-3 max-w-6xl mx-auto ">
        <aside className=" hidden sm:grid  sm:col-span-1 h-[89vh] overflow-x-hidden overflow-y-scroll sticky top-[11vh] scrollbar-thin  scrollbar-thumb-gray-400 scrollbar-track-white ">
          <Sidebar />
        </aside>
        <section className="col-span-3 sm:col-span-2">
          <section className="w-full h-[89vh] p-4 overflow-y-scroll scrollbar-hide   snap snap-y snap-mandatory">
            {feed ? (
              feed.map((feedItem) => (
                <div key={feedItem.id} className="snap-start  w-full h-screen">
                  <Feed
                    userImage={feedItem.userImage}
                    username={feedItem.username}
                    displayName={feedItem.displayName}
                    postSong={feedItem.postSong}
                    postVideo={feedItem.postVideo}
                    postLikes={feedItem.postLikes}
                    postComments={feedItem.postComments}
                    postShares={feedItem.postShares}
                  />
                </div>
              ))
            ) : (
              <div className="snap-start  w-full h-screen">loading... </div>
            )}
          </section>
        </section>
      </section>
    </main>
  );
}

export default App;
