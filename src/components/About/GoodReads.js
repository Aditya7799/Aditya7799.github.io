import React from "react";
import { Row } from "react-bootstrap";
import GoodreadsBookshelf from "react-goodreads-shelf";

function GoodReads() {
  // Check color Themeing here 
  return (
    <div style={{ paddingBottom: "20px", paddingTop:"10%", padding:"20%" ,color:"white"}}>
      <h1 className="project-heading">
        My <strong className="purple">GoodReads</strong>
      </h1>
        <GoodreadsBookshelf userId="160395128-aditya-dalvi"/>
    </div>
  );
}

export default GoodReads;
