import React from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const Tool = () => {
  const [tools, setTools] = React.useState([
    { id: 'tool1', name: 'Tool 1' },
    { id: 'tool2', name: 'Tool 2' },
    { id: 'tool3', name: 'Tool 3' },
  ]);

  // Function called when a drag and drop operation is completed
  const handleDragEnd = (result) => {
    if (!result.destination) return; // If the tool is not dropped in a valid destination, return

    // Reorder the tools based on the drag and drop operation
    const updatedTools = [...tools];
    const [removed] = updatedTools.splice(result.source.index, 1);
    updatedTools.splice(result.destination.index, 0, removed);

    setTools(updatedTools); // Update the state with the new order of tools
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Droppable droppableId="tools">
        {(provided) => (
          <div
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {/* Map over the tools array and render draggable tool items */}
            {tools.map((tool, index) => (
              <Draggable key={tool.id} draggableId={tool.id} index={index}>
                {(provided) => (
                  <div
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                  >
                    {tool.name}
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default Tool;
