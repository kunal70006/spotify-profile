import { useEffect, useState } from "react";
import useSpotify from "../Utils/useSpotify";
import { useSession } from "next-auth/react";
import Loader from "../Utils/Loader";
import Playlist from "./Playlist";

const Playlists = () => {
  const spotifyApi = useSpotify();
  const { data: session, status } = useSession();
  const [playlists, setPlaylists] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await spotifyApi.getUserPlaylists(session?.user?.username);
        const data = await res.body;

        setPlaylists(data?.items);
      } catch (err) {
        console.log(err);
      }
    };

    getData();
  }, [session, spotifyApi]);
  return playlists ? (
    <section className="flex flex-col w-full text-white items-center ml-28">
      <h1 className="mt-20 mb-9 text-4xl font-medium ">Your Playlists</h1>
      <div className="grid gap-x-16 gap-y-12 mb-8 xl:grid-cols-5 md:grid-cols-3 place-items-center">
        {/* <div className="flex flex-wrap "> */}
        {playlists.map((playlist) => (
          <Playlist data={playlist} key={playlist.id} />
        ))}
      </div>
    </section>
  ) : (
    <Loader />
  );
};

export default Playlists;
