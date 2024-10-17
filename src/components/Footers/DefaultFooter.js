/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";

// core components

function DefaultFooter() {
  return (
    <>
      <footer className="footer footer-default">
      <Container>
        <nav>
          <ul>
            <li>
              <a
                href="/index"
                target="_blank"
              >
                Mustang Club Guatemala
              </a>
            </li>
            
            <li>
              <a
                href="#"
                target="_blank"
              >
                Blog
              </a>
            </li>
          </ul>
        </nav>
        <div className="copyright" id="copyright">
          © {new Date().getFullYear()}, Coded and Designed by{" "}
          <a
            href="https://www.kindmindgt.com/"
            target="_blank"
          >
            Kind Mind
          </a>
          
          .
        </div>
      </Container>
      </footer>
    </>
  );
}

export default DefaultFooter;
