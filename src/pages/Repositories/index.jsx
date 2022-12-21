import React, {useState, useEffect} from "react";
import "./style.scss"
import {MdArrowDropDown} from "react-icons/md"
import {RiBookLine} from "react-icons/ri"
import Repository from "./../../UI/Repos"
import {API} from "./../../api/api"


const index = () => {
  const [data, setData] = useState([]);
  // data

  useEffect(()=> {
    API.getRepos().then(result => {
      setData(result.data)
    })

  },[])
  console.log(data);

  return <div className="repositories">
    <div className="repositories-search d-flex gap-3">
      <input type="text" className="find-repo form-control" placeholder="Find a repository" />
      <div className="repositories-search-btn-group d-flex gap-1">
        <button className="btn btn-light border d-flex align-items-center gap-1 fw-semibold">Type <MdArrowDropDown size={`1.4em`} /> </button>
        <button className="btn btn-light border d-flex align-items-center gap-1 fw-semibold">Language <MdArrowDropDown size={`1.4em`} /></button>
        <button className="btn btn-light border d-flex align-items-center gap-1 fw-semibold">Sort <MdArrowDropDown size={`1.4em`} /></button>
      </div>
      {/* <button className="btn btn-success d-flex align-items-center gap-1 fw-semibold"><RiBookLine size={`1.2em`} />New</button> */}
    </div>
    <ul className="repositories-list">
      {data.length > 0 ? data.map((repo) => {
        return <Repository data={repo} />
      }) : <h2>Not found</h2>}
    </ul>
  </div>
}

export default index;