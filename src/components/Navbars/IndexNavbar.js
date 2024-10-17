import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import {
  Button,
  Collapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  UncontrolledTooltip,
} from "reactstrap";

function IndexNavbar() {
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 399 ||
        document.body.scrollTop > 399
      ) {
        setNavbarColor("");
      } else if (
        document.documentElement.scrollTop < 400 ||
        document.body.scrollTop < 400
      ) {
        setNavbarColor("navbar-transparent");
      }
    };
    window.addEventListener("scroll", updateNavbarColor);
    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });
  return (
    <>
      {collapseOpen ? (
        <div
          id="bodyClick"
          onClick={() => {
            document.documentElement.classList.toggle("nav-open");
            setCollapseOpen(false);
          }}
        />
      ) : null}
      <Navbar className={"fixed-top " + navbarColor} expand="lg" color="info">
        <Container>
          <div className="navbar-translate"
            style={{
              fontFamily: 'Mustang',
              fontSize: '11px'
            }}>
            <NavbarBrand
              href="/index"
              target="_blank"
              id="navbar-brand"
            >
              Mustang Club Guatemala

            </NavbarBrand>
            <img
              src={require("assets/img/LogoMCG.png")}
              style={{
                height: 25,
                width: 25,
              }}
              href="/index"
            ></img>

            <button
              className="navbar-toggler navbar-toggler"
              onClick={() => {
                document.documentElement.classList.toggle("nav-open");
                setCollapseOpen(!collapseOpen);
              }}
              aria-expanded={collapseOpen}
              type="button"
            >
              <span className="navbar-toggler-bar top-bar"></span>
              <span className="navbar-toggler-bar middle-bar"></span>
              <span className="navbar-toggler-bar bottom-bar"></span>
            </button>
          </div>
          <Collapse
            className="justify-content-end"
            isOpen={collapseOpen}
            navbar
          >
            <Nav navbar>
              <NavItem>
                <NavLink
                  href="#pablo"
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .getElementById("download-section")
                      .scrollIntoView();
                  }}
                >


                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/blog" tag={Link}
                  style={{
                    color: "white"
                  }}>
                  Stang Blog
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/unete" tag={Link}
                  style={{
                    color: "white"
                  }}>
                  Únete
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/historia" tag={Link}
                  style={{
                    color: "white"
                  }}>
                  Historia del Mustang
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/mca" tag={Link}
                  style={{
                    color: "white"
                  }}>
                  Historia del MCA
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/servicio" tag={Link}
                  style={{
                    color: "white"
                  }}>
                  Centros de Servicio
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/tienda" tag={Link}
                  style={{
                    color: "white"
                  }}>
                  Market Place
                </NavLink>
              </NavItem>





              <NavItem>
                <NavLink
                  href="https://www.facebook.com/profile.php?id=61556629112773"
                  target="_blank"
                  id="facebook-tooltip"
                >
                  <i className="fab fa-facebook-square"></i>
                  <p className="d-lg-none d-xl-none">Facebook</p>
                </NavLink>
                <UncontrolledTooltip target="#facebook-tooltip">
                  ¡Síguenos en Facebook!
                </UncontrolledTooltip>
              </NavItem>
              <NavItem>
                <NavLink
                  href="https://www.instagram.com/clubmustangguatemala?igsh=MTlkNTJkeWhxOWhobg=="
                  target="_blank"
                  id="instagram-tooltip"
                >
                  <i className="fab fa-instagram"></i>
                  <p className="d-lg-none d-xl-none">Instagram</p>
                </NavLink>
                <UncontrolledTooltip target="#instagram-tooltip">
                  ¡Suíguenos en Instagram!
                </UncontrolledTooltip>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default IndexNavbar;
