import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";

import {
  Container,
  Divider,
  Dropdown,
  Grid,
  Header,
  Image,
  List,
  Menu,
  Segment
} from "semantic-ui-react";

//import "./NavMenu.css";

export class NavMenu extends Component {
  static displayName = NavMenu.name;

  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  render() {
    return (
      <header>
        <Menu fixed="top" inverted>
          <Container>
            <Menu.Item header as={NavLink} exact to="/" children="Home">
              <Image
                size="mini"
                src="./logo.png"
                style={{ marginRight: "1.5em" }}
              />
              Home
            </Menu.Item>
            <Menu.Item
              header
              as={NavLink}
              exact
              to="/counter"
              children="Counter"
            />
          </Container>
        </Menu>
      </header>
    );
  }
}
