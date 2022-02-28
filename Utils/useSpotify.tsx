import { useSession, signIn } from "next-auth/react";
import { useEffect } from "react";
import spotifyApi from "./spotify";

const useSpotify = () => {
  const { data: session, status } = useSession();

  useEffect(() => {
    if (session) {
      //   if refresh access token fails, redirect to manual login
      if (session.error === "RefreshAccessTokenError") {
        signIn();
      }
      // @ts-ignore
      spotifyApi.setAccessToken(session.user.accessToken);
    }
  }, [session]);

  return spotifyApi;
};

export default useSpotify;
