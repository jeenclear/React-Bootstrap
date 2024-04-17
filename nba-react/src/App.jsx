import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./template/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import NoPage from "./pages/NoPage";

//Admin
import AdminLayout from "./template/AdminLayout";
import Admin from "./pages/account/Admin";
import Profile from "./pages/account/Profile";
import AdminNoPage from "./pages/account/NoPage";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/*" element={<NoPage />} />
            </Route>
            
            <Route path="/admin" element={<AdminLayout />}>
              <Route index element={<Admin />} />
              <Route path="/admin/profile" element={<Profile />} />
              <Route path="/admin/*" element={<AdminNoPage />} />
            </Route>
        </Routes>
      </BrowserRouter> 
    </>
  )
}

export default App
