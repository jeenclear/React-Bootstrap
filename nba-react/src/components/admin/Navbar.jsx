import React, {useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHome, faLock, faToolbox, faTools } from '@fortawesome/free-solid-svg-icons';
import { faNeos } from "@fortawesome/free-brands-svg-icons";

function Header() {

  return (
    <>
      <div className="side_navbar">
        <ul>
          <li><a href="/admin"><FontAwesomeIcon icon={faHome} className="fontawedefault" />Home</a></li>
          <li><a href="/admin/profile"><FontAwesomeIcon icon={faTools} className="fontawedefault" />Account Settings</a></li>
          <li><a href="/admin/adsf"><FontAwesomeIcon icon={faLock} className="fontawedefault" />Security</a></li>
          <li><a href="/admin/ererre"><FontAwesomeIcon icon={faEnvelope} className="fontawedefault" />Payment Methods</a></li>
          <li><a href="/admin/asdff"><FontAwesomeIcon icon={faToolbox} className="fontawedefault" />Inventory</a></li>
        </ul>
        <hr></hr>
        <ul>
          <li><a href="/"><FontAwesomeIcon icon={faNeos} className="fontawedefault" />Back to NBA Top Shot</a></li>
        </ul>
      </div>
    </>
  )
};

export default Header;