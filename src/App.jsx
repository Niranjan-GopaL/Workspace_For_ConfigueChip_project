// App.js
import React, { useState } from 'react';
import './App.css';
import Sidebar from './components/Sidebar/Sidebar.jsx';
import ComponentA from './components/Tool/ComponentA.jsx';
import ComponentB from './components/Tool/ComponentB.jsx';

function App() {
  // State for the sidebar toggle
  const [activeMenu, setActiveMenu] = useState(false);

  const handleToggleSidebar = () => {
    setActiveMenu((prevState) => !prevState);
  };

  // State for selected tools in ComponentA
  const [selectedTools, setSelectedTools] = useState([]);

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
    </>
  );
}

export default App;
