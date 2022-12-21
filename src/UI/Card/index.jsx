import React from 'react';
import "./style.scss";
import {Link} from "react-router-dom"
import {VscCircleFilled } from "react-icons/vsc"
import {FiStar} from "react-icons/fi"

const index = () => {
   return (
      <div className='card d-flex p-3'>
         <ul className="card-repo-list d-flex flex-column gap-2">
            <li className="card-repo-item d-flex justify-content-between fw-semibold ">
               <Link to="/" className='card-repo-item-title'>trafalgar</Link>
               <span className="card-repo-item-span border rounded-4 ">Public</span>
            </li>

            <li className="card-repo-item d-flex justify-content-between fw-semibold ">
               html, css
            </li>

            <li className="card-repo-item d-flex justify-content-between fw-semibold ">
               <ul className="card-desc-list d-flex align-items-center gap-3">
                  <li className="card-desc-item d-flex align-items-center">
                     <VscCircleFilled size={`1.5em`} color="darkred"/>
                     HTML
                  </li>
                  <li className="card-desc-item d-flex align-items-center gap-1">
                     <FiStar size={`1.2em`} color="dimgrey"/>
                     2
                  </li>
               </ul>
            </li>
         </ul>
      </div>
   );
};

export default index;