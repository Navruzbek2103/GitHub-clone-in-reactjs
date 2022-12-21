import React from "react";
import "./style.scss";
import {Link} from "react-router-dom";
import {VscCircleLargeFilled} from "react-icons/vsc"
import {FiStar} from "react-icons/fi"
import {VscRepoForked} from "react-icons/vsc"
import {MdArrowDropDown} from "react-icons/md"

const index = ({data}) => {
  let year = (new Date().getFullYear() - data.updated_at.split("T")[0].slice(0, 4))
  let month = ((new Date().getMonth()+1) - data.updated_at.split("T")[0].slice(5, 7))

  return <li className="repositories-item d-flex align-items-center justify-content-between">
    <div className="repositories-item-left d-flex flex-column gap-2">
      <div className="repositories-name d-flex align-items-center gap-2">
        <Link to="/" className="repositories-name-title fw-semibold">{data.name}</Link>
        <span className="repositories-name-span fw-semibold border rounded-4">Public</span>
      </div>
      <div className="repositories-item-left-box d-flex align-items-center gap-3">
        <p className="repositories-item-left-box-text d-flex align-items-center gap-1"><VscCircleLargeFilled color={`${data.language == "JavaScript" ? "#f5e50b" : data.language == "CSS" ? "#563D7C" : data.language == "SCSS" ? "#C6538C" : data.language == 'HTML' ? "red" : "green"} `} size={`1.1em`}/> {data.language}</p>




        <Link to="/" className={`repositories-item-left-box-star text-dark gap-1 d-flex align-items-center ${!data.stargazers_count ? "d-none" : ""}`}><FiStar className="repositories-item-left-star-icon" color="dimgrey" size={`1.2em`} /> 2</Link>

        {/* <Link to="/" className="repositories-item-left-box-star text-dark gap-1 d-flex align-items-center"><VscRepoForked className="repositories-item-left-star-icon" color="dimgrey" size={`1.2em`} /> 9</Link> */}
        {/* 3 weeks */}
        <p className="repositories-item-update">Updated {year > 0 ? `${year} year` : month > 0 ? `${month} month` : ""} ago</p>
      </div>
    </div>
    <div className="repositories-item-right">
      <div className="btn-group mb-3 p-0" aria-label="Second group">
        <button type="button" className="btn btn-light py-1 px-2  border border-end-3">
        <FiStar className="repositories-item-left-star-icon " color={data.stargazers_count ? "gold" : "dimgrey"} size={`1.2em`} />
        </button>
        <button type="button" className="btn btn-light py-1 px-2  border border-start-0 fw-semibold">{data.stargazers_count ? "Starred" : "Star"}</button>
        <button type="button" className="btn btn-light py-1 px-2  border">
          <MdArrowDropDown className="repositories-item-dropdown " size={`1em`}/>
        </button>
      </div>
      <div className="repositories-underline"></div>
    </div>
  </li>

}

export default index;