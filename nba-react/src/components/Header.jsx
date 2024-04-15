import React, {useState} from "react";
import ReactDOM from "react-dom/client";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faUser } from '@fortawesome/free-solid-svg-icons';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';

import service1 from '../assets/images/top-shot-logo-horizontal-white.svg';
import DefaultAvatar from '../assets/images/avatar-default.png';

function Header() {
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const styles = {
    logo:{
      width: "70px",
      marginRight: "5px",
    },
    logoText:{
      fontSize: "13px",
    },
    avatar:{
      width: "37px",
      borderRadius: "100px",
    },
    menuimg:{
      width: "100%",
    },
    menu:{
      padding: "40px",
    },
    mypageLink:{
      padding: "0",
    },
    weltext:{
      fontSize: "13px",
    }
  };

  const DropdownMenu = () => {
    return (
      <div className="custom-menu-wrap">
        <div class="custom-menu">
          <ul>
            <li><a href="#">
              <span style={styles.weltext}>Welcome</span><br/>
              <span>Hi, Edjeen</span>
            </a></li>
            <li><a href="#">Menu 1</a></li>
            <li><hr /></li>
            <li><a href="#">Menu 1</a></li>
            <li><a href="#">Menu 1</a></li>
            <li><a href="#">Menu 1</a></li>
            <li><hr /></li>
            <li><a href="#">Deposit Dapper Balances</a></li>
            <li><a href="#">Menu 1</a></li>
          </ul>
        </div>
      </div>
    );
  };

  const handleMouseEnter = () => {
    setDropdownVisible(true);
  };

  const handleMouseLeave = () => {
    setDropdownVisible(false);
  };

  return (
    <>
      <header className="header_section container-fluid">
        {['lg'].map((expand) => (
          <Navbar key={expand} expand={expand} bg="dark" data-bs-theme="dark" className="xs-3 mb-3">
            <Container fluid>
              <Navbar.Brand href="#">
                <img src={service1} style={styles.logo}  alt="" /><span style={styles.logoText}>BETA</span>
              </Navbar.Brand>
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
                  
                  <Nav className="justify-content-start flex-grow-1 pe-3">
                    <Nav.Link href="#action1">PACKS</Nav.Link>
                    <Nav.Link href="#action2">MARKETPLACE</Nav.Link>

                    <NavDropdown
                      title="DISCOVER"
                      id={`offcanvasNavbarDropdown-expand-${expand}`}
                    >
                      <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                      <NavDropdown.Item href="#action4">
                        Another action
                      </NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item href="#action5">
                        Something else here
                      </NavDropdown.Item>
                    </NavDropdown>

                    <NavDropdown
                      title="PLAY"
                      id={`offcanvasNavbarDropdown-expand-${expand}`}
                    >
                      <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                      <NavDropdown.Item href="#action4">
                        Another action
                      </NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item href="#action5">
                        Something else here
                      </NavDropdown.Item>
                    </NavDropdown>

                    <NavDropdown
                      title="MY COLLECTION"
                      id={`offcanvasNavbarDropdown-expand-${expand}`}
                    >
                      <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                      <NavDropdown.Item href="#action4">
                        Another action
                      </NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item href="#action5">
                        Something else here
                      </NavDropdown.Item>
                    </NavDropdown>

                    <NavDropdown
                      title="COMMUNITY    "
                      id={`offcanvasNavbarDropdown-expand-${expand}`}
                    >
                      <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                      <NavDropdown.Item href="#action4">
                        Another action
                      </NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item href="#action5">
                        Something else here
                      </NavDropdown.Item>
                    </NavDropdown>
                  </Nav>

                  <Nav className="justify-content-end flex-grow-1 pe-3">
                    <Nav.Link href="#action1" style={styles.mypageLink}>
                      <div
                          className="menu"
                          onMouseEnter={handleMouseEnter}
                          onMouseLeave={handleMouseLeave}
                        >
                          <div className="avatar"> 
                            <img src={DefaultAvatar} style={styles.avatar}  alt="" />
                            <span className="avatar-active"></span>
                          </div>
                          {isDropdownVisible && <DropdownMenu />}
                      </div>
                    </Nav.Link>
                  </Nav>

                  <Form className="d-flex">
                    <Form.Control
                      type="search"
                      placeholder="Search"
                      className="me-2"
                      aria-label="Search"
                    />
                    <Button variant="outline-success">
                      <FontAwesomeIcon icon={faSearch} />
                    </Button>
                  </Form>

                </Offcanvas.Body>
              </Navbar.Offcanvas>
            </Container>
          </Navbar>
        ))}
      </header>
    </>
  )
};

export default Header;