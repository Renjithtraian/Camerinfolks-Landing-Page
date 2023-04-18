import React from "react";
import "./NavbarOne.css";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Navbar from 'react-bootstrap/Navbar';
import Gmail from '../Components/images/email.png';
import locationImg from '../Components/images/placeholder.png';

function NavbarOne() {
  return (
    <div className="Main-body">
      {/* <div className="header"> */}
        {/* <div className="row align-items-center "> */}
          <Navbar  className="align-items-center" expand="lg">
            <Container >
                <div className="col-lg-6">
                <ul style={{listStyle : "none",display : "flex"}} className="list-items mt-1 p-1 text-align-center">
                    <li className="info-list">
                        <Nav.Link href="#">
                        <img src={Gmail} alt=""/>    
                        info@camerinfolks.com
                        </Nav.Link>
                    </li>
                    <li className="info-list-2">
                    <img src={locationImg} alt=""/>
                    <span>1st Floor, Mythri Buildings</span>
                    </li>
                </ul>
                </div>
                <div className="col-lg-3"></div>
                <div className="col-lg-3 ml-auto">
              <div className="right-info" style={{display : "flex"}}>
                <Nav.Link className="navTag mt-1" href="#">
                    <span>Call Now : </span>
                    <h1>7736421092</h1>
                </Nav.Link>
                <Nav.Link className="navTag-2" href="#">
                    <h3>demo register</h3>
                </Nav.Link>
              </div>
              </div>
            
                
            </Container>
          </Navbar>
        </div>
      // </div>
    // </div>
  );
}

export default NavbarOne;
