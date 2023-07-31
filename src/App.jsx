// import './App.css'

import Sidebar from './components/Sidebar/Sidebar.jsx'
import Tool from './components/Tool/Tool.jsx'


export default App = () => {

    const [SelectedCategory, setSelectedCategory ] = useState('New');

    return (
        <>
        <Box sx={{ height: { sx: "auto", md: "92vh" }, borderRight: "1px solid #3d3d3d", px: { sx: 0, md: 2 } }}>
            <Sidebar selectedCategory={SelectedCategory} setSelectedCategory={setSelectedCategory} />
            </Box>
        </>
    )
}