import React, { useState } from 'react';
import { Col, Row } from "react-bootstrap";
/*import { CgCPlusPlus } from "react-icons/cg"; */
import { VscAzure } from "react-icons/vsc";
import { FaAws, FaJenkins, FaGitlab } from "react-icons/fa";
import { SiKubernetes, SiTerraform, SiAzuredevops, SiGithub } from "react-icons/si";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiPython,
  DiGit,
  DiScala,
  DiJava
} from "react-icons/di";
import { BiLogoSpringBoot } from "react-icons/bi";
import { SiPytorch, SiTensorflow } from "react-icons/si";

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
        <Col xs={isOpen?8:5} md={3} className="tech-icons accordion-header" onClick={toggleAccordion}>
        {/* <h6>{title}</h6> */}
        {React.cloneElement(icon, { className: `accordion-icon ${isOpen ? 'open' : ''}` })}
        {isOpen && <div className="accordion-content">{content}</div>}
      </Col>
    );
  };
  
  export default AccordionIcon;