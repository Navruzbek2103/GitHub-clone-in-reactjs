import React, { useState, useEffect } from "react";
import "./style.scss";
import Card from "./../../UI/Card";

const index = () => {

  return (
      <div className="repositories">
        <h2 className="repositories-title mb-2">Popular repositories</h2>
        <ul className="repo-list d-flex w-100 flex-wrap">
          <li className="repo-list-item ">
            <Card />
          </li>
          <li className="repo-list-item ">
            <Card />
          </li>
          <li className="repo-list-item ">
            <Card />
          </li>
          <li className="repo-list-item ">
            <Card />
          </li>
          <li className="repo-list-item ">
            <Card />
          </li>
          <li className="repo-list-item ">
            <Card />
          </li>
          <li className="repo-list-item ">
            <Card />
          </li>
          <li className="repo-list-item ">
            <Card />
          </li>
        </ul>
      </div>
  );
};

export default index;
