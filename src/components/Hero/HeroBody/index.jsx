import React, {useState, useEffect} from "react";
import "./style.scss";
import SideBar from "./../../Sidebar"
import {Outlet} from "react-router-dom";

const index = () => {

  return <div className="container">
    <div className="wrap d-flex ">
      <SideBar />
      <Outlet/>
    </div>
    <hr />
  </div>
}

export default index;
