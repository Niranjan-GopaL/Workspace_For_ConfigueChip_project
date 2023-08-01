// ComponentA.js
import React from 'react';

const ComponentA = ({ onSelectTool }) => {
  return (
    <div>
      <button onClick={() => onSelectTool('one')}>Tool 1</button>
      <button onClick={() => onSelectTool('two')}>Tool 2</button>
      <button onClick={() => onSelectTool('three')}>Tool 3</button>
    </div>
  );
};

export default ComponentA;
