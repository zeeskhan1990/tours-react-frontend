import React from "react";
import classNames from "classnames";
import {Navbar, Nav, Button} from "react-bootstrap"

import "bootstrap/dist/css/bootstrap.min.css";
import "./custom.css";

export default class SideDrawer extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div id="sidebar" className={classNames({'active': this.props.isSideDrawerOpen})}>
        <Navbar
        bg="primary"
        expand="lg"
        variant="dark"
        className="justify-content-start sideDrawer"
      >
          {this.props.brand}
          <Nav className="ml-auto">
            <Button 
            onClick={(ev) => this.props.closeSideDrawer(ev)}>
              <i className="fas fa-window-close" />
            </Button>
          </Nav>
        </Navbar>
        <Navbar
        bg="primary"
        expand="lg"
        variant="dark"
        className="justify-content-start align-content-start d-flex flex-column"
      >
        {this.props.children}
      </Navbar>      
        
      </div>
      <div onClick={(ev) => this.props.closeSideDrawer(ev)} className={classNames('overlay',{'active': this.props.isSideDrawerOpen})}/>
     </React.Fragment>
    );
  }
}
