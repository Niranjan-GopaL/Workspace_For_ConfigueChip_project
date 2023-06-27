import React, { useState } from 'react';
import { Box, Paper } from '@mui/material';

const CopyableBox = () => {
  // State to store the copies
  const [copies, setCopies] = useState([]);
  // State to track the count of copies
  const [copyCount, setCopyCount] = useState(0);

  // Function to handle copy click
  const handleCopyClick = () => {
    // Add a new copy to the copies array
    setCopies((prevCopies) => [
      ...prevCopies,
      // Box component representing a copy
      <Box
        key={copyCount}
        sx={{ marginRight: '10px', marginLeft: prevCopies.length > 0 ? '30px' : '0' }}
      >
        <Paper>Copy</Paper>
      </Box>,
    ]);
    // Increment the copy count
    setCopyCount((prevCount) => prevCount + 1);
  };

  return (
    <Box display="flex">
      {/* Clickable box */}
      <Box
        component={Paper}
        onClick={handleCopyClick}
        sx={{ backgroundColor: 'black', color: 'white', height: '50px' }}
      >
        Click to copy
      </Box>
      {/* Container for the copies */}
      <Box component={Paper} sx={{ marginLeft: '10px', backgroundColor: 'whitr', color: 'white', display: 'flex' }}>
        {copies}
      </Box>
      {/* Display the copy count */}
      <Box component={Paper} sx={{ marginLeft: '10px' }}>
        Copy Count: {copyCount}
      </Box>
    </Box>
  );
};

export default CopyableBox;
