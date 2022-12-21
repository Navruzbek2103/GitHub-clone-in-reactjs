import React from 'react';
import "./style.scss";
import {Link} from "react-router-dom"

const index = () => {
   return (
      <div className='card d-flex p-3'>
         <div className="card-inner d-flex justify-content-between">
            <Link to="/" className='card-inner-title fw-semibold'>trafalgar</Link>
            <span className="card-inner-span">Public</span>
         </div>
      </div>
   );
};

export default index;