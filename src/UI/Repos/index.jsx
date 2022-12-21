import React from "react";
import "./style.scss";
import {Link} from "react-router-dom";
import {VscCircleLargeFilled} from "react-icons/vsc"
import {FiStar} from "react-icons/fi"
import {VscRepoForked} from "react-icons/vsc"
import {MdArrowDropDown} from "react-icons/md"

const index = () => {
  return <li className="repositories-item d-flex align-items-center justify-content-between">
    <div className="repositories-item-left d-flex flex-column gap-2">
      <div className="repositories-name d-flex align-items-center gap-2">
        <Link to="/" className="repositories-name-title fw-semibold">Exam-github</Link>
        <span className="repositories-name-span fw-semibold border rounded-4">Public</span>
      </div>
      <div className="repositories-item-left-box d-flex align-items-center gap-3">
        <p className="repositories-item-left-box-text d-flex align-items-center gap-1"><VscCircleLargeFilled color="#f5e50b" size={`1.1em`}/> JavaScript</p>

        <Link to="/" className="repositories-item-left-box-star text-dark gap-1 d-flex align-items-center"><FiStar className="repositories-item-left-star-icon" color="dimgrey" size={`1.2em`} /> 2</Link>

        <Link to="/" className="repositories-item-left-box-star text-dark gap-1 d-flex align-items-center"><VscRepoForked className="repositories-item-left-star-icon" color="dimgrey" size={`1.2em`} /> 9</Link>

        <p className="repositories-item-update">Updated 3 weeks ago</p>
      </div>
    </div>
    <div className="repositories-item-right">
      <div className="btn-group mb-3 p-0" aria-label="Second group">
        <button type="button" className="btn btn-light py-1 px-2  border border-end-3">
        <FiStar className="repositories-item-left-star-icon " color="dimgrey" size={`1.2em`} />
        </button>
        <button type="button" className="btn btn-light py-1 px-2  border border-start-0 fw-semibold">Star</button>
        <button type="button" className="btn btn-light py-1 px-2  border">
          <MdArrowDropDown className="repositories-item-dropdown " size={`1em`}/>
        </button>
      </div>
      <div className="repositories-underline"></div>
    </div>
  </li>

}

export default index;