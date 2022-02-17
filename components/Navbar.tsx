import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="w-32 justify-around flex flex-col h-screen fixed bg-gray-800 drop-shadow-2xl items-center rounded-r-lg">
      <Image
        src="/spotify.png"
        alt="app icon"
        width={48}
        height={48}
        className="cursor-pointer"
      />
      <div className="flex flex-col items-center text-slate-200 text-sm">
        <div className="text-center mb-8 cursor-pointer">
          <Image
            src="/user-profile.png"
            alt="user profile icon"
            width={24}
            height={24}
            className="invert"
          />
          <p>Profile</p>
        </div>
        <div className="text-center mb-8 cursor-pointer">
          <Image
            className="invert"
            src="/microphone.png"
            alt="mic icon"
            width={24}
            height={24}
          />
          <p>Top Artists</p>
        </div>
        <div className="text-center mb-8 cursor-pointer">
          <Image
            className="invert"
            src="/headphones.png"
            alt="tracks icon"
            width={24}
            height={24}
          />
          <p>Top Tracks</p>
        </div>
        <div className="text-center mb-8 cursor-pointer">
          <Image
            className="invert"
            src="/timers.png"
            alt="recent tracks icon"
            width={24}
            height={24}
          />
          <p>Recent</p>
        </div>
        <div className="text-center cursor-pointer">
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
        width={48}
        height={48}
        className="cursor-pointer"
      />
    </nav>
  );
};

export default Navbar;
