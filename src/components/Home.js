import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import "semantic-ui-css/semantic.min.css";
import { Grid, Image } from "semantic-ui-react";
import { Button } from "semantic-ui-react";
import { Icon, Input, Checkbox } from "semantic-ui-react";
import { actionCreators } from "../redux/actions";

class Home extends Component {
  displayName = Home.name;

  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      message: "aa"
    };
  }

  handleMessage(e) {
    this.setState({
      message: e.target.value
    });
  }

  requestPosts() {
    this.props.requestPosts({ message: this.state.message });
  }

  renderTable(forecasts) {
    return (
      <table className="table table-striped">
        <thead>
          <tr>
            <th>userId</th>
            <th>id</th>
            <th>title</th>
            <th>body</th>
          </tr>
        </thead>
        <tbody>
          {forecasts.map(forecast => (
            <tr key={forecast.userId}>
              <td>{forecast.userId}</td>
              <td>{forecast.id}</td>
              <td>{forecast.title}</td>
              <td>{forecast.body}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }

  render() {
    let loading = this.state.loading;

    let contents = this.props.isFetching ? (
      <p>
        <em>Loading...</em>
      </p>
    ) : (
      this.renderTable(this.props.items)
    );

    return (
      <Grid divided="vertically">
        <Grid.Row columns={12}>
          <Input
            loading={this.props.isFetching}
            onChange={this.handleMessage.bind(this)}
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

          {contents}

          {this.state.message}
        </Grid.Row>
      </Grid>
    );
  }
}

export default connect(
  state => state.units, //  ../reducers/index.js で定義
  dispatch => bindActionCreators(actionCreators, dispatch)
)(Home);
