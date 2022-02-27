import Image from "next/image";
import Link from "next/link";

const TrackDetailsContainer = ({ track }) => {
  console.log(track);

  return (
    <div className="flex items-center justify-between">
      <div className="flex mb-8 items-end 2xl:pr-40 xl:pr-20">
        <Link passHref href={`/tracks/${track?.id}`}>
          <Image
            src={track?.album?.images[0]?.url}
            width={64}
            height={64}
            alt="track cover image"
            className="cursor-pointer"
          />
        </Link>
        <div className="flex flex-col text-white ml-4 font-medium">
          <Link passHref href={`/tracks/${track?.id}`}>
            <h1 className="cursor-pointer hover:underline">{track?.name}</h1>
          </Link>
          <p className="text-gray-400">
            {track?.artists[0]?.name} &#183; {track?.album?.name}{" "}
          </p>
        </div>
      </div>
      <h1 className="text-gray-400 font-medium">
        {MillisecondsToMinutes(track?.duration_ms)}
      </h1>
    </div>
  );
};

const MillisecondsToMinutes = (ms: number) => {
  let min = ms / 1000 / 60;
  let r = min % 1;
  let sec = Math.floor(r * 60);
  if (sec < 10) {
    sec = "0" + sec;
  }
  min = Math.floor(min);
  return min + ":" + sec;
};

export default TrackDetailsContainer;
