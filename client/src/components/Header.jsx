import React from "react";

const Header = () => {
  return (
    <div className="overlap">
      <div className="overlap-group">
        <div className="text-wrapper">Log in</div>
      </div>
      <div className="div-wrapper">
        <div className="text-wrapper-2">Sign up</div>
      </div>
      <div className="overlap-2">
        <img
          className="line"
          alt="Line"
          src="https://cdn.animaapp.com/projects/652aa011bab172ab385d1614/releases/652aaa6b06102a4c5647abb0/img/line-1.svg"
        />
        <div className="text-wrapper-3">ExposeAlert</div>
        <img
          className="search-off"
          alt="Search off"
          src="https://cdn.animaapp.com/projects/652aa011bab172ab385d1614/releases/652aaa6b06102a4c5647abb0/img/search-off.svg"
        />
      </div>
    </div>
  );
};

export default Header;
