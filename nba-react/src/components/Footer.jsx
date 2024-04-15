import React, {useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faMapMarked, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <>
      <section className="info_section layout_padding2 navbar-light bg-dark">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="info_contact">
                <h5>Address</h5>
                <div className="contact_link_box">
                  <a href=""><FontAwesomeIcon icon={faMapMarked} className="fontawedefault" /><span>Location</span></a>
                  <a href=""><FontAwesomeIcon icon={faPhone} className="fontawedefault" /><span>Call +01 1234567890</span></a>
                  <a href=""><FontAwesomeIcon icon={faEnvelope} className="fontawedefault" /><span>demo@gmail.com</span></a>
                </div>
              </div>
              <div className="info_social">
                <a href="#"><FontAwesomeIcon icon={faFacebook} /></a>
                <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
                <a href="#"><FontAwesomeIcon icon={faLinkedin} /></a>
                <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
              </div>
            </div>
            <div className="col-md-4">
              <div className="info_link_box">
                <h5>Navigation</h5>
                <div className="info_links">
                  <a className="active" href="index.html"> <i className="fa fa-angle-right" aria-hidden="true"></i> Home <span className="sr-only">(current)</span></a>
                  <a className="" href="about.html"> <i className="fa fa-angle-right" aria-hidden="true"></i> About</a>
                  <a className="" href="why.html"> <i className="fa fa-angle-right" aria-hidden="true"></i> Why Us </a>
                  <a className="" href="team.html"> <i className="fa fa-angle-right" aria-hidden="true"></i> Our Team</a>
                  <a className="" href="testimonial.html"> <i className="fa fa-angle-right" aria-hidden="true"></i> Testimonial</a>
                  <a className="" href="contact.html"> <i className="fa fa-angle-right" aria-hidden="true"></i> Contact Us</a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <h5>Newsletter</h5>
              <form action="">
                <input type="text" placeholder="Enter Your email" />
                <button type="submit">Subscribe</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer  className="footer_section container-fluid navbar-light bg-dark">
        <hr aria-orientation="horizontal" class="chakra-divider css-12jdxm1"></hr>
        <p>
          &copy; <span id="displayYear"></span> All Rights Reserved. Design by
          <a href="https://html.design/">Free Html Templates</a>
        </p>
      </footer>
    </>
  )
};

export default Footer;