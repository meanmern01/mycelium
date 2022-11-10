import React from "react";
// import Image from "next/image";
import { Container, Image } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const NavigationBar = () => {
  return (
    <Navbar collapseOnSelect expand="lg">
      <Navbar.Brand >
        <Link href="/">
          <Image src="/Group 55.png" width={180.82} height={32.79} />
        </Link>
      </Navbar.Brand>
      <Nav.Link href="#deets" className="signInBtnNavbar signInBtnNavbar_mobile">
        {" "}
        Sign In{" "}
      </Nav.Link>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto"></Nav>
        <Nav>
          <Nav.Link href="#deets">Get API Keys</Nav.Link>
          <Nav.Link href="#deets">Submit Score</Nav.Link>
          <Nav.Link href="#deets" className="signInBtnNavbar">
            {" "}
            Sign In{" "}
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavigationBar;
