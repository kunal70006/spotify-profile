import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import useSpotify from "../../Utils/useSpotify";
import { useSession } from "next-auth/react";
import Navbar from "../../components/Navbar";
import PlaylistDetails from "../../components/PlaylistDetails";

const Index = () => {
  const router = useRouter();
  const { id } = router.query;
  const spotifyApi = useSpotify();
  const { data: session, status } = useSession();
  const [playlistData, setPlaylistData] = useState();

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await spotifyApi.getPlaylist(id);
        const data = await res.body;
        setPlaylistData(data);
      } catch (err) {
        console.log(err);
      }
    };

    getData();
  }, [id, session, spotifyApi]);

  return (
    <main className="bg-gray-900 min-h-screen h-full min-w-full flex">
      <Navbar />
      <PlaylistDetails playlistData={playlistData} />
    </main>
  );
};

export default Index;
