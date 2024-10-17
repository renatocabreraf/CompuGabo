import React from "react";

// reactstrap components
// import {
// } from "reactstrap";

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";

import DarkFooter from "components/Footers/DarkFooter.js";

// sections for this page

import MustangAmerica from "./index-sections/MustangAmerica.js";
import MCAHeader from "components/Headers/MCAHeader.js";


function MCA() {
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
      <MCAHeader/>
          <MustangAmerica/>
        </div>
        <DarkFooter />
 
    </>
  );
}

export default MCA;
