import Feed from "./components/Feed/Feed";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  return (
    <main className="">
      <Navbar />
      <section className="grid grid-cols-3 min-h-screen">
        <aside className="col-span-1 bg-blue-100">
          <Sidebar />
        </aside>
        <section className="col-span-2 bg-slate-100">
          <Feed />
        </section>
      </section>
    </main>
  );
}

export default App;
