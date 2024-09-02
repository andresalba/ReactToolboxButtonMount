import React, { useState } from 'react';
import Child from './Child';
import './App.css'; // Import the CSS file

function App() {
  const [isMounted, setIsMounted] = useState(false);

  const toggleChild = () => {
    setIsMounted(!isMounted);
  };

  return (
    <div className="app-container">
      <button className="toggle-button" onClick={toggleChild}>
        {isMounted ? 'Unmount Child' : 'Mount Child'}
      </button>
      {isMounted && <Child />}
    </div>
  );
}

export default App;

