import React from "react";

const Header = () => {

  return (
    <nav class="flex items-center justify-between flex-wrap bg-blue-400 p-6">
      <div class="flex items-center flex-shrink-0 text-white mr-6">
        <svg width="53" height="50" viewBox="0 0 53 50" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_2_22)">
            <path d="M34.2291 29.1667H32.4846L31.8662 28.6042C34.0304 26.2292 35.3333 23.1458 35.3333 19.7917C35.3333 12.3125 28.9071 6.25 20.9791 6.25C13.4266 6.25 7.24331 11.75 6.69122 18.75H11.1521C11.7041 14.0625 15.8558 10.4167 20.9791 10.4167C26.4779 10.4167 30.9166 14.6042 30.9166 19.7917C30.9166 24.9792 26.4779 29.1667 20.9791 29.1667C20.6037 29.1667 20.2504 29.1042 19.875 29.0625V33.2708C20.2504 33.3125 20.6037 33.3333 20.9791 33.3333C24.5346 33.3333 27.8029 32.1042 30.3204 30.0625L30.9166 30.6458V32.2917L41.9583 42.6875L45.2487 39.5833L34.2291 29.1667Z" fill="white" />
            <path d="M14.2879 22.5417L8.83332 27.6875L3.37874 22.5417L1.81082 24.0209L7.2654 29.1667L1.81082 34.3125L3.37874 35.7917L8.83332 30.6459L14.2879 35.7917L15.8558 34.3125L10.4012 29.1667L15.8558 24.0209L14.2879 22.5417Z" fill="white" />
          </g>
          <defs>
            <clipPath id="clip0_2_22">
              <rect width="53" height="50" fill="white" />
            </clipPath>
          </defs>
        </svg>
        <span class="font-semibold text-xl tracking-tight ml-2">ExposeAlert</span>
      </div>

      <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto justify-end">
        <div class="flex space-x-4">
          <a href="#" class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-blue-400 hover:bg-white lg:mt-0">Log in</a>
          <a href="#" class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-blue-400 hover:bg-white lg:mt-0">Sign up</a>
        </div>
      </div>
    </nav>
  );
};

export default Header;
