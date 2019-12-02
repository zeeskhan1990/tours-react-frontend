import React, { useState, useEffect } from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Home from "./Home";
import SideDrawer from "./sidedrawer";
import AllTours from "./all-tours"
import TourDetail from "./tour-detail"
import Signin from "./Signin";
import { LinkContainer } from "react-router-bootstrap";
import { BrowserRouter as Router, Switch, Route, Link, useLocation, useHistory } from "react-router-dom";
import { NavDropdown } from "react-bootstrap";


const SideDrawerBrand: React.FC =() => (
  <LinkContainer to="/">
    <Navbar.Brand>Zours</Navbar.Brand>
  </LinkContainer>
)

const NoMatch:React.FC = () => {
  let location = useLocation();

  return (
    <div>
      <h3 className="no-match">
        No match for <code>{location.pathname}</code>
      </h3>
    </div>
  );
}
const App: React.FC = () => {
  const [isSideBarOpen, setSideBarState] = useState(false);
  const history = useHistory()
  useEffect(() => {
    console.log("App Mounted !!") 
    let deregisterListener = history.listen((location, action) => {
      console.log("on route change");
      setSideBarState(false)
    });
    return () => {
      deregisterListener()
    }
  }, [])
  return (
    <React.Fragment>
      <Navbar
        bg="primary"
        expand="lg"
        variant="dark"
        className="justify-content-start"
        fixed="top"
        expanded={false}
        onToggle={(toggleState: boolean) => {
          console.log(toggleState);
          setSideBarState(true);
        }}
      >
        <Navbar.Toggle className="mr-2" aria-controls="basic-navbar-nav" />
        <LinkContainer to="/">
          <Navbar.Brand>Zours</Navbar.Brand>
        </LinkContainer>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <LinkContainer to="/" exact>
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/all-tours">
              <Nav.Link>Tours</Nav.Link>
            </LinkContainer>
            <NavDropdown title="Others" id="basic-nav-dropdown">
              <LinkContainer to="/xyz">
                <NavDropdown.Item >404</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/tour-detail/100">
                <NavDropdown.Item >Tour Detail</NavDropdown.Item>
              </LinkContainer>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <Nav className="ml-auto">
          <LinkContainer to="/login">
            <Button variant="outline-light">Login</Button>
          </LinkContainer>
        </Nav>
      </Navbar>
      <SideDrawer
        isSideDrawerOpen={isSideBarOpen}
        brand={<SideDrawerBrand/>}
        closeSideDrawer={(ev: any) => setSideBarState(false)}
      >
        <Nav>
          <Nav.Item>
            <LinkContainer to="/" exact>
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
          </Nav.Item>
          <Nav.Item>
            <LinkContainer to="/all-tours">
              <Nav.Link>Tours</Nav.Link>
            </LinkContainer>
          </Nav.Item>
          <Nav.Item>
            <LinkContainer to="/abc">
              <Nav.Link>404</Nav.Link>
            </LinkContainer>
          </Nav.Item>
          <Nav.Item>
            <LinkContainer to="/tour-detail/100">
            <Nav.Link>Tour Detail</Nav.Link>
            </LinkContainer>
          </Nav.Item>
        </Nav>
      </SideDrawer>
      <div className="main">
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>        
          <Route path="/login">
            <Signin/>
          </Route>
          <Route path="/all-tours">
            <AllTours />
          </Route>
          <Route path="/tour-detail/:id">
            <TourDetail />
          </Route>
          <Route path="/*">
            <NoMatch />
          </Route>
        </Switch>
      </div>      
    </React.Fragment>
  );
};

export default App;
