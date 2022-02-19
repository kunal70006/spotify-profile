import Image from "next/image";
import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();
  return (
    <nav className=" w-28 justify-around flex flex-col h-screen fixed bg-gray-800 drop-shadow-2xl items-center rounded-r-lg">
      <Image
        src="/spotify.png"
        alt="app icon"
        width={48}
        height={48}
        className="cursor-pointer"
      />
      <div className="flex flex-col items-center text-slate-200 text-sm w-full">
        <div
          onClick={() => router.push("/")}
          className={`text-center py-2 mb-8 cursor-pointer transition-colors hover:bg-gray-600 w-full ${
            router.pathname === "/" ? "bg-gray-600" : null
          }`}
        >
          <Image
            src="/user-profile.png"
            alt="user profile icon"
            width={24}
            height={24}
            className="invert"
          />
          <p>Profile</p>
        </div>
        <div
          onClick={() => router.push("/top-artists")}
          className={`text-center py-2 mb-8 cursor-pointer transition-colors hover:bg-gray-600 w-full ${
            router.pathname === "/top-artists" ? "bg-gray-600" : null
          }`}
        >
          <Image
            className="invert"
            src="/microphone.png"
            alt="mic icon"
            width={24}
            height={24}
          />
          <p>Top Artists</p>
        </div>
        <div
          onClick={() => router.push("/top-tracks")}
          className={`text-center py-2 mb-8 cursor-pointer transition-colors hover:bg-gray-600 w-full ${
            router.pathname === "/top-tracks" ? "bg-gray-600" : null
          }`}
        >
          <Image
            className="invert"
            src="/headphones.png"
            alt="tracks icon"
            width={24}
            height={24}
          />
          <p>Top Tracks</p>
        </div>
        <div
          onClick={() => router.push("/recent")}
          className={`text-center py-2 mb-8 cursor-pointer transition-colors hover:bg-gray-600 w-full ${
            router.pathname === "/recent" ? "bg-gray-600" : null
          }`}
        >
          <Image
            className="invert"
            src="/timers.png"
            alt="recent tracks icon"
            width={24}
            height={24}
          />
          <p>Recent</p>
        </div>
        <div
          onClick={() => router.push("/playlists")}
          className={`text-center py-2 mb-8 cursor-pointer transition-colors hover:bg-gray-600 w-full ${
            router.pathname === "/playlists" ? "bg-gray-600" : null
          }`}
        >
          <Image
            className="invert"
            src="/playlist.png"
            alt="playlists icon"
            width={24}
            height={24}
          />
          <p>Playlists</p>
        </div>
      </div>
      <Image
        src="/github.png"
        alt="app icon"
        width={32}
        height={32}
        className="cursor-pointer"
      />
    </nav>
  );
};

export default Navbar;
