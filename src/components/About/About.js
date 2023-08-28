import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Github from "./Github";
import Certifications from "./Certifications"
import TechStacks from "./TechStacks";
import ShootingStar from "../../Assets/AnimationComponents/ShootingStar/ShootingStar";



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
              About <strong className="purple">Me</strong>
            </h1>

          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            {/* <img src={laptopImg} alt="about" className="img-fluid" /> */}
          </Col>
        </Row>
        <h1 className="project-heading">
          My <strong className="purple">Techstacks </strong>
        </h1>

        <TechStacks />


        <h1 className="project-heading">
          <strong className="purple">My Certifications</strong>
        </h1>
        <Certifications/>
        <Github />
      </Container>
    </Container>
    );
}

export default About;