import React from "react";

const Tagline = () => {
  return (
    <div className="text-center text-white mx-auto mt-[150px]">
      <div className="text-6xl font-bold border-8 border-orange-500 rounded-2xl text-white bg-transparent inline-block p-8">
        <p>
          {"{{( >_< )}} -- am i vulnerable?"}
        </p>
      </div>
      <div className="my-6 text-xl">
        <p>Check if your posts make you an easy target for social engineering attacks</p>
      </div>
    </div>
  );
};

export default Tagline;
