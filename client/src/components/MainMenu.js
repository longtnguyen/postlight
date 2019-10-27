import React from "react";
import {Link } from 'react-router-dom';
export const MainMenu = () => {
  return (
    <div>
      <Link to="/">
        <button>Home</button>
      </Link>
      <Link to="/Department">
        <button>Department</button>
      </Link>
      <Link to="/Location">
        <button>Location</button>
      </Link>
      <Link to="/Random">
        <button>Random</button>
      </Link>
    </div>
  )
}