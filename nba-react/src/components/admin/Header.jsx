import React, {useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHome, faLock, faToolbox, faTools } from '@fortawesome/free-solid-svg-icons';
import { faNeos } from "@fortawesome/free-brands-svg-icons";
import ReactDOM from "react-dom/client";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import DefaultAvatar from '../../assets/images/avatar-default.png';

function Header() {
  const styles = {
    avatar:{
      borderRadius: "50% 50% 22% 22%",
      minWidth: "0",
      maxWidth: "100%",
      width: "46px",
      height: "46px",
    },
  };

  return (
    <>
      <header className="header_section marbottom40">

      {['md'].map((expand) => (
          <Navbar key={expand} expand={expand} bg="dark" data-bs-theme="dark" className="xs-3">
            <Container fluid>
              

              <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
              <Navbar.Offcanvas
                id={`offcanvasNavbar-expand-${expand}`}
                aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                placement="end"
              >
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                    Offcanvas
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <Nav className="justify-content-center flex-grow-1 pe-3">
                    <Nav.Link href="/admin"><FontAwesomeIcon icon={faHome} className="fontawedefault10" />Home</Nav.Link>
                    <Nav.Link href="/admin/profile"><FontAwesomeIcon icon={faTools} className="fontawedefault10" />Account Settings</Nav.Link>
                    <Nav.Link href="/admin/asdfsdf"><FontAwesomeIcon icon={faLock} className="fontawedefault10" />Security</Nav.Link>
                    <Nav.Link href="/admin/erasr"><FontAwesomeIcon icon={faEnvelope} className="fontawedefault10" />Payment Methods</Nav.Link>
                    <Nav.Link href="/admin/asdf"><FontAwesomeIcon icon={faToolbox} className="fontawedefault10" />Inventory</Nav.Link>
                    <hr></hr>
                    <Nav.Link href="/"><FontAwesomeIcon icon={faNeos} className="fontawedefault10" />Back to NBA Top Shot</Nav.Link>
                  </Nav>
                </Offcanvas.Body>
              </Navbar.Offcanvas>
              
              <Navbar.Brand href="/admin/profile" className="logo_text">Dapper</Navbar.Brand>
              <Navbar.Brand href="/admin/profile"><img src={DefaultAvatar}  alt="" style={styles.avatar} /></Navbar.Brand>

            </Container>
          </Navbar>
        ))}

        <div className="header_info container">
          <div className="row">
            <div className="logo_text col-md-6"><a href="/admin/profile">Dapper</a></div>
            <div className="user_id col-md-6">
              <a href="#"><img src={DefaultAvatar}  alt="" style={styles.avatar} />user85854230</a>
            </div>
          </div>
        </div>

        <div className="accounts_bar">
          With Dapper, you can use crypto or credit cards for groundbreaking 
          apps on Flow. Easy, secure, and up to $1M in asset deposits/withdrawals daily.
        </div>
      </header>
    </>
  )
};

export default Header;