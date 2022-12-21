import React from "react";
import "./style.scss";
import { NavLink } from "react-router-dom";
import { VscGithub } from "react-icons/vsc";
import { BsSlashSquareFill } from "react-icons/bs";
import { BiBell } from "react-icons/bi";
import { BsPlusLg } from "react-icons/bs";
import { MdArrowDropDown } from "react-icons/md";
import { RxAvatar } from "react-icons/rx";

const index = () => {
  return (
    <header className="bg-dark px-3 py-1">
      <div className="container-fluid">
        <nav className="navbar">
          <div className="navbar-left d-flex gap-3 align-items-center justify-content-start">
            <NavLink to="/" className="nav-link  d-flex align-items-center">
              <VscGithub className="logo bg-white" size={"2.3em"} />
            </NavLink>
            <div className="input-box d-flex align-items-center position-relative">
              <input
                type="text"
                className="search-input form-control p-0 text-white bg-dark"
                placeholder="Search or jump to..."
              />
              <BsSlashSquareFill
                className="bscSlash position-absolute"
                size={`1.2rem`}
                color={"#57606A"}
              />
            </div>
            <ul className="nav-list text-white d-flex align-items-center  gap-3 m-0 list-unstyled">
              <li className="nav-list-item">
                <NavLink
                  to="/pulls"
                  className="nav-item-link text-decoration-none text-white fw-bold"
                >
                  Pull requests
                </NavLink>
              </li>
              <li className="nav-list-item">
                <NavLink
                  to="/issues"
                  className="nav-item-link text-decoration-none text-white fw-bold"
                >
                  Issues
                </NavLink>
              </li>
              <li className="nav-list-item">
                <NavLink
                  to="/"
                  className="nav-item-link text-decoration-none text-white fw-bold"
                >
                  Codespaces
                </NavLink>
              </li>
              <li className="nav-list-item">
                <NavLink
                  to="/"
                  className="nav-item-link text-decoration-none text-white fw-bold"
                >
                  Marketplace
                </NavLink>
              </li>
              <li className="nav-list-item">
                <NavLink
                  to="/"
                  className="nav-item-link text-decoration-none text-white fw-bold"
                >
                  Explore
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="navbar-right d-flex align-items-center">
            <BiBell className="navbar-icon-bell" size={`1.13em`} />
            <div className="add-new d-flex align-items-center">
              <BsPlusLg className="add-new-plus" color="white" size={`.72em`} />
              <MdArrowDropDown
                className="add-new-dropdown"
                size={`1.15em`}
                color="white"
              />
            </div>
            <div className="header-user-info d-flex">
              <RxAvatar color="white" size={`1.3em`} />
              <MdArrowDropDown
                className="header-user-info-dropdown"
                color="white"
                size={`1.15em`}
              />
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default index;
