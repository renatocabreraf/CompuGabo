/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";
// core components

function TallerHeader() {
  let pageHeader = React.createRef();

  React.useEffect(() => {
    if (window.innerWidth > 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });

  return (
    <>
      <div className="page-header clear-filter" filter-color="blue">
        <div
          className="page-header-image"
          style={{
            backgroundImage: "url(" + require("assets/img/taller.png") + ")"
          }}
          ref={pageHeader}
        ></div>
        <Container>
          <div className="content-center brand">
          <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            <img
              src={require("assets/img/18c6725c2f41b481e00eccdb22bfbb00.png")}
              style={{
                width:"50%"
              }}
            ></img>
            
            <h1 className="h1-seo"
            style={{
              fontFamily:'Mustang'
            }}> cENTROS
            <br/>de sERVICIO</h1>
          </div>
        </Container>
      </div>
    </>
  );
}

export default TallerHeader;
