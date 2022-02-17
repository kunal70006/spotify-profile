import { getProviders, signIn } from "next-auth/react";
import { useState, useEffect, useRef } from "react";

const LandingPage = () => {
  const [providers, setProviders] = useState<any>();
  const ref = useRef<any>();
  useEffect(() => {
    (async () => {
      const res = await getProviders();
      ref.current = res.spotify;
      console.log(ref.current);

      setProviders(res);
    })();
  }, []);

  useEffect(() => {
    if (providers?.length > 0) {
      console.log(providers);
    }
  }, [providers]);

  return (
    <div className="flex flex-col text-slate-50 font-medium items-center h-full justify-center">
      <h1 className="text-5xl mb-8">Spotify Profile</h1>
      {ref.current && (
        <button
          onClick={() => signIn(ref.current.id, { callbackUrl: "/" })}
          key={ref.current.id}
          className="bg-gray-500 cursor-pointer tracking-wider text-2xl px-8 py-4 rounded-full transition-colors hover:bg-gray-800"
        >
          LOG IN TO SPOTIFY
        </button>
      )}
    </div>
  );
};

export default LandingPage;
