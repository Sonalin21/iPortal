import React, { useState } from "react";
import "./search.css";
import { Table, Tabs, Tab } from "react-bootstrap";
// import { AiOutlineArrowRight } from 'react-icons/fa';
import MultiSelect from "react-multi-select-component";
import { FaUserCircle, FaPlus, FaArrowAltCircleRight } from "react-icons/fa";

const options = [
  { label: "Option1", value: "Option1" },
  { label: "Option2", value: "Option2" },
  { label: "Option3", value: "Option3" },
  { label: "Option4", value: "Option4" },
  { label: "Option5", value: "Option5" },
  { label: "Option6", value: "Option6" },
  { label: "Option7", value: "Option7" },
];

const Search = () => {
  const [selected, setSelected] = useState([]);
  const [key, setKey] = useState("formulationData");

  return (
    /*  */
    <div className="container form-group">
      <form className="md-form mr-auto">
        {/* <input
        className="form-control col-10"
        type="text"
        placeholder="Search"
        aria-label="Search"
      /> */}
        <div className="row">
          {/* <button className="btnUpload" type="submit">
            Upload
          </button> */}

          <button className="uploadBtn" type="submit">
            Upload <FaPlus className="logoPlus" />
          </button>
          <FaUserCircle className="logoUser1" />
        </div>
        {/* </form> */}
        <p className="heading1">Irritancy Portal</p>
        <div className="row">
          <div className="col-4">
            <input
              type="radio"
              value="searchByIngredients"
              name="searchByIngredients"
            />{" "}
            Search By Ingredients
          </div>
          <div className="col-4">
            <input
              type="radio"
              value="searchByTestProducts"
              name="searchByTestProducts"
            />{" "}
            Search By Test Products
          </div>
        </div>
        <div className="card cardMargin">
          {/* <pre>{JSON.stringify(selected)}</pre> */}
          <MultiSelect
            options={options}
            value={selected}
            onChange={setSelected}
            labelledBy={"Select"}
          />
          {/* <button>Searh</button> */}
        </div>
        <Tabs
          id="controlled-tab-example"
          activeKey={key}
          onSelect={(k) => setKey(k)}
        >
          <Tab eventKey="formulationData" title="Formulation Data">
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Sample Id</th>
                  <th>Study Date</th>
                  <th>Product Name</th>

                  <th>Irritancy Score</th>

                  <th>Irritant/ Non-irritant</th>

                  <th>Sample Submission_ID</th>
                  <th>Product Concept Title</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                  <td>Otto</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                  <td>@mdo</td>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>Otto</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td colSpan="2">Larry the Bird</td>
                  <td>@twitter</td>
                  <td>@mdo</td>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>Otto</td>
                </tr>
              </tbody>
            </Table>
          </Tab>

          <Tab
            eventKey="profile"
            title="Presence of Ingredients accross the products"
          >
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Sample Id</th>
                  <th>Ingredients</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Mark</td>
                  <td>Otto</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Jacob</td>
                  <td>Thornton</td>
                </tr>
              </tbody>
            </Table>
          </Tab>
          {/* <Tab eventKey="contact" title="Contact" disabled>
      </Tab> */}
        </Tabs>
      </form>
    </div>
  );
};

export default Search;
