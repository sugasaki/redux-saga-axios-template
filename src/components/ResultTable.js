import React, { Component } from "react";
import { connect } from "react-redux";
import { Table } from "semantic-ui-react";

function renderTable(items) {
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

function renderTableSingle(item) {
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


const ResultTable = props => {
  //console.log(Array.isArray(this.props.items));
  let contents = Array.isArray(props.items)
    ? renderTable(props.items)
    : renderTableSingle(props.items);

  return <div> {contents}</div>;
};

function mapStateToProps(state) {
  return state.home;
}
export default connect(mapStateToProps)(ResultTable);
