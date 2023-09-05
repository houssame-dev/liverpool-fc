import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { BsPeopleFill } from "react-icons/bs";
import { FaTrophy } from "react-icons/fa";
import { RiBookMarkFill, RiQuestionFill } from "react-icons/ri";
import { LiaTwitter, LiaFacebookF, LiaInstagram } from "react-icons/lia";
import { RiYoutubeFill } from "react-icons/ri";
import liverpool_logo from "./images/Liverpool_FC_2.png";
import "./Topbar.css";

function Topbar() {
  return (
    <Navbar collapseOnSelect expand="md" className="topbar">
      <Container>
        <Link to="/" className="topbar-brand">
          <Navbar.Brand href="#home">
            <img
              src={liverpool_logo}
              alt="logo of liverpool"
              id="liverpool-logo"
            />
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          id="navbar-toggle"
        />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto">
            <Link to="/squad" className="topbar-item">
              <Nav.Link href="#squad">
                <span>
                  <BsPeopleFill size={20} /> SQUAD
                </span>
              </Nav.Link>
            </Link>
            <Link to="/history" className="topbar-item">
              <Nav.Link href="#history">
                <span>
                  <RiBookMarkFill size={20} /> HISTORY
                </span>
              </Nav.Link>
            </Link>
            <Link to="/titles" className="topbar-item">
              <Nav.Link href="#titles">
                <span>
                  <FaTrophy size={20} /> TITLES
                </span>
              </Nav.Link>
            </Link>
            <Link to="/about" className="topbar-item">
              <Nav.Link href="#about">
                <span>
                  <RiQuestionFill size={23} /> ABOUT
                </span>
              </Nav.Link>
            </Link>
          </Nav>

          <div className="social-list">
            <Nav.Link href="https://twitter.com/LFC" target="_blank">
              <span>
                <LiaTwitter size={35} className="social-icons" />
              </span>
            </Nav.Link>
            <Nav.Link href="https://www.facebook.com/ArabicLFC" target="_blank">
              <span>
                <LiaFacebookF size={35} className="social-icons" />
              </span>
            </Nav.Link>
            <Nav.Link
              href="https://www.instagram.com/liverpoolfc/"
              target="_blank"
            >
              <span>
                <LiaInstagram size={35} className="social-icons" />
              </span>
            </Nav.Link>
            <Nav.Link
              href="https://www.youtube.com/@LiverpoolFC"
              target="_blank"
            >
              <span>
                <RiYoutubeFill size={35} className="social-icons" />
              </span>
            </Nav.Link>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Topbar;
