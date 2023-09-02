import { Chrono } from "react-chrono";
import apayIcon from "../../Assets/apay.png";
import capgemini from "../../Assets/capgemini.jpg";
import { Container } from "react-bootstrap";
import {experience_data} from "../../constants"

export default function Experience() {

  return (
    <Container className="experience-component" id="experience">
      <Chrono
        items={experience_data}
        mode="VERTICAL_ALTERNATING"
        cardHeight={250}
        // slideShow
        hideControls
        // enableDarkToggle={true}
        // borderLessCards={true}
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
          titleColor: "black",
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
    </Container>
  );
}
