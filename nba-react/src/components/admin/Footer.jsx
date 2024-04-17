import React, {useState} from "react";

function Footer() {
  return (
    <>
      <footer  className="footer_admin_section martopandbottom30">
        <div className="container">
          <div className="row">
            <div className="copyright col-md-4">
              &copy; <span id="displayYear"></span> Made by <a href="#">Drapper Labs</a>
            </div>
            <div className="col-md-8">
              <ul>
                <li><a href="#">FAQ</a></li>
                <li><a href="#">Contact us</a></li>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Terms of Service</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
};

export default Footer;