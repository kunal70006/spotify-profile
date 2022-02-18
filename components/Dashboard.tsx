import Navbar from "./Navbar";
import Header from "./Header";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import useSpotify from "../Utils/useSpotify";
import userData from "../Utils/Interfaces/userData";
import Loader from "../Utils/Loader";

const Dashboard = () => {
  const { data: session, status } = useSession();
  const spotifyApi = useSpotify();
  const [userData, setUserData] = useState<userData>();

  useEffect(() => {
    const getData = async () => {
      const promiseArr = [
        spotifyApi.getMe(),
        spotifyApi.getFollowedArtists({ limit: 1 }),
        spotifyApi.getUserPlaylists(session?.user?.username),
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
      } catch (err) {
        console.log(err);
      }
    };
    getData();
  }, [session, spotifyApi]);

  return userData ? (
    <div className="flex">
      <Navbar />
      <div className="flex flex-col h-full w-full ml-32">
        <Header user={session} userData={userData} />
      </div>
    </div>
  ) : (
    <Loader />
  );
};

export default Dashboard;
