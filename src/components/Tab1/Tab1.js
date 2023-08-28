import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ShootingStar from "../../Assets/AnimationComponents/ShootingStar/ShootingStar"


function Tab1() {
    return (
      <section>
        <ShootingStar/>
      <Container fluid className="" id="home">
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              Content goes here
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
    );
}

export default Tab1;