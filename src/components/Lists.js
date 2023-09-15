

import React from 'react'
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import List from './List';

export default function Lists({ todoData, setTodoData, handleClick, handleCompleteChange }) {

  const handleEnd = (result) => {
    if (!result.destination) return;
    const items = Array.from(todoData);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    setTodoData(items);
  }

  return (
    <div>
      <DragDropContext onDragEnd={handleEnd}>
        <Droppable droppableId='todo'>
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {todoData.map((data, index) => (
                <Draggable
                  key={data.id}
                  draggableId={data.id.toString()}
                  index={index}
                >
                  {(provided, snapshot) => (
                    <List key={data.id} id={data.id} data={data} provided={provided} snapshot={snapshot} setTodoData={setTodoData} todoData={todoData} handleClick={handleClick} handleCompleteChange={handleCompleteChange} />
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  )
}


