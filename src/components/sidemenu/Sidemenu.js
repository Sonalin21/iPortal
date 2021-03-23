import { React } from "react";
import "./sidemenu.css";
import { FaUserCircle, FaBeer } from "react-icons/fa";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import {Body} from "../body/Body";
// import image1 from '../../images/constraint.png';
import Body from '../body/Body';
import Search from '../search/Search'
const routes = [
  {
    path: "/",
    exact: true,
    sidebar: () => <div>home!</div>,
    main: () => <Body />,
  },
  {
    path: "/search",
    sidebar: () => <div></div>,
    main: () => <Search/>,
  },
  {
    path: "/menu1",
    sidebar: () => <div>Menu1!</div>,
    main: () => <h2>Menu1</h2>,
  },
  {
    path: "/search",
    sidebar: () => <div>search!</div>,
    main: () => <h2>search</h2>,
  },
];

const Sidemenu = () => (
  <Router>
    <div className="container-fluid">
        <div className="row">
      <div className="col-3 sidemenu">
      
        <Link className="menu1" to="/">
            <p className="logock">CavinKare</p>
                  {/* <img src={image1} className="logo" alt="" /> */}
        </Link>
        <div>
          {/* <p className="menu1">Information</p> */}

          <ul style={{ listStyleType: "none", padding: 0 }}>
          <li className="menu1">
              <Link  to="/">
              Information
              </Link>
            </li>
            <li className="menu1"> 
              <Link to="/search">
                Search Formulation
              </Link>
            </li>
            <li className="menu1">
              <Link to="/match">
                Match Progress
              </Link>
            </li>
          </ul>

          {/* <p className="menu1">Search Formulation</p>
          <p className="menu1">Match Progress</p> */}

          <p className="menu1">Recently Uploaded By</p>
          <div className="row">
            {/* <div className="col-2  p-0">
                                <FaUserCircle className="logoUser"/>
                                <img className="card-img-top" src="public/logo192.png" alt="" />
                            </div> */}
            <div className="col-2 ml-1">
              <FaUserCircle className="logoUser" />
              {/* <img className="card-img-top" src="public/logo192.png" alt="" /> */}
            </div>

            <div className="col-2 p-0">
              <FaUserCircle className="logoUser" />
              {/* <img className="card-img-top" src="public/logo192.png" alt="" /> */}
            </div>
            <div className="col-2  p-0">
              <FaUserCircle className="logoUser" />
              {/* <img className="card-img-top" src="public/logo192.png" alt="" /> */}
            </div>
            <div className="col-2 p-0">
              <FaUserCircle className="logoUser" />
              {/* <img className="card-img-top" src="public/logo192.png" alt="" /> */}
            </div>
            <div className="col-2  p-0">
              <FaUserCircle className="logoUser" />
              {/* <img className="card-img-top" src="public/logo192.png" alt="" /> */}
            </div>
          </div>
        </div>
      </div>
      <div className="col-9">
        <Switch>
          {routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              children={<route.main />}
            />
          ))}
        </Switch>
      </div>
    </div>
    </div>
  </Router>
);

export default Sidemenu;
