import Image from "next/image";
import Loader from "../Utils/Loader";
import TrackDetails from "./TrackDetails";

const PlaylistDetails = ({ playlistData }) => {
  return playlistData ? (
    <section className="flex w-full justify-around mt-20">
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
      </div>
      <div className="flex flex-col">
        {playlistData?.tracks?.items?.map((track) => (
          <TrackDetails track={track.track} key={track?.track?.id} />
        ))}
      </div>
    </section>
  ) : (
    <Loader />
  );
};

export default PlaylistDetails;
