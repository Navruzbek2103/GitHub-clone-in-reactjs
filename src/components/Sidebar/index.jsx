import React, {useState, useEffect} from 'react';
import "./style.scss";
import { Link } from "react-router-dom";
import { HiOutlineUsers } from "react-icons/hi";
import { BsDot } from "react-icons/bs";
import { HiOutlineLocationMarker } from "react-icons/hi";
import AvatarImg from "./../../assets/images/avatar.jpg";
import { API } from '../../api/api';

const index = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    API.getUser().then((result) => {
      setData(result.data)
    })
  }, [])
  console.log(data)

   return (
      <div className="user-info">
        <div className="avatar rounded-circle overflow-hidden mb-3">
          <img
            src={`${data.avatar_url ? data.avatar_url : " "}`}
            width="100%"
            alt="avatar img"
            className="avatar-img"
          />
        </div>
        <h2 className="user-info-title fs-4">{`${data.name ? data.name : "user name"}`}</h2>
        <p className="user-info-text mb-2">{`${data.login ? data.login : "user login"}`}</p>
        <p className="user-info-desc mb-3">{`${data.bio ? data.bio : ""}`}</p>
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
              <span className="fw-semibold">{`${data.followers ? data.followers : "0"}`}</span> followers
            </Link>
            <Link to="/" className="follow d-flex align-items-center">
              <BsDot className="follow-icon" color="grey" size={`.6em`} />
              <span className="fw-semibold">{`${data.following ? data.following : "0"}`}</span> following
            </Link>
          </li>
          <li className="user-info-item d-flex align-items-center gap-2 mb-2">
            <HiOutlineLocationMarker size={`1.1em`} />
            {`${data.location ? data.location : ""}`}
          </li>

          <li className={`user-info-item d-flex align-items-center gap-2 ${data.name === "Navruzbek" ? "d-none" : ""}`}>
            Block or Report
          </li>
        </ul>
      </div>
   );
};

export default index;