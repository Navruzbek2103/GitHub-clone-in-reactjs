import React from 'react';
import "./style.scss";
import { GoSearch } from "react-icons/go";
import CircleImg from "./../../assets/images/dot-circle-24px.png"
import {ImGithub} from "react-icons/im"
import { Link } from 'react-router-dom';

const index = () => {
   return (
      <div className='container-pull'>
         <div className="sections mt-4 mb-3 d-flex gap-3 align-items-center">
            <ul className="list d-flex border overflow-hidden flex-row rounded-2">
               <li className="list-item">
                  <Link to="/" className="list-item-link text-white text-decoration-none text-dark">Created</Link>
               </li>
               <li className="list-item">
                  <Link to="/" className="list-item-link text-decoration-none text-dark">Assigned</Link>
               </li>
               <li className="list-item">
                  <Link to="/" className="list-item-link text-decoration-none text-dark">Mentioned</Link>
               </li>
               <li className="list-item">
                  <Link to="/" className="list-item-link text-decoration-none text-dark">Review request</Link>
               </li>
            </ul>
            <div className="sections-input-box d-flex align-items-center position-relative">
               <GoSearch className='pulls-search position-absolute' color='#4b535c' />

               <input type="text" className="sections-input bg-light form-control" placeholder="is:open is:pr author:Navruzbek2103 archived:false"/>
            </div>

         </div>
         <div className="section-result border rounded-2 overflow-hidden mb-3">
            <div className="result-header bg-light d-flex px-3 justify-content-between align-items-center">
               <ul className="result-left-list d-flex gap-3 ">
                  <li className="result-left-item">
                     <a href="" className="result-left-item-link position-relative result-left-item-link-active">0 Open</a>
                  </li>
                  <li className="result-left-item">
                     <a href="" className="result-left-item-link position-relative">0 Closed</a>
                  </li>
               </ul>

               <ul className="result-right-list d-flex">
                  <li className="result-right-item">
                     <a href="" className="result-right-item-link position-relative d-flex pe-3 align-items-center   ">Visibility</a>
                  </li>
                  <li className="result-right-item">
                     <a href="" className="result-right-item-link position-relative d-flex pe-3 align-items-center   ">Organization</a>
                  </li>
                  <li className="result-right-item">
                     <a href="" className="result-right-item-link position-relative d-flex pe-3 align-items-center   ">Sort</a>
                  </li>
               </ul>
            </div>
            <div className="result-body d-flex flex-column align-items-center">
               <img src={CircleImg} alt="circle icon" className="result-body-img mb-2" />
               <h2 className="result-body-title">No results matched your search.</h2>
               <p className="result-body-text">You could search <a href="https://github.com/search" target="blank">all of GitHub</a> or try an <a href="https://github.com/search/advanced" target="blank">advanced search.</a></p>
            </div>
         </div>
         <p className="protip-text w-100 position-relative text-center"><span className="protip-text-span">ProTip!</span> Follow long discussions with <a href="https://github.com/issues?q=is%3Aopen+is%3Apr+author%3ANavruzbek2103+archived%3Afalse+comments%3A%3E50" target="blank">comments:/50.</a></p>
         <hr />

      </div>
   );
};

export default index;