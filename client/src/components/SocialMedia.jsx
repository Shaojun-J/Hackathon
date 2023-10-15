import React, { useState } from "react";

const SocialMedia = () => {
  const [selectedPlatform, setSelectedPlatform] = useState();

  return (
    <div className="flex justify-center my-4">
      <div className="flex border rounded-lg shadow-sm w-1/2 bg-white">
        <input
          type="text"
          placeholder="Put your account here"
          className="focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-r border-gray-300 rounded-l-md pl-3 focus:outline-none"
        />

        <div className="relative">
          <select
            value={selectedPlatform}
            onChange={(e) => setSelectedPlatform(e.target.value)}
            className="block appearance-none w-auto text-white bg-blue-400 py-2 pr-8 pl-3 border-l border-gray-300 rounded-r leading-tight focus:outline-none focus:border-gray-500 focus:ring-1 focus:ring-indigo-500"
          >
            <option value="" disabled>
              Select Platform
            </option>
            <option value="Facebook">Facebook</option>
            <option value="Twitter">Twitter</option>
            <option value="Instagram">Instagram</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white">
            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path d="M5.293 9.293L10 14l4.707-4.707a.999.999 0 0 0 0-1.414.999.999 0 0 0-1.414 0L10 11.586 6.707 7.293a.999.999 0 1 0-1.414 1.414z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialMedia;
