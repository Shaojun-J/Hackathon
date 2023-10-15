import React from "react";
import Header from "../components/Header";
import Tagline from "../components/Tagline";
import InputText from "../components/InputText";
import UploadImage from "../components/UploadImage";
import SocialMedia from "../components/SocialMedia";

const Homepage = () => {
  return (
    <>
      <Header />
      <Tagline />

      <InputText />

      <UploadImage />

      <SocialMedia />
    </>
  );
};

export default Homepage;
