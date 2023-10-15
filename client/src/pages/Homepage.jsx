import React from "react";
import Header from "../components/Header";
import Tagline from "../components/Tagline";
import InputText from "../components/InputText";
import UploadImage from "../components/UploadImage";
import SocialMedia from "../components/SocialMedia";

const Homepage = () => {
  return (
    <div className="index">
      <div className="div">
        <Header />
        <Tagline />
        
        <InputText />

        <div className="text-wrapper-6">or</div>
        <UploadImage />
        
        <div className="text-wrapper-7">or</div>
        <SocialMedia />
      </div>
    </div>
  );
};

export default Homepage;
