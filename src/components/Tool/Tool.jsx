import { orange } from '@mui/material/colors';
import React, { useState } from 'react';
import Draggable from 'react-draggable';
import { v4 as uuidv4 } from 'uuid';


const Tool = ({ selectedTool, setSelectedTool,clicks1, clicks2,clicks3,clicks4,clicks5,clicks6,clicks7,clicks8,clicks9}) => {
  const [clickCount1, setclickCount1] = useState(0);
  const [topsize,settopsize]=useState(50);
  const [clickCount2, setclickCount2] = useState(0);


  const renderBoxes1 = (boxCount,color) => {
    const boxes = [];
    for (let i = 0; i < boxCount; i++) {
      boxes.push(
        <Draggable key={i} bounds={{ left: 0}}>
          <div
            style={{
              backgroundColor: 'red',
              width: '50px',
              height: 50,
              margin: '5px',
              textAlign: 'center',
              lineHeight: '50px',
            }}
          >
            ONE
          </div>
        </Draggable>
      );
    }
    
    return boxes;
  };
  



  const renderBoxes2 = (selectedTool,boxCount,color) => {
    const boxes = [];
    for (let i = 0; i < boxCount; i++) {
      boxes.push(
        <Draggable key={i} bounds={{ left: 0}}>
          <div
            style={{
              backgroundColor: 'green',
              width: '50px',
              height: 50,
              margin: '5px',
              textAlign: 'center',
              lineHeight: '50px',
            }}
          >
            Two
          </div>
        </Draggable>
      );
    }
    if (selectedTool === 'NAME2') {
        return boxes;
      }
    return boxes;
  };
  const renderBoxes3 = (selectedTool,boxCount,color) => {
    const boxes = [];
    for (let i = 0; i < boxCount; i++) {
      boxes.push(
        <Draggable key={i} bounds={{ left: 0}}>
          <div
            style={{
              backgroundColor: 'yellow',
              width: '50px',
              height: 50,
              margin: '5px',
              textAlign: 'center',
              lineHeight: '50px',
            }}
          >
            Three
          </div>
        </Draggable>
      );
    }
    if (selectedTool === 'NAME3') {
        return boxes;
      }
    return boxes;
  };
  const renderBoxes4 = (selectedTool,boxCount,color) => {
    const boxes = [];
    for (let i = 0; i < boxCount; i++) {
      boxes.push(
        <Draggable key={i} bounds={{ left: 0}}>
          <div
            style={{
              backgroundColor: 'pink',
              width: '50px',
              height: 50,
              margin: '5px',
              textAlign: 'center',
              lineHeight: '50px',
            }}
          >
            Four
          </div>
        </Draggable>
      );
    }
    if (selectedTool === 'NAME4') {
        return boxes;
      }
    return boxes;
  };
  const renderBoxes5 = (selectedTool,boxCount,color) => {
    const boxes = [];
    for (let i = 0; i < boxCount; i++) {
      boxes.push(
        <Draggable key={i} bounds={{ left: 0}}>
          <div
            style={{
              backgroundColor: 'orange',
              width: '50px',
              height: 50,
              margin: '5px',
              textAlign: 'center',
              lineHeight: '50px',
            }}
          >
            Five
          </div>
        </Draggable>
      );
    }
    if (selectedTool === 'NAME5') {
        return boxes;
      }
    return boxes;
  };
  
  const renderBoxes6 = (selectedTool,boxCount,color) => {
    const boxes = [];
    for (let i = 0; i < boxCount; i++) {
      boxes.push(
        <Draggable key={i} bounds={{ left: 0}}>
          <div
            style={{
              backgroundColor: 'red',
              width: '50px',
              height: 50,
              margin: '5px',
              textAlign: 'center',
              lineHeight: '50px',
            }}
          >
            Six
          </div>
        </Draggable>
      );
    }
   
    return boxes;
  };
  
  const renderBoxes7 = (selectedTool,boxCount,color) => {
    const boxes = [];
    for (let i = 0; i < boxCount; i++) {
      boxes.push(
        <Draggable key={i} bounds={{ left: 0}}>
          <div
            style={{
              backgroundColor: 'red',
              width: '50px',
              height: 50,
              margin: '5px',
              textAlign: 'center',
              lineHeight: '50px',
            }}
          >
         Seven
          </div>
        </Draggable>
      );
    }
   
    return boxes;
  };
  
  const renderBoxes8 = (selectedTool,boxCount,color) => {
    const boxes = [];
    for (let i = 0; i < boxCount; i++) {
      boxes.push(
        <Draggable key={i} bounds={{ left: 0}}>
          <div
            style={{
              backgroundColor: 'red',
              width: '50px',
              height: 50,
              margin: '5px',
              textAlign: 'center',
              lineHeight: '50px',
            }}
          >
          Eight
          </div>
        </Draggable>
      );
    }
   
    return boxes;
  };
  
  const renderBoxes9 = (selectedTool,boxCount,color) => {
    const boxes = [];
    for (let i = 0; i < boxCount; i++) {
      boxes.push(
        <Draggable key={i} bounds={{ left: 0}}>
          <div
            style={{
              backgroundColor: 'red',
              width: '50px',
              height: 50,
              margin: '5px',
              textAlign: 'center',
              lineHeight: '50px',
            }}
          >
           Nine
          </div>
        </Draggable>
      );
    }
   
    return boxes;
  };



  return (
    <div>
     
      {/* <button onClick={() => onSelectTool('two')}>Tool 2</button>
      <button onClick={() => onSelectTool('three')}>Tool 3</button> */}
      {topsize}
     
      {renderBoxes1(clicks1)}
      {renderBoxes2(selectedTool,clicks2)} 
      {renderBoxes3(selectedTool,clicks3)} 
      {renderBoxes4(selectedTool,clicks4)} 
      {renderBoxes5(selectedTool,clicks5)} 
      {renderBoxes6(selectedTool,clicks6)} 
      {renderBoxes7(selectedTool,clicks7)} 
      {renderBoxes8(selectedTool,clicks8)} 
      {renderBoxes9(selectedTool,clicks9)}   {/* Render the boxes here */}

      
    </div>
  );
};

export default Tool;




