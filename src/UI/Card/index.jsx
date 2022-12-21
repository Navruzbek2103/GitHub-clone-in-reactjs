import React from 'react';
import "./style.scss";
import {Link} from "react-router-dom"
import {VscCircleFilled } from "react-icons/vsc"
import {FiStar} from "react-icons/fi"

const index = ({repo}) => {

   // console.log(repo)
   return (
      <div className='card d-flex p-3 '>
         <ul className="card-repo-list d-flex flex-column gap-4">
            <li className="card-repo-item d-flex justify-content-between fw-semibold ">
               <Link to="/" className='card-repo-item-title'>{repo.name ? repo.name : "Not found"}</Link>
               <span className="card-repo-item-span border rounded-4 ">{repo.visibility === "public" ? "Public" : "Private"}</span>
            </li>


            <li className="card-repo-item d-flex justify-content-between fw-semibold ">
               <ul className="card-desc-list d-flex align-items-center gap-3">
                  <li className="card-desc-item d-flex align-items-center">
                     <VscCircleFilled size={`1.5em`} color={repo.language == "JavaScript" ? "#f5e50b" : repo.language == "CSS" ? "#563D7C" : repo.language == "SCSS" ? "#C6538C" : repo.language == "HTML" ? "red" : "green"}/>
                     HTML
                  </li>
                  <li className="card-desc-item d-flex align-items-center gap-1">
                     <FiStar className='card-desc-item-star' size={`1.2em`} color="dimgrey"/>
                     {repo.stargazers_count ? repo.stargazers_count : ""}
                  </li>
               </ul>
            </li>
         </ul>
      </div>
   );
};

export default index;