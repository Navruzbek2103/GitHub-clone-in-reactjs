import React from "react";
import "./style.scss";
import { Link } from "react-router-dom";
import { HiOutlineUsers } from "react-icons/hi";
import { BsDot } from "react-icons/bs";
import { HiOutlineLocationMarker } from "react-icons/hi";
import AvatarImg from "./../../assets/images/avatar.jpg";
import { GiNinjaArmor } from "react-icons/gi";

const index = () => {
  return (
    <div className="user-info">
      <div className="avatar rounded-circle overflow-hidden mb-3">
        <img
          src={AvatarImg}
          width="100%"
          alt="avatar img"
          className="avatar-img"
        />
        {/* <div className="avatar-icon">
          <BsDot size={`5em`} />
          Ninja
        </div> */}
      </div>
      <h2 className="user-info-title fs-4">Mirziyod</h2>
      <p className="user-info-text mb-2">Mirziyod-saidov</p>
      <p className="user-info-desc mb-3">I am a normal person</p>
      <button className="btn-follow fw-semibold mb-3 w-100 py-1 border rounded-2">
        Follow
      </button>
      <ul className="user-info-list ">
        <li className="user-info-item d-flex gap-1 mb-3">
          <Link to="/" className="follow d-flex align-items-center">
            <HiOutlineUsers
              className="follow-icon"
              color="grey"
              size={`1.1em`}
            />
            <span className="fw-semibold">3</span> followers
          </Link>
          <Link to="/" className="follow d-flex align-items-center">
            <BsDot className="follow-icon" color="grey" size={`.6em`} />
            <span className="fw-semibold">4</span> following
          </Link>
        </li>
        <li className="user-info-item d-flex align-items-center gap-2 mb-2">
          <HiOutlineLocationMarker size={`1.1em`} />
          Uzbekistan, Ferghana
        </li>

        <li className="user-info-item d-flex align-items-center gap-2">
          Block or Report
        </li>
      </ul>
    </div>
  );
};

export default index;
