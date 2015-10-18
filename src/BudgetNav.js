import React from "react";
import {Navbar, Nav, NavBrand, NavItem} from "react-bootstrap";

export default React.createClass({
  render: function() {
    return (
      <Navbar>
        <NavBrand><a href="#">BudgetMTL</a></NavBrand>
        <Nav>
          <NavItem eventKey={1} href="#">Link1</NavItem>
          <NavItem eventKey={2} href="#">Link2</NavItem>
        </Nav>
      </Navbar>
    );
  },
});
