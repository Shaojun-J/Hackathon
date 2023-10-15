import React from "react";

const UploadImage = () => {
  return (
    <div className="flex justify-center my-4">
      <label className="flex items-center px-4 py-2 bg-blue-400 text-white rounded-md cursor-pointer hover:bg-blue-500">
        <svg className="w-5 h-5 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7 2a5 5 0 015 5v4a5 5 0 01-5 5H4a2 2 0 01-2-2V9a2 2 0 012-2h3zm0 0H4a5 5 0 00-5 5v4a5 5 0 005 5h3a5 5 0 015-5V7a5 5 0 00-5-5z"></path>
        </svg>
        Select Image File
        <input type="file" className="hidden" />
      </label>
    </div>

  );
};

export default UploadImage;
