import { React } from "react";
import "./body.css";
import { Card, Accordion, Button } from "react-bootstrap";
import image2 from "../../images/constraint.png";
import image3 from "../../images/Feature.png";
import image4 from "../../images/Dataformat.png";
import image5 from "../../images/steps.png";
import { BsFillCaretRightFill } from "react-icons/bs";
import { FaUserCircle, FaPlus, FaArrowAltCircleRight } from "react-icons/fa";

// import { AiOutlineArrowRight } from 'react-icons/fa';

const Body = () => (
  <div className="container-fluid form-group">
    <form className="form-inline md-form mr-auto">
      <input
        className="form-control col-10"
        type="text"
        placeholder="Search"
        aria-label="Search"
      />
      <button className="btnUpload" type="submit">
        Upload <FaPlus className="logoPlus" />
      </button>
      <FaUserCircle className="logoUser" />
      {/* <img src={image1} className="logo" alt="" /> */}
    </form>
    <p className="heading1">Irritancy Portal</p>
    <Accordion defaultActiveKey="0">
      <Card className="m-1">
        <Card.Header className="linkText p-1">
          <Accordion.Toggle className="p-0" as={Button} variant="link" eventKey="0">
            {/* <AiOutlineArrowRight /> */}
            <span className="linkText m-0"> <BsFillCaretRightFill className="arrowicon" /> <img src={image3} className="logo" alt="" /> Features</span>
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="0">
          <Card.Body>Place for Features</Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card className="m-1">
        <Card.Header className="linkText p-1">
          <Accordion.Toggle className="p-0" as={Button} variant="link" eventKey="1">
            <p className="linkText m-0"><BsFillCaretRightFill className="arrowicon" /><img src={image2} className="logo" alt="" />Constrains</p>
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="1">
          <Card.Body>Place for Constrains</Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card className="m-1">
        <Card.Header className="linkText p-1">
          <Accordion.Toggle className="p-0" as={Button} variant="link" eventKey="2">
           
            <p className="linkText m-0"> <BsFillCaretRightFill className="arrowicon" /> <img src={image4} className="logo" alt="" />Data & Format</p>
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="2">
          <Card.Body>Place for Data & Format</Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card className="m-1">
        <Card.Header className="linkText p-1">
          <Accordion.Toggle className="p-0" as={Button} variant="link" eventKey="3">
            <p className="linkText m-0"><BsFillCaretRightFill className="arrowicon" /><img src={image5} className="logo" alt="" />Steps</p>
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="3">
          <Card.Body>Place for Steps</Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  </div>
);

export default Body;
