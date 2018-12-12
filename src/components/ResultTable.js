import React, { Component } from "react";
import { connect } from "react-redux";
import { Table } from "semantic-ui-react";

class ResultTable extends Component {
  renderTable(items) {
    return (
      <Table celled>
        <Table.Header>
          <Table.Row>
            <th>userId</th>
            <th>id</th>
            <th>title</th>
            <th>body</th>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {items.map(item => (
            <Table.Row key={item.id}>
              <Table.Cell>{item.userId}</Table.Cell>
              <Table.Cell>{item.id}</Table.Cell>
              <Table.Cell>{item.title}</Table.Cell>
              <Table.Cell>{item.body}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    );
  }

  renderTableSingle(item) {
    return (
      <Table celled>
        <Table.Header>
          <Table.Row>
            <th>userId</th>
            <th>id</th>
            <th>title</th>
            <th>body</th>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          <Table.Row>
            <Table.Cell>{item.userId}</Table.Cell>
            <Table.Cell>{item.id}</Table.Cell>
            <Table.Cell>{item.title}</Table.Cell>
            <Table.Cell>{item.body}</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    );
  }

  render() {
    //console.log(Array.isArray(this.props.items));
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
