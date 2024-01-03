// components/DonatorsListTable.js
import React from 'react';
import { Table } from 'react-bootstrap';

const DonatorsListTable = ({ donators, onDelete }) => {
  // Function to handle deletion and renumbering
  const handleDelete = (id) => {
    // Call the onDelete function with the ID
    onDelete(id);
  };

  return (
    <Table striped bordered hover responsive>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Phone Number</th>
          <th>Email</th>
          <th>Address</th>
          <th>Product</th>
          <th>Type</th>
          <th>Amount</th>
          <th>Units</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {donators.map((donator, index) => (
          <tr key={donator.id}>
            <td>{index + 1}</td> {/* Use index + 1 for serial number */}
            <td>{donator.name}</td>
            <td>{donator.phone_num}</td>
            <td>{donator.email}</td>
            <td>{donator.address}</td>
            <td>{donator.product}</td>
            <td>{donator.type}</td>
            <td>{donator.amount}</td>
            <td>{donator.units}</td>
            <td>
              <button onClick={() => handleDelete(donator.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default DonatorsListTable;
