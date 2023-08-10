// App.js
import './App.css'
import Side_bar_MockUp from './components/Sidebar/Side_bar_MockUp';
 import Tool from './components/Tool/Tool';
import React, { useEffect, useState } from 'react';
import './App.css';
import Sidebar from './components/Sidebar/Sidebar.jsx';
import ComponentA from './components/Tool/ComponentA.jsx';
import ComponentB from './components/Tool/ComponentB.jsx';
import { Box } from '@mui/material';
import { Stack } from "@mui/material";
// import Tool from './components/Tool/Tool';


const App = () => {
  // State for the sidebar toggle
  const [activeMenu, setActiveMenu] = useState(false);
  const [selectedTools, setSelectedTools] = useState([]);
  const [selectedTool, setSelectedTool ] = useState('New');
  const [clicks1,setclicks1]=useState(0);
  const [clicks2,setclicks2]=useState(0);
  const [clicks3,setclicks3]=useState(0);
  const [clicks4,setclicks4]=useState(0);
  const [clicks5,setclicks5]=useState(0);
  const [clicks6,setclicks6]=useState(0);
  const [clicks7,setclicks7]=useState(0);
  const [clicks8,setclicks8]=useState(0);
  const [clicks9,setclicks9]=useState(0);
  const [flag,setflag]=useState(0);
  const[lastselectedtool,setlastselectedtool]=useState(null);


  const handleToggleSidebar = () => {
    setActiveMenu((prevState) => !prevState);
  };


  const handleSelectTool = (tool) => {
    if (selectedTools.includes(tool)) {
      setSelectedTools(selectedTools.filter((t) => t !== tool));
    } else {
      setSelectedTools([...selectedTools, tool]);
    }
  };
  const balance=() => {
    if(lastselectedtool==='NAME1'  )
    {
      setclicks1(clicks1-1);
    }
    if(lastselectedtool==='NAME2' )
    {
      setclicks2(clicks2-1);
    }if(lastselectedtool==='NAME3' )
    {
      setclicks3(clicks3-1);
    }if(lastselectedtool==='NAME4' )
    {
      setclicks4(clicks4-1);
    }if(lastselectedtool==='NAME5' )
    {
      setclicks5(clicks5-1);
    }if(lastselectedtool==='NAME6' )
    {
      setclicks6(clicks6-1);
    }if(lastselectedtool==='NAME7' )
    {
      setclicks7(clicks7-1);
    }
    if(lastselectedtool==='NAME8' )
    {
      setclicks8(clicks8-1);
    }
    if(lastselectedtool==='NAME9' )
    {
      setclicks9(clicks9-1);
    }
  }
  const handle=() => {
    if(selectedTool==='NAME1' )
    {
      setclicks1(clicks1+1);
      setflag(0)
    }
    if(selectedTool==='NAME2')
    {
      setclicks2(clicks2+1);
      setflag(0)
    }if(selectedTool==='NAME3')
    {
      setclicks3(clicks3+1);
      setflag(0)
    }if(selectedTool==='NAME4')
    {
      setclicks4(clicks4+1);
      setflag(0)
    }if(selectedTool==='NAME5')
    {
      setclicks5(clicks5+1);
      setflag(0)
    }if(selectedTool==='NAME6')
    {
      setclicks6(clicks6+1);
      setflag(0)
    }if(selectedTool==='NAME7')
    {
      setclicks7(clicks7+1);
      setflag(0)
    }
    if(selectedTool==='NAME8')
    {
      setclicks8(clicks8+1);
      setflag(0)
    }
    if(selectedTool==='NAME9')
    {
      setclicks9(clicks9+1);
      setflag(0)
    }
  }
  
  
  
  useEffect(() => {
    // Call the functions here to ensure they use the updated state values.
   
    setflag(1);
    handle();
    balance();
   
   
  }, [selectedTool]);





    

  return (
    <>
      <div>
        {/* Button to toggle sidebar */}
        <button onClick={handleToggleSidebar}>Toggle Sidebar</button>
      </div>

      {/* Sidebar */}
      {activeMenu ? (
        <div>
          <Sidebar />
        </div>
      ) : (
        <div style={{ width: 0 }} dark:bg-secondary-dark-bg>
          <Sidebar />
        </div>
      )}

      {/* Components A and B */}
      <div>
        <ComponentA onSelectTool={handleSelectTool} />
        <ComponentB selectedTools={selectedTools} />
      </div>
        <Stack sx={{flexDirection: { x: 'column', md: 'row'}}}>

            <Box sx={{ height: { sx: "auto", md: "92vh" }, borderRight: "1px solid #3d3d3d", px: { sx: 0, md: 2 } }}>
                <Side_bar_MockUp selectedTool={selectedTool} setSelectedTool={setSelectedTool}  handle={handle} setlastselectedtool={setlastselectedtool}  click />
            </Box>
            <div>
              {clicks1}
              {selectedTool}
              {lastselectedtool}
         
              <Tool selectedTool={selectedTool}  clicks1={clicks1} clicks2={clicks2} clicks3={clicks3} clicks4={clicks4 } clicks5={clicks5} clicks6={clicks6} clicks7={clicks7} clicks8={clicks8} clicks9={clicks9}
              />
            
            </div>

    </Stack>

    </>
  )

}

export default App
