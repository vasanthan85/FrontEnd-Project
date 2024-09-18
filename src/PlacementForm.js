import React, { useState } from 'react';

const PlacementForm = ({ addPlacement }) => {
  const [id, setId] = useState('');
  const [student, setStudent] = useState('');
  const [company, setCompany] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (id && student && company && status) {
      addPlacement({ id, student, company, status });
      setId('');
      setStudent('');
      setCompany('');
      setStatus('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="ID"
        value={id}
        onChange={(e) => setId(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Student"
        value={student}
        onChange={(e) => setStudent(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Company"
        value={company}
        onChange={(e) => setCompany(e.target.value)}
        required
      />
      <select
        value={status}
        onChange={(e) => setStatus(e.target.value)}
        required
      >
        <option value="">Select Status</option>
        <option value="Placed">Placed</option>
        <option value="Not Placed">Not Placed</option>
      </select>
      <button type="submit">Add Placement</button>
    </form>
  );
};

export default PlacementForm;
