/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";

function DarkFooter() {
  return (
    <footer className="footer" data-background-color="black">
      <Container>
        <nav>
          <ul>
            <li>
              <a
                href="/index"
                target="_blank"
              >
                CompuGabo
              </a>
            </li>
            
            <li>
              
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
  );
}

export default DarkFooter;
