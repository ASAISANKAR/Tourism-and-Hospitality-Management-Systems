import React from "react";
import {Navbar , Container,NavDropdown, Collapse,Nav} from 'react-bootstrap';
import './Nav.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch,faPhone,faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";

const Navbars = ()=>{
    return(
        <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">TOURISM IN INDIA</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="/home" className="active">Home</Link>
            <NavDropdown title="Pages" id="basic-nav-dropdown">
              <NavDropdown.Item><Link to="/About">About us</Link></NavDropdown.Item>
              <NavDropdown.Item><Link to="/Team">Our Team</Link></NavDropdown.Item>
              <NavDropdown.Item><Link to="/FAQ">FAQ's</Link></NavDropdown.Item>
              <NavDropdown.Item><Link to="/Booking">Booking</Link></NavDropdown.Item>
             
            </NavDropdown>
            <Link to="/Services">Services</Link>
           
            <Link to="/contact">Contact us</Link>
            <Nav.Link> <FontAwesomeIcon icon={faSearch}/> </Nav.Link>
            <Nav.Link>
                <FontAwesomeIcon icon={faPhone} className="phone"/>
                8790323324</Nav. Link><Nav.Link></Nav.Link>
                <Link to="/Login">Login</Link>
                <Link to="/Registration">Registration</Link>
                <Link to="/AdminLogin">Admin</Link>
          </Nav>
          
          
        </Navbar.Collapse>
      </Container>
      <div class="search-container">
        <form action="/search" method="get">
            <button class="search-icon" type="button">&#128269;</button>
            <input type="text" id="search" name="q" placeholder="Enter your search term"/>
        </form>
    </div>
    </Navbar>
    )
}
export default Navbars;