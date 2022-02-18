import React from "react";
import Image from "next/image";
import Loader from "../Utils/Loader";
import { signOut } from "next-auth/react";

const Header = ({ user, userData }) => {
  return user ? (
    <section className=" flex flex-col items-center">
      <div className="mt-20">
        <Image
          src={user?.user?.image}
          alt="user image"
          width={164}
          height={164}
          quality={100}
          className="rounded-full"
        />
      </div>
      <a
        href={`https://open.spotify.com/user/${user?.user?.username}`}
        rel="noreferrer noopener"
        target="_blank"
        className="text-slate-50 text-4xl font-medium mt-4 cursor-pointer transition-colors hover:text-weirdPink"
      >
        {user?.user?.name}
      </a>
      <div className="flex w-1/4 mt-8 text-lg justify-around text-gray-50">
        <div className="flex flex-col items-center">
          <h1 className="text-weirdPink font-medium text-3xl">
            {userData.followers}
          </h1>
          <h1>Followers</h1>
        </div>
        <div className="flex flex-col items-center">
          <h1 className="text-weirdPink font-medium text-3xl">
            {userData.following}
          </h1>
          <h1>Following</h1>
        </div>
        <div className="flex flex-col items-center">
          <h1 className="text-weirdPink font-medium text-3xl">
            {userData.playlists}
          </h1>
          <h1>Playlists</h1>
        </div>
      </div>
      <button
        onClick={() => signOut()}
        className="mt-10 text-xl text-gray-50 font-medium rounded-full px-6 py-2 bg-gradient-to-r from-violet-400 to-weirdPink transition-colors hover:bg-gradient-to-l hover:from-violet-400 hover:to-weirdPink"
      >
        Logout
      </button>
    </section>
  ) : (
    <Loader />
  );
};

export default Header;
