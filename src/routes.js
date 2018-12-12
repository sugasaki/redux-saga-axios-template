import React from "react";
import { Route, Switch } from "react-router";
import Home from "./components/Home";
import Counter from "./components/Counter";
import NoMatch from "./components/Home";
import NavMenu from "./components/NavMenu";
import { Container } from "semantic-ui-react";

const routes = (
  <div>
    <NavMenu />
    <Container style={{ marginTop: "6em" }}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/counter" component={Counter} />
        <Route component={NoMatch} />
      </Switch>
    </Container>
  </div>
);

export default routes;
