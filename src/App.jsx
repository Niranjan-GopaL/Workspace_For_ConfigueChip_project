import { useState } from 'react';
import { Box } from '@mui/material';
import { Stack } from "@mui/material";
import {Typography} from '@mui/material'


// import Sidebar from './components/Sidebar/Sidebar.jsx'
// import Tool from './components/Tool/Tool.jsx'

import './App.css'
import Side_bar_MockUp from './components/Sidebar/Side_bar_MockUp';

const App = () => {

    const [selectedTool, setSelectedTool ] = useState('New');
    

    return (
        <Stack sx={{flexDirection: { x: 'column', md: 'row'}}}>

            <Box sx={{ height: { sx: "auto", md: "92vh" }, borderRight: "1px solid #3d3d3d", px: { sx: 0, md: 2 } }}>
                <Side_bar_MockUp selectedTool={selectedTool} setSelectedTool={setSelectedTool} />
            </Box>

        </Stack>
    )
}

export default App;