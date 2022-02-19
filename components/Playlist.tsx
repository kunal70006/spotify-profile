import Image from "next/image";
import Link from "next/link";

const Playlist = ({ data }) => {
  return (
    <div className="flex flex-col items-center text-center">
      <Link href={`/playlists/${encodeURIComponent(data?.id)}`} passHref>
        <Image
          src={data?.images[0]?.url}
          height={256}
          width={256}
          alt="playlist cover"
          className="rounded-lg transition-opacity cursor-pointer hover:opacity-50"
        />
      </Link>
      <a
        href={data?.external_urls?.spotify}
        rel="noreferrer noopener"
        target="_blank"
        className="font-medium mt-2 text-lg hover:underline"
      >
        {data?.name?.length > 15
          ? data?.name?.slice(0, 15).concat("...")
          : data?.name}
      </a>
      <p className="text-gray-400">{data?.tracks?.total} Tracks</p>
    </div>
  );
};

export default Playlist;
