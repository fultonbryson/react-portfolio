import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import contactImage from "../../../static/assets/images/auth/login.jpg";

export default function () {
  return (
    <div className='content-page-wrapper'>
      <div
        className='left-column'
        style={{
          backgroundImage: `url(${contactImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div className='right-column'>
        <h2>Bryson Fulton</h2>

        <div className='contact'>
          <div className='icon'>
            <FontAwesomeIcon icon='envelope' />
          </div>
          <h3>dev.brysonfulton@gmail.com</h3>
        </div>

        <div className='contact'>
          <div className='icon'>
            <FontAwesomeIcon icon='mobile' />
          </div>
          <h3>(385) 313 - 6063</h3>
        </div>
      </div>
    </div>
  );
}
