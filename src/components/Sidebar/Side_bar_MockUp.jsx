import { Box } from '@mui/material';
import { Stack } from "@mui/material";
import './Side_bar_MockUp.css'

// This is that list we made in utils/constatnts.js
// import { tools } from "../Tool/{import_an_array_of_Tools}";

const tools = [
    {icon:"ICON1 ", name: "NAME1"},
    {icon:"ICON2 ", name: "NAME2"},
    {icon:"ICON3 ", name: "NAME3"},
    {icon:"ICON4 ", name: "NAME4"},
    {icon:"ICON5 ", name: "NAME5"},
    {icon:"ICON6 ", name: "NAME6"},
    {icon:"ICON7 ", name: "NAME7"},
    {icon:"ICON8 ", name: "NAME8"},
    {icon:"ICON9 ", name: "NAME9"},
]

/*
<------------------------   basic structure      ------------------------>

{category.map((category) => (
    <button>
        <span>{category.icon}</span>
        <span>{category.name}</span>
    </button>
))}
*/



/* <--------------  STATE MANGEMENT ------------------>

-> Basic states
-> When user selects a tool, we need to change the state 
   {ONLY COLOR!!} of the selected tool.
-> When user clicks the Box, we revert the color back 
   to it's initial color
   
*/

const SPACE = "  "



const Side_bar_MockUp = ({ selectedTool, setSelectedTool ,handle,setlastselectedtool}) => (
   
    
  

        <Stack direction="row" sx={{
            overflowY: "auto",
            flexDirection: { md: "column" },
            width: "200px", 
            borderRadius: 3
        }}>
  




        <Box sx= {{backgroundColor: '#4a3579'}}> 

        {tools.map((tool) => (

        //the color of the button has to be dynamic
        <button
            className="tool-btn"
            onClick={() => {
                setlastselectedtool(selectedTool);
                setSelectedTool(tool.name);
                
                handle();
                
             
              
              }}
              
            style={{background: tool.name === selectedTool && "purple",color: "green",}}
            key={tool.name}
        >
      

            {/* THIS IS THE TOOL NAME */}
            <span style={{ color: tool.name === selectedTool ? "yellow" : "red", marginright: "15px" }}>
            {tool.icon}
            </span>

            <div style={{width:"9px"}} />

            {/* THIS IS THE TOOL ICON */}
            <span style={{ opacity: tool.name === selectedTool ? "1" : "0.8" }}>
            {tool.name}
            </span>

        </button>

        ))}
        </Box>



    </Stack>
)

export default Side_bar_MockUp;

/*

In React, the key attribute is used when rendering lists of elements to help React efficiently update and reorder
 the elements. When rendering a list of items in React using a loop  or mapping, 
 you should provide a unique key prop to each child element. 
 This helps React identify individual elements and track their changes efficiently during re-renders.

                                --- From GPT

So key should be unique for each element. That's it.

*/
