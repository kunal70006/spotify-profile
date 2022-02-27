import Navbar from "../../components/Navbar";
import TopArtists from "../../components/TopArtists";
import useSpotify from "../../Utils/useSpotify";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

const Index = () => {
  const spotifyApi = useSpotify();
  const { data: session, status } = useSession();
  const [topArtists, setTopArtists] = useState();
  useEffect(() => {
    const getData = async () => {
      try {
        const res = await spotifyApi.getMyTopArtists({ limit: 50 });
        const data = await res.body;
        console.log(data);
        setTopArtists(data?.items);
      } catch (error) {
        console.log(error);
      }
    };

    getData();
  }, [spotifyApi, session]);
  return (
    <main className="bg-gray-900 min-h-screen h-full min-w-full flex">
      <Navbar />
      <TopArtists artists={topArtists} />
    </main>
  );
};

export default Index;
