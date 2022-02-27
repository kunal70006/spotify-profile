import { useRouter } from "next/router";
import useSpotify from "../../Utils/useSpotify";
import { useSession } from "next-auth/react";
import { useState, useEffect } from "react";
import Navbar from "../../components/Navbar";
import TrackDetails from "../../components/TrackDetails";

const Index = () => {
  const router = useRouter();
  const { id } = router.query;
  const spotifyApi = useSpotify();
  const { data: session, status } = useSession();
  const [audioFeatures, setAudioFeatures] = useState();
  const [trackDetails, setTrackDetails] = useState<any>();
  useEffect(() => {
    const getTrackData = async () => {
      try {
        // const res = await spotifyApi.getAudioFeaturesForTrack(id);
        const res = await spotifyApi.getTrack(id);
        const data = await res.body;
        const tempObj = {
          name: data?.name,
          url: data?.external_urls?.spotify,
          albumName: data?.album?.name,
          imageUrl: data?.album?.images[0]?.url,
          artist: data?.album?.artists[0]?.name,
        };

        setTrackDetails(tempObj);
      } catch (error) {
        console.log(error);
      }
    };

    const getAudioData = async () => {
      try {
        const res = await spotifyApi.getAudioFeaturesForTrack(id);
        // const res = await spotifyApi.getTrack(id);
        const data = await res.body;
        setAudioFeatures(data);
      } catch (error) {
        console.log(error);
      }
    };

    getTrackData();
    getAudioData();
  }, [id, spotifyApi, session]);
  return (
    <main className="bg-gray-900 min-h-screen h-full min-w-full flex">
      <Navbar />
      <TrackDetails audioFeatures={audioFeatures} trackDetails={trackDetails} />
    </main>
  );
};

export default Index;
