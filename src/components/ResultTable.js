import React, { Component } from "react";
import { connect } from "react-redux";

class ResultTable extends Component {
  renderTable(items) {
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
          {items.map(item => (
            <tr key={item.id}>
              <td>{item.userId}</td>
              <td>{item.id}</td>
              <td>{item.title}</td>
              <td>{item.body}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }

  renderTableSingle(item) {
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
          <tr key={item.id}>
            <td>{item.userId}</td>
            <td>{item.id}</td>
            <td>{item.title}</td>
            <td>{item.body}</td>
          </tr>
        </tbody>
      </table>
    );
  }

  render() {
    console.log(Array.isArray(this.props.items));
    let contents = Array.isArray(this.props.items)
      ? this.renderTable(this.props.items)
      : this.renderTableSingle(this.props.items);

    return <div> {contents}</div>;
  }
}

function mapStateToProps(state) {
  return state.units;
}
export default connect(mapStateToProps)(ResultTable);
