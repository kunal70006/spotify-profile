import Loader from "../Utils/Loader";
import TrackDetailsContainer from "./TrackDetailsContainer";

const Reccomendations = ({ data, playlistName }) => {
  return data ? (
    <div className="flex flex-col 2xl:-pr-40 xl:-pr-20 w-full mt-20 items-center ">
      <h1 className="text-white text-2xl font-medium mb-20">
        Recommended Tracks based on {playlistName}
      </h1>
      <div className="">
        {data?.map((track) => (
          <TrackDetailsContainer track={track} key={track?.id} />
        ))}
      </div>
    </div>
  ) : (
    <Loader />
  );
};

export default Reccomendations;
