import React from "react";
import "./style.scss";
import { Link } from "react-router-dom";





const index = ({data}) => {
  console.log(data);
  return (
    <li className="followers-list-item d-flex">
      <Link to="/" className="me-4">
        <img src={data.avatar_url ? data.avatar_url : "Not found"} alt="follower img icon" className="followers-item-img rounded-circle" width={`50px`} />
      </Link>

      <div className="followers-item-wrapper w-100">
        <div className="followers-item-inner d-flex justify-content-between ">
          <h2 className="followers-list-item-title ">Christian Deacon <small className="fw-normal">{data.login}</small></h2>
          <button className="followersBtn btn btn-light border fw-semibold">Follow</button>
        </div>
        <p className="followers-item-text">Open source supporter and I love game/web/back-end dev, network engineering, and modding! Checkout -></p>
      </div>


    </li>
  )
}

export default index;