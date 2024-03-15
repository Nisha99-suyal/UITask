import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import "../scss/Home.scss";
import VerticalNav from "./VerticalNav";
import Footer from "./Footer";

function Home() {
  return (
    <div className="nav-wrapper">
      <VerticalNav />
      <div className="content-body">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </div>
  );
}

export default Home;
