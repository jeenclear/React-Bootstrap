import React, {useState} from "react";
import { Outlet } from "react-router-dom";

import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// Styles
import '../assets/css/admin.css';
import '../assets/css/responsive.css';

// Components
import Header from "../components/admin/Header";
import Navbar from "../components/admin/Navbar";
import Footer from "../components/admin/Footer";

function AdminLayout() {
  
  return (
    <>
      <div id="account_panel">
        <Header />

        <section className="marbottom40 container">
          <div className="row">
            <div className="col-md-4"><Navbar /></div>
            <div className="col-md-8">
              <div className="admin-content">
                <Outlet />
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
      
    </>
  )
};

export default AdminLayout;