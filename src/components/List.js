import React from 'react'
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

export default function List({ todoData, handleClick, handleCompleteChange }) {

  return (
    <div>
      <DragDropContext>
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
                  <div key={data.id} {...provided.draggableProps} ref={provided.innerRef} 
                  {...provided.dragHandleProps}
                  className='flex items-center justify-between w-full px-4 py-1 my-3 text-gray-600 bg-gray-100 border rounded shadow'>
                    <div className='items-center'>
                      <input type="checkbox" defaultChecked={data.completed} onChange={() => handleCompleteChange(data.id)} />
                      <span className={!data.completed ? '' : 'line-through'}> {data.title}</span>
                    </div>
                    <div className='items-center'> <button className='px-4 py-2 float-right' onClick={() => handleClick(data.id)}>x</button></div>
                  </div>
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


