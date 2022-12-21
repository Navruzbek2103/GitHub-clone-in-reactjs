import React, {useState, useEffect, useRef} from "react";
import { NavLink } from "react-router-dom";
import "./style.scss";
import { RiBookOpenLine } from "react-icons/ri";
import { RiGitRepositoryLine } from "react-icons/ri";
import { AiOutlineStar } from "react-icons/ai";
import { FiBox } from "react-icons/fi";
import { TbTable } from "react-icons/tb";
import {API} from './../../../api/api';


const index = () => {
  const [repos, setRepos] = useState([])

  useEffect(() => {
    API.getRepos().then((result) => {
      setRepos(result.data)
    })
  }, [])

  // const menu = useRef();

  const stars = repos.filter((element) => element.stargazers_count != 0)

  return (
    <div className="hero-menu-wrapper position-sticky">
      <ul className="hero-menu-list w-50  mx-auto align-items-center d-flex ">
        <li className="hero-menu-list-item">
          <NavLink to="/" className={`list-item-link rounded-2 d-flex align-items-center gap-1 text-dark fw-normal ${({isActive}) => isActive ? "fw-bold" : ""} `}>
            <RiBookOpenLine className="hero-menu-icon" size={`1.2em`} />
            Overview
          </NavLink>
        </li>

        <li className="hero-menu-list-item">
          <NavLink to="/repositories" className={`list-item-link rounded-2 text-dark fw-normal d-flex align-items-center gap-1 `}>
            <RiGitRepositoryLine className="hero-menu-icon" size={`1.1em`} />
            Repositories
            <span className="menu-list-span rounded-4 fw-semibold">{repos.length}<sup>+</sup></span>
          </NavLink>
        </li>

        <li className="hero-menu-list-item">
          <NavLink to="/projects" className="list-item-link d-flex align-items-center gap-1 text-dark fw-normal rounded-2">
            <TbTable className="hero-menu-icon" size={`1.3em`} />
            Projects
          </NavLink>
        </li>

        <li className="hero-menu-list-item">
          <NavLink to="/" className="list-item-link rounded-2 d-flex align-items-center gap-1 text-dark fw-normal">
          <FiBox className="hero-menu-icon" size={`1.1em`} />
            Packages
          </NavLink>
        </li>
        <li className="hero-menu-list-item">
          <NavLink to="/" className="list-item-link rounded-2  d-flex align-items-center gap-1 text-dark fw-normal">
            <AiOutlineStar className="hero-menu-icon" size={`1.2em`} />
            Stars
            <span className="menu-list-span rounded-4 fw-semibold">{stars.length}<sup>+</sup></span>
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default index;
