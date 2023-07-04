import React from "react";
import { Link } from "react-router-dom";
import "../Nav/Nav.css";
import SearchBarComponent from "../FiltersComponents/SearchBarComponent";
import TemperamentsComponents from "../FiltersComponents/TemperamentsComponent"
import GramatacialOrderComponent from "../FiltersComponents/GramatacialOrderComponent";
const Nav = ({searchByName}) => {
  return (
    <div className="container">
      <div className="nav_component">
        <Link to="/" className="text">
          <p>Home</p>
        </Link>
      </div>
      <div className="nav_component">
        <Link to={"/form"} className="text">
          <p>Crear</p>
        </Link>
      </div>
      <div className="nav_component">
        <SearchBarComponent/>
      </div>
      <div className="nav_component">
        <TemperamentsComponents/>
      </div>
      <div className="nav_component">
        <GramatacialOrderComponent/>
      </div>
    </div>
  );
};

export default Nav;
