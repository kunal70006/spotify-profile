import Image from "next/image";
import { useRouter } from "next/router";
import Loader from "../Utils/Loader";
import AudioChart from "./AudioChart";

const TrackDetails = ({ audioFeatures, trackDetails }) => {
  const router = useRouter();
  return audioFeatures && trackDetails ? (
    <section className="flex flex-col mt-20 w-full items-center text-white">
      <div className="flex">
        <div className="">
          <Image
            src={trackDetails.imageUrl}
            height={256}
            width={256}
            alt="track cover"
          />
        </div>
        <div className="flex flex-col ml-8 font-normal">
          <h1 className="text-4xl font-medium mb-2">{trackDetails.name}</h1>
          <h1 className="text-2xl text-gray-400">{trackDetails.artist}</h1>
          <h1 className="text-base text-gray-400">{trackDetails.albumName}</h1>
          <button
            className="bg-gray-500 cursor-pointer tracking-wider font-medium px-4 mt-12 w-fit py-2 rounded-full transition-colors hover:bg-gray-800"
            onClick={() => router.push(trackDetails.url)}
          >
            PLAY ON SPOTIFY
          </button>
        </div>
      </div>
      <div className="mt-48 w-1/3 flex flex-col items-center">
        <h1 className="text-4xl font-medium mb-8">Audio Features</h1>
        <AudioChart data={audioFeatures} />
      </div>
    </section>
  ) : (
    <Loader />
  );
};

export default TrackDetails;
