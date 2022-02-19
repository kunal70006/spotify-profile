import Navbar from "../../components/Navbar";
import Playlists from "../../components/Playlists";

const index = () => {
  return (
    <main className="bg-gray-900 min-h-screen h-full min-w-full flex">
      <Navbar />
      <Playlists />
    </main>
  );
};

export default index;
