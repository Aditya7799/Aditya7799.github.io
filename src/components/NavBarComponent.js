import React, { useState } from "react";
import NavBar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import logo from "../Assets/logo.svg";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { CgGitFork } from "react-icons/cg";
import {
  AiFillStar,
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";

import {
    PiBagFill,
    PiSuitcaseSimple,
    PiSuitcaseSimpleFill,
    PiSuitcaseSimpleDuotone
} from "react-icons/pi"

import { CgFileDocument } from "react-icons/cg";

function NavBarComponent() {
    // This is used to save the current state of the NavBar - expanded vs NotExpanded
    const [isExpanded, updateExpandedState] = useState(false);
    // This is use to lighten the shade of the NavBar while scrolling
    const [isTranslucent, updateTranslucentState] = useState(false);
    
    // Once we have scrolled more than 10 pixels we will show a lighter NavBar
    function scrollHandler() {
        if (window.scrollY >= 20) {
            updateTranslucentState(true);
        } else {
            updateTranslucentState(false);
        }
    }
    window.addEventListener("scroll", scrollHandler);

    return(
        <NavBar
            expanded={isExpanded}
            fixed="top"
            expand="md"
            className={isTranslucent ? "translucent" : "navbar"}
        >
            <Container>
                {/* NavBar Logo - Appears on Top Left*/}
                <NavBar.Brand href = "/">
                    <img src = {logo} className="img-fluid logo" alt = "brand" />
                </NavBar.Brand>
                
                {/* [Mobile Only] NavBar Expanded State variable is updated on click. Each span inside defines a bar on the NavBar toggler*/}
                <NavBar.Toggle 
                    aria-controls = "responsive-navbar-nav"
                    onClick={() => {
                        updateExpandedState(isExpanded ? false : "expanded");
                    }}
                >
                <span></span>
                <span></span>
                <span></span>
                </NavBar.Toggle>

                
                <NavBar.Collapse id = "responsive-navbar-nav">
                    <Nav className="ms-auto" defaultActiveKey="#home">
                        <Nav.Item>
                            <Nav.Link as={Link} to="/" onClick={()=> updateExpandedState(false)}>
                                <AiOutlineHome style={{marginBottom: "2px"}} /> Home
                            </Nav.Link>
                        </Nav.Item>

                        <Nav.Item>
                            <Nav.Link
                                as={Link}
                                to="/about"
                                onClick={() => updateExpandedState(false)}
                            >
                                <AiOutlineUser style={{ marginBottom: "2px" }}/>About
                            </Nav.Link>
                        </Nav.Item>

                        <Nav.Item>
                            <Nav.Link
                                as={Link}
                                to="/experience"
                                onClick={() => updateExpandedState(false)}
                            >
                                <PiSuitcaseSimpleDuotone style={{ marginBottom: "2px" }}/> Experience
                            </Nav.Link>
                        </Nav.Item>

                        <Nav.Item>
                            <Nav.Link
                                as={Link}
                                to="/list"
                                onClick={() => updateExpandedState(false)}
                            >
                                <AiOutlineFundProjectionScreen
                                style={{ marginBottom: "2px" }}
                                />{" "}
                                Projects
                            </Nav.Link>
                        </Nav.Item>

{/* 
                        <Nav.Item>
                            <Nav.Link
                                as={Link}
                                to="/Blog"
                                onClick={() => updateExpandedState(false)}>
                                <AiOutlineUser style={{ marginBottom: "2px" }} /> Blog
                            </Nav.Link>
                        </Nav.Item> */}

                        <Nav.Item>
                            <Nav.Link
                                as={Link}
                                to="/resume"
                                onClick={() => updateExpandedState(false)}
                            >
                            <CgFileDocument style={{ marginBottom: "2px" }} /> Resume
                            </Nav.Link>
                        </Nav.Item>



                        <Nav.Item className="fork-btn">
                            <Button
                                href="https://github.com/Aditya7799/WebsiteTemplate"
                                target="_blank"
                                className="fork-btn-inner">
                                    <CgGitFork style={{ fontSize: "1.2em" }} />{" "}
                                <AiFillStar style={{ fontSize: "1.1em" }} />
                            </Button>
                        </Nav.Item>
                    </Nav>
                </NavBar.Collapse>
            </Container> 
        </NavBar>
    );

}

export default NavBarComponent;