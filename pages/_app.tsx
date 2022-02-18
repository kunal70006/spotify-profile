import "../styles/globals.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { SessionProvider } from "next-auth/react";
import AppInterface from "../Utils/Interfaces/app";

function MyApp({ Component, pageProps, session }: AppInterface) {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  );
}

export default MyApp;
