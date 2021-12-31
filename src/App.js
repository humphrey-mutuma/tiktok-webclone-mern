import Feed from "./components/Feed/Feed";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  return (
    <main className="">
      <Navbar />
      <section className="grid grid-cols-3 max-w-6xl mx-auto min-h-screen">
        <aside className=" hidden sm:grid  sm:col-span-1 h-[89vh] overflow-x-hidden overflow-y-scroll sticky top-[11vh] ">
          <Sidebar />
        </aside>
        <section className="col-span-3 sm:col-span-2 bg-slate-100 ">
          <Feed />
        </section>
      </section>
    </main>
  );
}

export default App;
