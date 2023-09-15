import { Chrono } from "react-chrono";
import apayIcon from "../../Assets/apay.png";
import capgemini from "../../Assets/capgemini.jpg";
import { Container } from "react-bootstrap";
import {experience_data} from "../../constants"
import { color } from "framer-motion";

export default function Experience() {
// TODO = Refactor the Education and Publication sections to be more reusable
  return (
    <Container className="experience-component" id="experience">
      <h1 style={{ fontSize: "2.1em", paddingBottom: "20px", color:"whitesmoke"}}>Professional <strong className="highlight">Experience</strong></h1>
      <Chrono
        items={experience_data}
        mode="VERTICAL"
        // cardHeight={300}
        // slideShow
        hideControls
        // enableDarkToggle={true}
        borderLessCards={true}
        scrollable
        useReadMore
        classNames={{
          card: "tile",
        }}
        fontSizes={{
          cardSubtitle: "1.1rem",
          cardText: "1rem",
          cardTitle: "1.2rem",
          title: "1.2rem",
        }}
        theme={{
          primary: "white",
          secondary: "purple",
          cardBgColor: "white",
          titleColor: "purple",
          titleColorActive: "white",
        }}
      >
        <div className="chrono-icons">
          <img src={apayIcon} alt="Amazon" className="experience-icons" />
          <img src={apayIcon} alt="Amazon" className="experience-icons" />
          <img src={apayIcon} alt="Amazon" className="experience-icons" />
          <img src={capgemini} alt="Capgemini" className="experience-icons" />
        </div>
      </Chrono>

      <div>
      <h1 style={{ fontSize: "2.1em", paddingBottom: "20px", color:"whitesmoke"}}><strong className="highlight">Education</strong></h1>
      <h4 style = {{textAlign:"left", color:"whitesmoke"}}>
      National Institute of Technology, Karnataka 
      </h4>
      <p style={{textAlign:"left", color:"whitesmoke", marginLeft:"2%"}}>Bachelor Of Technology(B.Tech), Information Technology 
        <p style={{fontSize:"small"}}>CGPA: 8.7/10.00</p>
      </p>

      <h4 style = {{textAlign:"left", color:"whitesmoke"}}>
      RV PU College, Bangalore
      </h4>
      <p style={{textAlign:"left", color:"whitesmoke", marginLeft:"2%"}}>Class XII (Senior Secondary Examination)
        <p style={{fontSize:"small"}}>Aggregate : 94.2</p>
      </p>

      
      </div>

      <div>
      <h1 style={{ fontSize: "2.1em", paddingBottom: "20px", color:"whitesmoke"}}><strong className="highlight">Publications</strong></h1>
      <h4 style = {{textAlign:"left", color:"whitesmoke"}}>
      <a href="https://ieeexplore.ieee.org/document/9065895">Performance Evaluation of Term Weighting Schemes for Sentiment Analysis</a>
      </h4>
      <p style={{textAlign:"left", color:"whitesmoke", marginLeft:"2%"}}>IEEE INTERNATIONAL CONFERENCE ON INTELLIGENT COMPUTING AND CONTROL SYSTEMS 2019 
        <p style={{fontSize:"small"}}>Madurai, India</p>
      </p>
      </div>
      
    </Container>
  );
}
