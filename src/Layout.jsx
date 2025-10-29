import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet /> {/* Routes ka content yahan render hoga */}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
