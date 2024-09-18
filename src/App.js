import React, { useState } from 'react';
import './App.css'; 
import PlacementForm from './PlacementForm';
import PlacementTable from './PlacementTable';

const App = () => {
  const [placements, setPlacements] = useState([]);

  const addPlacement = (newPlacement) => {
    setPlacements([...placements, newPlacement]);
  };

  return (
    <div>
      <h1>Placement Management System</h1>
      <PlacementForm addPlacement={addPlacement} />
      <PlacementTable placements={placements} />
    </div>
  );
};

export default App;
