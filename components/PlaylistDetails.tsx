// import { useEffect, useState } from "react";
import Image from "next/image";
// import useSpotify from "../Utils/useSpotify";
import Loader from "../Utils/Loader";
import TrackDetailsContainer from "./TrackDetailsContainer";
import AudioChart from "./AudioChart";
import { useRouter } from "next/router";

const PlaylistDetails = ({ playlistData }) => {
  // const trackIds = [];
  // const spotifyApi = useSpotify();
  // const [audioFeatures, setAudioFeatures] = useState();
  // useEffect(() => {
  //   if (playlistData) {
  //     playlistData?.tracks?.items?.map((track) => {
  //       trackIds.push(track?.track?.id);
  //     });
  //   }

  //   const getData = async () => {
  //     const res = await spotifyApi.getAudioFeaturesForTracks(trackIds);
  //     const data = await res.body;
  //     setAudioFeatures(data?.audio_features);
  //   };

  //   getData();
  // }, [playlistData, spotifyApi]);

  const router = useRouter();

  return playlistData ? (
    <section className="flex w-full justify-evenly mt-20">
      <div className="flex flex-col items-center text-gray-50">
        <Image
          src={playlistData?.images[0]?.url}
          alt="cover image"
          height={256}
          width={256}
        />
        <h1 className="font-medium text-4xl mt-4">{playlistData?.name}</h1>
        <h1 className="font-medium mt-4 text-lg text-gray-400">
          By {playlistData?.owner?.display_name}
        </h1>
        <h1 className="font-medium mt-2 text-sm text-gray-400">
          {playlistData?.tracks?.total} Tracks
        </h1>
        <div className="mt-16">
          <button
            className="bg-gray-500 cursor-pointer tracking-wider font-medium px-4 py-2 rounded-full transition-colors hover:bg-gray-800"
            onClick={() => router.push(`/recommendations/${playlistData?.id}`)}
          >
            GET RECOMMENDATIONS
          </button>
          {/* <h1 className="">Audio Features</h1> */}
          {/* <AudioChart data={audioFeatures} /> */}
        </div>
      </div>
      <div className="flex flex-col">
        {playlistData?.tracks?.items?.map((track) => (
          <TrackDetailsContainer track={track.track} key={track?.track?.id} />
        ))}
      </div>
    </section>
  ) : (
    <Loader />
  );
};

export default PlaylistDetails;
