import React from "react";
import { FaCamera } from "react-icons/fa";
import Tabs from "./Tabs";

export default function Profile() {
  const [bannerUrl, setBannerUrl] = React.useState(
    "https://picsum.photos/1500/400"
  );

  const [profileUrl, setProfileUrl] = React.useState(
    "https://picsum.photos/100"
  );

  const handleBannerChange = (event: any) => {
    const file = event.target.files[0];

    if (file) {
      setBannerUrl(URL.createObjectURL(file));
    }
  };

  const handleProfileChange = (event: any) => {
    const file = event.target.files[0];

    if (file) {
      setProfileUrl(URL.createObjectURL(file));
    }
  };

  return (
    <div className="relative ml-[5rem]">
      <div className="relative">
        <img src={bannerUrl} alt="" className="w-full h-60 object-cover" />

        <button
          className="absolute top-2 right-2 bg-gray-800 text-white
        p-2 rounded-full hover:bg-gray-600"
        >
          <label htmlFor="banner-upload" className="cursor-pointer">
            <FaCamera size={24} />
          </label>
          <input
            type="file"
            id="banner-upload"
            accept="image/*"
            className="hidden"
            onChange={handleBannerChange}
          />
        </button>
      </div>

      <div className="flex items-center ml-4 mt-[2rem]">
        <img
          src={profileUrl}
          alt=""
          className="h-40 w-40 object-cover rounded-full border-white relative"
        />
        <button
          className="absolute ml-[4rem] z-10 mt-[9rem] bg-gray-800 text-white
        p-2 rounded-full hover:bg-gray-600"
        >
          <label htmlFor="profile-upload" className="cursor-pointer">
            <FaCamera size={24} />
          </label>
          <input
            type="file"
            id="profile-upload"
            accept="image/*"
            className="hidden"
            onChange={handleProfileChange}
          />
        </button>

        <div className="ml-4 mt-4">
          <h1 className="text-2xl font-bold">Some Name</h1>
          <p>1M Views</p>
          <p className="mt-2 text-wrap w-[50rem]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
            eum omnis assumenda sint explicabo ipsam, asperiores maxime
            quibusdam ipsa modi ipsum, aspernatur aliquid quos enim, perferendis
            reprehenderit voluptatem repellendus! Commodi.
          </p>
          <button
            className="mt-4 bg-red-600 text-white py-2 px-4 rounded
        hover:bg-red-500 cursor-pointer"
          >
            Subscribe
          </button>
        </div>
      </div>
      <Tabs/>
    </div>
  );
}
