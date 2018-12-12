import React from "react";
import { NavLink } from "react-router-dom";

import { Container, Image, Menu } from "semantic-ui-react";

//import "./NavMenu.css";

const NavMenu = () => (
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
        <Menu.Item header as={NavLink} exact to="/counter" children="Counter" />
      </Container>
    </Menu>
  </header>
);

export default NavMenu;
