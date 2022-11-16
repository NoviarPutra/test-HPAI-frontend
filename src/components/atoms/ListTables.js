import React from "react";
import { Table } from "react-bootstrap";

const ListTables = ({ tableHead, children }) => {
  return (
    <Table responsive>
      <thead>
        <tr>
          {tableHead.map((data, index) => (
            <th key={index}>{data}</th>
          ))}
        </tr>
      </thead>
      <tbody>{children}</tbody>
    </Table>
  );
};

export default ListTables;
