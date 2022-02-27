import Navbar from "../../components/Navbar";
import Recent from "../../components/Recent";
import useSpotify from "../../Utils/useSpotify";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

const Index = () => {
  const spotifyApi = useSpotify();
  const { data: session, status } = useSession();
  const [tracks, setTracks] = useState();
  useEffect(() => {
    const getData = async () => {
      try {
        const res = await spotifyApi.getMyRecentlyPlayedTracks({ limit: 20 });
        const data = await res.body;
        console.log(data);
        setTracks(data?.items);
      } catch (error) {
        console.log(error);
      }
    };

    getData();
  }, [spotifyApi, session]);
  return (
    <main className="bg-gray-900 min-h-screen h-full min-w-full flex">
      <Navbar />
      <Recent tracks={tracks} />
    </main>
  );
};

export default Index;
