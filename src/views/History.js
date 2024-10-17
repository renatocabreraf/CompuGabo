import React from "react";

// reactstrap components
// import {
// } from "reactstrap";

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";

import DarkFooter from "components/Footers/DarkFooter.js";

// sections for this page

import Historia from "./index-sections/Historia.js";
import HistoriaHeader from "components/Headers/HistoriaHeader.js";


function History() {
  React.useEffect(() => {
    document.body.classList.add("index-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("index-page");
      document.body.classList.remove("sidebar-collapse");
    };
  });
  return (
    <>
      <IndexNavbar />
      <div className="wrapper">
      <HistoriaHeader/>
          <Historia/>
        </div>
        <DarkFooter />
 
    </>
  );
}

export default History;
