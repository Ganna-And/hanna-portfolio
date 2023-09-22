import React, { useEffect, useState } from "react";

const Header = () => {
  return (
    <header>
      <label className="label cursor-pointer">
        <input type="checkbox" className="toggle" checked />
      </label>

      <button className="projects_btn">
        <p className="text">PROJECTS</p>
      </button>
    </header>
  );
};

export default Header;
