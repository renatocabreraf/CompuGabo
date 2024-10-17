import React from "react";

// reactstrap components
// import {
// } from "reactstrap";

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import UneteHeader from "components/Headers/UneteHeader.js";

import DarkFooter from "components/Footers/DarkFooter.js";

// sections for this page

import Unete from "./index-sections/Unete.js";



function Unir() {
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
      <UneteHeader/>
      <div className="wrapper">
     <br/><br/><br/><br/>
          <Unete/>
        </div>
        <DarkFooter />
 
    </>
  );
}

export default Unir;
