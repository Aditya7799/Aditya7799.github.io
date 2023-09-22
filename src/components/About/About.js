import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Github from "./Github";
import Certifications from "./Certifications"
import TechStacks from "./TechStacks";
import ShootingStar from "../../Assets/AnimationComponents/ShootingStar/ShootingStar";
import aboutImg from "../../Assets/about_img.svg"
import {about_text} from "../../constants.js"
import { GitHub, HackerRank, Facebook, StackOverflow, LinkedIn, Instagram, GooglePlus, Youtube, Yahoo, Twitch, Twitter, Skype } from 'react-profiles';



function About() {
    return(
<Container fluid className="about-section">
      <div className="home-animation"><ShootingStar/></div>
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              About <strong className="highlight">Me</strong>
            </h1>
            {about_text}
            <div style={{textAlign:"left"}}>
              <img width="50%" src="https://leetcode-stats.vercel.app/api?username=adi73365&theme=Dark"/>
              <img width="50%" src="https://github-readme-streak-stats.herokuapp.com/?user=Aditya7799&theme=dark" alt="adidalvi" />

            </div>
            


          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={aboutImg} alt="about" className="img-fluid" />
          </Col>
        </Row>
        <TechStacks />
        <Certifications/>
        <Github />
      </Container>
    </Container>
    );
}

export default About;