import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import "semantic-ui-css/semantic.min.css";
import { Grid, Message } from "semantic-ui-react";
import { Icon, Input } from "semantic-ui-react";
import { actionCreators } from "../redux/actions";

import ResultTable from "./ResultTable";

class Home extends Component {
  displayName = Home.name;

  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      message: ""
    };
  }

  handleMessage(e) {
    this.setState({
      searchString: e.target.value
    });
  }

  requestPosts() {
    this.props.requestPosts(this.state.searchString);
  }

  render() {
    let contents = this.props.isFetching ? <p>Loading...</p> : <ResultTable />;

    let errorContents = this.props.hasError ? (
      <Message error>{this.props.errorMessage}</Message>
    ) : (
      <div />
    );

    return (
      <Grid divided="vertically">
        <Grid.Row columns={12}>
          <Input
            loading={this.props.isFetching}
            onChange={e => this.handleMessage(e)}
            icon={
              <Icon
                name="search"
                inverted
                circular
                link
                onClick={() => this.requestPosts()}
              />
            }
            placeholder="Search..."
          />

          {this.state.searchString}
        </Grid.Row>

        <Grid.Row columns={12}>
          {errorContents}
          {contents}
        </Grid.Row>
      </Grid>
    );
  }
}

export default connect(
  state => state.units, //  ../reducers/index.js で定義
  dispatch => bindActionCreators(actionCreators, dispatch)
)(Home);
