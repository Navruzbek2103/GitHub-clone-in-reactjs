import React, {useState, useEffect} from "react";
import "./style.scss";
import UserInfo from "./../../Sidebar"
import Overview from "./../../../UI/Card"

const index = () => {
  const data = ['Salom', "world", "hi", "what's up", "how to", 'bag']

  return <div className="container">
    <div className="wrap d-flex ">
      <UserInfo />
      <div className="repositories">
        <h2 className="repositories-title mb-2">Popular repositories</h2>
        <ul className="repo-list d-flex w-100 flex-wrap">
          <li className="repo-list-item ">
            <Overview />
          </li>
          <li className="repo-list-item ">
            <Overview />
          </li>
          <li className="repo-list-item ">
            <Overview />
          </li>
          <li className="repo-list-item ">
            <Overview />
          </li>
          <li className="repo-list-item ">
            <Overview />
          </li>
          <li className="repo-list-item ">
            <Overview />
          </li>
          <li className="repo-list-item ">
            <Overview />
          </li>
          <li className="repo-list-item ">
            <Overview />
          </li>

        </ul>

      </div>
    </div>
    <hr />
  </div>
}

export default index;
// import { Link } from "react-router-dom";
// import { BsSdCard } from "react-icons/bs";


// const index = () => (
//   return (

//   )
// );

// export default index;
