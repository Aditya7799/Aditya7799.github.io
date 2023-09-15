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
import { BiLogoSpringBoot, BiLogoCPlusPlus } from "react-icons/bi";
import { SiPytorch, SiTensorflow } from "react-icons/si";
import AccordionIcon from './AccordionIcon';

import "./TechStacks.css"


const text_size = "0.5em";

const iconContent = {
  "springBoot":{
    title:"Spring Boot",
    logo:<BiLogoSpringBoot/>,
    content:<p> <h5 style={{textAlign:'center'}}>Spring Boot</h5> <hr/>
    <ul>
      <li>Used Extensively in Amazon Pay to improve Customer Payment Experience</li>
    </ul>
          </p>
  },
  "aws":{
    title:"AWS",
    logo:<FaAws/>,
    content:<p><h5 style={{textAlign:'center'}}>AWS</h5><hr/>
     <ul>
      <li>Experienced in AWS offerings like Lambda, DynamoDB, Cloudwatch etc</li>
      <li>Used across my career @Amazon</li>
    </ul>
          </p>
  },
  "nodejs":{
    title:"Node JS",
    logo:<DiNodejs/>,
    content:<p><h5 style={{textAlign:'center'}}>Node JS</h5><hr/>
              To be Added
              <br/>
          </p>
  },
  "react":{
    title:"Test",
    logo:<DiReact/>,
    content:<p><h5 style={{textAlign:'center'}}>React</h5><hr/>
    <ul>
     <li>Learnt in BTech. Moderately Experienced with React. </li>
     <li>This site is built purely with React</li>
   </ul>
         </p>
  },
  "pytorch":{
    title:"Test",
    logo:<SiPytorch/>,
    content:<p><h5 style={{textAlign:'center'}}>PyTorch</h5><hr/>
    <ul>
     <li>Extensively Experienced with Pytorch. </li>
     <li>Many of my ML projects are trained using PyTorch</li>
   </ul>
         </p>
  },
  "tensorflow":{
    title:"Test",
    logo:<SiTensorflow/>,
    content:<p><h5 style={{textAlign:'center'}}>PyTorch</h5><hr/>
    <ul>
     <li>Learnt in BTech. Moderately Experienced with Tensorflow. </li>
     <li>Many of my ML models are trained using Tensorflow.</li>
     
   </ul>
         </p>
  },
  "git":{
    title:"Test",
    logo:<DiGit/>,
    content:<p><h5 style={{textAlign:'center'}}>Git</h5><hr/>
    <ul>
     <li>Expert git user. Basically my bread and butter at Amazon</li>
   </ul>
         </p>
  },
  "java":{
    title:"Test",
    logo:<DiJava/>,
    content:<p><h5 style={{textAlign:'center'}}>Java</h5><hr/>
    <ul>
     <li>Proficiency - High </li>
     <li>Used @Amazon for SprintBoot Development</li>
   </ul>
         </p>
  },
  "scala":{
    title:"Test",
    logo:<DiScala/>,
    content:<p><h5 style={{textAlign:'center'}}>Scala</h5><hr/>
    <ul>
     <li>Proficiency: High</li>
     <li>Used at Amazon to render the UI stack of the Payment Selection Page </li>
   </ul>
         </p>
  },
  "javascript":{
    title:"Test",
    logo:<DiJavascript1/>,
    content:<p><h5 style={{textAlign:'center'}}>JavaScript</h5><hr/>
    <ul>
    <li>Proficiency: High</li>
     <li>Used at multiple places across my </li>
   </ul>
         </p>
  },
  "python":{
    title:"Test",
    logo:<DiPython/>,
    content:<p><h5 style={{textAlign:'center'}}>Python</h5><hr/>
    <ul>
     <li>Proficiency: High</li>
     <li>Used it across my BTech projects</li>
   </ul>
         </p>
  },
  "cpp":{
    title:"Test",
    logo:<BiLogoCPlusPlus/>,
    content:<p><h5 style={{textAlign:'center'}}>C++</h5><hr/>
    <ul>
     <li>Proficiency: Moderate. </li>
     <li> Learnt it in highschool and BTech</li>
   </ul>
         </p>
  },
}


function TechStacks() {

    return(
      <div className="accordion">
      <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <h1 className="project-heading">
          My <strong className="highlight">Techstacks </strong>
        </h1>
        <AccordionIcon title = {iconContent.springBoot.title} content={iconContent.springBoot.content} icon = {iconContent.springBoot.logo}/>
        <AccordionIcon title = "Title1" content={iconContent.aws.content} icon = {iconContent.aws.logo}/>
        <AccordionIcon title = "Title1" content={iconContent.react.content} icon = {iconContent.react.logo}/>
        <AccordionIcon title = "Title1" content={iconContent.pytorch.content} icon = {iconContent.pytorch.logo}/>
        <AccordionIcon title = "Title1" content={iconContent.tensorflow.content} icon = {iconContent.tensorflow.logo}/>
        <AccordionIcon title = "Title1" content={iconContent.git.content} icon = {iconContent.git.logo}/>
      </Row>

      <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        <AccordionIcon title = "Title1" content={iconContent.java.content} icon = {iconContent.java.logo}/>
        <AccordionIcon title = "Title1" content={iconContent.scala.content} icon = {iconContent.scala.logo}/>
        <AccordionIcon title = "Title1" content={iconContent.javascript.content} icon = {iconContent.javascript.logo}/>
        <AccordionIcon title = "Title1" content={iconContent.python.content} icon = {iconContent.python.logo}/>
        <AccordionIcon title = "Title1" content={iconContent.cpp.content} icon = {iconContent.cpp.logo}/>
      </Row>
      </div>
    
    );
}

export default TechStacks;