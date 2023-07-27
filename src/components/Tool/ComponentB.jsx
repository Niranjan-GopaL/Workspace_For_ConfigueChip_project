// ComponentB.js
import React from 'react';
import Draggable from 'react-draggable';

const ComponentB = ({ selectedTools }) => {
  return (
    <div style={{ display: 'flex' }}>
      {selectedTools.includes('one') && (
        <Draggable>
          <div style={{ backgroundColor: 'red', width: '50px', height: '50px', margin: '5px', textAlign: 'center', lineHeight: '50px' }}>
            One
          </div>
        </Draggable>
      )}
      {selectedTools.includes('two') && (
        <Draggable>
          <div style={{ backgroundColor: 'blue', width: '50px', height: '50px', margin: '5px', textAlign: 'center', lineHeight: '50px' }}>
            Two
          </div>
        </Draggable>
      )}
      {selectedTools.includes('three') && (
        <Draggable>
          <div style={{ backgroundColor: 'green', width: '50px', height: '50px', margin: '5px', textAlign: 'center', lineHeight: '50px' }}>
            Three
          </div>
        </Draggable>
      )}
    </div>
  );
};

export default ComponentB;
