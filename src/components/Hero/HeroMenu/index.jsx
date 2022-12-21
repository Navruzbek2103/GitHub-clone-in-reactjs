import React from "react";
import { NavLink } from "react-router-dom";
import "./style.scss";
import { RiBookOpenLine } from "react-icons/ri";
import { RiGitRepositoryLine } from "react-icons/ri";
import { AiOutlineStar } from "react-icons/ai";
import { FiBox } from "react-icons/fi";
import { TbTable } from "react-icons/tb";

const index = () => {
  return (
    <div className="hero-menu-wrapper position-sticky">
      <ul className="hero-menu-list w-50  mx-auto align-items-center d-flex ">
        <li className="hero-menu-list-item hero-menu-list-item-active">
          <div className="menu-list-box rounded-2 d-flex align-items-center gap-1">
            <RiBookOpenLine className="hero-menu-icon" size={`1.2em`} />
            <NavLink to="/" className="list-item-link text-dark fw-normal">
              Overview
            </NavLink>
          </div>
        </li>

        <li className="hero-menu-list-item">
          <div className="menu-list-box rounded-2 d-flex align-items-center gap-1">
            <RiGitRepositoryLine className="hero-menu-icon" size={`1.1em`} />
            <NavLink to="/" className="list-item-link text-dark fw-normal">
              Repositories
            </NavLink>
            <span className="menu-list-span rounded-4 fw-semibold">24</span>
          </div>
        </li>

        <li className="hero-menu-list-item">
          <div className="menu-list-box rounded-2 d-flex align-items-center gap-1">
            <TbTable className="hero-menu-icon" size={`1.3em`} />
            <NavLink to="/" className="list-item-link text-dark fw-normal">
              Projects
            </NavLink>
          </div>
        </li>

        <li className="hero-menu-list-item">
          <div className="menu-list-box rounded-2 d-flex align-items-center gap-1">
            <FiBox className="hero-menu-icon" size={`1.1em`} />
            <NavLink to="/" className="list-item-link text-dark fw-normal">
              Packages
            </NavLink>
          </div>
        </li>
        <li className="hero-menu-list-item">
          <div className="menu-list-box rounded-2 d-flex align-items-center gap-1">
            <AiOutlineStar className="hero-menu-icon" size={`1.2em`} />
            <NavLink to="/" className="list-item-link text-dark fw-normal">
              Stars
            </NavLink>
            <span className="menu-list-span rounded-4 fw-semibold">24</span>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default index;
