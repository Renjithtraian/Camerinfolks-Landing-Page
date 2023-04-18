import React from 'react';
import './NavbarTwo.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../Components/images/logo1.png';
import drop from '../Components/images/arrow.png';
import toggle from "../Components/images-2/menu-bar.png";

function NavrbarTwo() {
  return (
    <div className='Main-body-2'>
      <Navbar bg="bg-light p-3" variant="dark">
        <Container>
          <Navbar.Brand className="menu-left" href="#home">
            <img src={Logo} alt=""/>
            
          </Navbar.Brand>
          <div className="toggle-menu ml-auto">
              <img src={toggle} alt="" />
            </div>
          <Nav className="menu-right is-active ml-auto m-1 ">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#" style={{textTransform : "uppercase"}}>Life His
            <img src={drop} alt=""/>
            </Nav.Link>
            <Nav.Link className='is-active' href="#">CamerinKids</Nav.Link>
            <Nav.Link className='is-active' href="#">Spark</Nav.Link>
            <Nav.Link className='is-active' href="#">Careers</Nav.Link>
            <Nav.Link className='is-active' href="#">Contact</Nav.Link>

          
          </Nav>
        {/* </Navbar.Collapse> */}
        </Container>
      </Navbar>
    </div>
  )
}

export default NavrbarTwo;
