import React from 'react';

const PlacementTable = ({ placements }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Student</th>
          <th>Company</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {placements.map((placement, index) => (
          <tr key={index}>
            <td>{placement.id}</td>
            <td>{placement.student}</td>
            <td>{placement.company}</td>
            <td>{placement.status}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default PlacementTable;
