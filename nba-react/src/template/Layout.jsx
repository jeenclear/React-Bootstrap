import React, {useState} from "react";
import { Outlet, Link } from "react-router-dom";

import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

// Styles
import '../assets/css/style.css';
import '../assets/css/responsive.css';

// Components
import Header from "../components/Header";
import Footer from "../components/Footer";

function Layout() {
  
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
};

export default Layout;