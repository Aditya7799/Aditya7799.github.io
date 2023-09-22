import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

function Github() {
  // Check color Themeing here 
  return (
    <div>
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        My <strong className="purple">Github Contribution History</strong>
      </h1>
      <GitHubCalendar
        username="Aditya7799"
        blockSize={20}
        blockMargin={5}
        fontSize={16}
      />
    </Row>
    </div>
  );
}

export default Github;
