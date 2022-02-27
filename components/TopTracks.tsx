import TrackDetailsContainer from "./TrackDetailsContainer";
import Loader from "../Utils/Loader";

const TopTracks = ({ tracks }) => {
  return tracks ? (
    <section className="flex flex-col mt-20 items-center w-full text-white font-medium">
      <h1 className="text-4xl mb-12">Top Tracks</h1>
      <div className="flex flex-col">
        {tracks?.map((track) => (
          <TrackDetailsContainer track={track} key={track?.id} />
        ))}
      </div>
    </section>
  ) : (
    <Loader />
  );
};

export default TopTracks;
