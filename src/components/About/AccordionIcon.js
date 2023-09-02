import React, { useState } from 'react';
import { Col, Row } from "react-bootstrap";
import "./TechStacks.css"


const text_size = "0.5em";

const AccordionIcon = ({ title, content, icon }) => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleAccordion = () => {
      setIsOpen(!isOpen);
    };
  
    return (
        // On Extra Small Screen sizes we are taking up 5 out of 12 available bootstrap columns
        // On Medium we are taking up 3
        <Col xs={isOpen?8:5} md={3} className="tech-icons accordion-header" onClick={toggleAccordion} 
        // onMouseEnter={toggleAccordion} // Turn these on to show on Mover hover
        // onMouseLeave={toggleAccordion}
        >
        {/* <h6>{title}</h6> */}
        {React.cloneElement(icon, { className: `accordion-icon ${isOpen ? 'open' : ''}` })}
        {isOpen && <div className="accordion-content">{content}</div>}
      </Col>
    );
  };
  
  export default AccordionIcon;