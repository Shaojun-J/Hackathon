import React, { useState } from "react";

const SocialMedia = () => {
  const [selectedPlatform, setSelectedPlatform] = useState();
  
  return (
    <>
      <div className="overlap-7">
        <input
          type="text"
          placeholder="Put your account here"
          className="text-wrapper-8" 
        />
      </div>

      <div className="social-media">
        <select
          value={selectedPlatform}
          onChange={(e) => setSelectedPlatform(e.target.value)}
          className="social-media-wrapper"
          style={{ color: "black" }}
        >
          <option value="" disabled>
            Select Social Media Platform
          </option>
          <option value="Facebook">Facebook</option>
          <option value="Twitter">Twitter</option>
          <option value="Instagram">Instagram</option>
        </select>
      </div>
    </>
  );
};

export default SocialMedia;
