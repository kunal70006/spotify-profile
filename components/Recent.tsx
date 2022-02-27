import Loader from "../Utils/Loader";
import TrackDetailsContainer from "./TrackDetailsContainer";

const Recent = ({ tracks }) => {
  return tracks ? (
    <section className="flex flex-col mt-20 items-center w-full text-white font-medium">
      <h1 className="text-4xl mb-12">Recently Played Tracks</h1>
      <div className="flex flex-col">
        {tracks?.map((track) => (
          <TrackDetailsContainer track={track.track} key={track?.track?.id} />
        ))}
      </div>
    </section>
  ) : (
    <Loader />
  );
};

export default Recent;
