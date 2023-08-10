// App.js
import './App.css'
import Side_bar_MockUp from './components/Sidebar/Side_bar_MockUp';
import React, { useState } from 'react';
import './App.css';
import Sidebar from './components/Sidebar/Sidebar.jsx';
import ComponentA from './components/Tool/ComponentA.jsx';
import ComponentB from './components/Tool/ComponentB.jsx';
import { Box } from '@mui/material';
import { Stack } from "@mui/material";


const App = () => {
  // State for the sidebar toggle
  const [activeMenu, setActiveMenu] = useState(false);
  const [selectedTools, setSelectedTools] = useState([]);


  const [selectedTool, setSelectedTool ] = useState('New');


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
                <Side_bar_MockUp selectedTool={selectedTool} setSelectedTool={setSelectedTool} />
            </Box>

    </Stack>

    </>
  )

}

export default App
