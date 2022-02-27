import Navbar from "./Navbar";
import Header from "./Header";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import useSpotify from "../Utils/useSpotify";
import userData from "../Utils/Interfaces/userData";
import Loader from "../Utils/Loader";
import TrackDetailsContainer from "./TrackDetailsContainer";

const Dashboard = () => {
  const { data: session, status } = useSession();
  const spotifyApi = useSpotify();
  const [userData, setUserData] = useState<userData>();
  const [topArtists, setTopArtists] = useState<any>();
  const [topTracks, setTopTracks] = useState<any>();

  useEffect(() => {
    const getData = async () => {
      const promiseArr = [
        spotifyApi.getMe(),
        spotifyApi.getFollowedArtists({ limit: 1 }),
        // @ts-ignore
        spotifyApi.getUserPlaylists(session?.user?.username),
        spotifyApi.getMyTopArtists({ limit: 10 }),
        spotifyApi.getMyTopTracks({ limit: 10 }),
      ];
      const finalRes = [];
      try {
        const results = await Promise.all(promiseArr);
        results.forEach((res) => finalRes.push(res.body));
        const tempObj: userData = {
          followers: finalRes[0].followers.total,
          following: finalRes[1].artists.total,
          playlists: finalRes[2].total,
        };
        setUserData(tempObj);
        setTopArtists(finalRes[3].items);
        setTopTracks(finalRes[4].items);
      } catch (err) {
        console.log(err);
      }
    };
    getData();
  }, [session, spotifyApi]);

  return userData && topArtists && topTracks ? (
    <div className="flex">
      <Navbar />
      <div className="flex flex-col h-full w-full ml-28">
        <Header user={session} userData={userData} />
        <div className="flex font-medium mt-24">
          <div className="flex flex-col w-1/2">
            <div className="flex items-center  2xl:ml-32 justify-between mb-12">
              <h1 className="text-2xl text-white">Top Artists of All Time</h1>
              <Link passHref href="/top-artists">
                <button className=" text-gray-50 font-medium rounded-full px-6 py-2 bg-gradient-to-r from-violet-400 to-weirdPink transition-colors hover:bg-gradient-to-l hover:from-violet-400 hover:to-weirdPink">
                  SEE MORE
                </button>
              </Link>
            </div>
            {topArtists.map((artist) => (
              <div
                className="flex 2xl:ml-32 mb-8 text-white items-center"
                key={artist?.id}
              >
                <Link passHref href={artist?.external_urls?.spotify}>
                  <Image
                    src={artist?.images[0]?.url}
                    width={64}
                    height={64}
                    alt="artist"
                    className="rounded-full transition-opacity cursor-pointer hover:opacity-50"
                  />
                </Link>
                <Link passHref href={artist?.external_urls?.spotify}>
                  <a
                    className="text-lg ml-4 cursor-pointer hover:underline"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    {artist?.name}
                  </a>
                </Link>
              </div>
            ))}
          </div>
          <div className="flex flex-col w-1/2">
            <div className="flex items-center justify-around mb-12">
              <h1 className="text-2xl text-white">Top Tracks of All Time</h1>
              <Link passHref href="/top-tracks">
                <button className=" text-gray-50 font-medium rounded-full px-6 py-2 bg-gradient-to-r from-violet-400 to-weirdPink transition-colors hover:bg-gradient-to-l hover:from-violet-400 hover:to-weirdPink">
                  SEE MORE
                </button>
              </Link>
            </div>
            {topTracks.map((track) => (
              <div className="flex 2xl:mx-32 text-white" key={track?.id}>
                <TrackDetailsContainer track={track} key={track?.id} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  ) : (
    <Loader />
  );
};

export default Dashboard;
