import { Box } from '@mui/material';
import { Stack } from "@mui/material";


// This is that list we made in utils/constatnts.js
// import { tools } from "../Tool/{import_an_array_of_Tools}";

/*


<------------------------       basic structure      ------------------------>

{category.map((category) => (
    <button>
        <span>{category.icon}</span>
        <span>{category.name}</span>
    </button>
))}




*/



tools = [
    {icon:"THIS IS THE ICON OF THE TOOL1", name: "THIS IS THE NAME OF THE TOOL1"},
    {icon:"THIS IS THE ICON OF THE TOOL2", name: "THIS IS THE NAME OF THE TOOL2"},
    {icon:"THIS IS THE ICON OF THE TOOL3", name: "THIS IS THE NAME OF THE TOOL3"},
    {icon:"THIS IS THE ICON OF THE TOOL4", name: "THIS IS THE NAME OF THE TOOL4"},
    {icon:"THIS IS THE ICON OF THE TOOL5", name: "THIS IS THE NAME OF THE TOOL5"},
]


export default Component = ({ selectedTool, setSelectedTool }) => (

    <Stack direction="row" sx={{overflowY: "auto",height: { sx: "auto", md: "95%" },flexDirection: { md: "column" },}}>
        <Box sx= {{backgroundColor: '#000'}}> 

        {tools.map((tool) => (

        //the color of the button has to be dynamic
        <button
            classname="tool-btn"
            onclick={() => setSelectedTool(tool.name)}  
            style={{background: tool.name === selectedTool && "#fc1503",color: "white",}}
            key={tool.name}>



        </button>

        ))}  
    
        </Box>
    </Stack>


)
