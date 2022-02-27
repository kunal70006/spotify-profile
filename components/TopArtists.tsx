import Loader from "../Utils/Loader";
import Image from "next/image";
import Link from "next/link";

const TopArtists = ({ artists }) => {
  console.log(artists);

  return artists ? (
    <section className="flex flex-col mt-20 items-center ml-28 w-full text-white font-medium">
      <h1 className="text-4xl mb-12">Top Artists</h1>
      <div className="flex flex-wrap justify-center 2xl:mx-32">
        {artists?.map((art) => (
          <div className="mx-8 mb-12 flex flex-col items-center" key={art?.id}>
            <Link passHref href={art?.external_urls?.spotify}>
              <Image
                src={art?.images[0]?.url}
                width={200}
                height={200}
                alt="artist"
                className="rounded-full transition-opacity cursor-pointer hover:opacity-50"
              />
            </Link>
            <Link passHref href={art?.external_urls?.spotify}>
              <a
                className="mt-4 text-lg cursor-pointer hover:underline"
                target="_blank"
                rel="noreferrer noopener"
              >
                {art?.name}
              </a>
            </Link>
          </div>
        ))}
      </div>
    </section>
  ) : (
    <Loader />
  );
};

export default TopArtists;
