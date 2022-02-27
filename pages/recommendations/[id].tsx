import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import Reccomendations from "../../components/Reccomendations";
import useSpotify from "../../Utils/useSpotify";
import { useSession } from "next-auth/react";

const Index = () => {
  const router = useRouter();
  const { id } = router.query;
  const spotifyApi = useSpotify();
  const { data: session, status } = useSession();
  const artistIds = [];
  const [recTracks, setRecTracks] = useState();
  const [playlistName, setPlaylistName] = useState("");

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await spotifyApi.getPlaylist(id);
        const data = await res.body;
        setPlaylistName(data?.name);

        data?.tracks?.items?.map((song) => {
          artistIds.push(song?.track?.artists[0]?.id);
        });

        if (artistIds.length > 0) {
          try {
            const res = await spotifyApi.getRecommendations({
              seed_artists: artistIds.slice(0, 3),
            });
            const data = await res.body;
            setRecTracks(data?.tracks);
          } catch (err) {
            console.log(err);
          }
        }
      } catch (err) {
        console.log(err);
      }
    };

    getData();
  }, [id, spotifyApi, session]);

  return (
    <main className="bg-gray-900 min-h-screen h-full min-w-full flex">
      <Navbar />
      <Reccomendations data={recTracks} playlistName={playlistName} />
    </main>
  );
};

export default Index;
