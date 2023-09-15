import React from 'react'

const List = React.memo(({
  data,
  provided,
  snapshot,
  handleClick,
  handleCompleteChange,
}) => {

  console.log("List rendered");
  return (
    <div>
      <div
        key={data.id}
        {...provided.draggableProps}
        ref={provided.innerRef}
        {...provided.dragHandleProps}
        className={`${snapshot.isDragging ? "bg-gray-400" : "bg-gray-100"
          } flex items-center justify-between w-full px-4 py-1 my-3 text-gray-600  border rounded shadow`}
      >
        <div className='items-center'>
          <input type="checkbox" defaultChecked={data.completed} onChange={() => handleCompleteChange(data.id)} />
          <span className={!data.completed ? '' : 'line-through text-gray-400'}> {data.title}</span>
        </div>
        <div className='items-center'> <button className='px-4 py-2 float-right' onClick={() => handleClick(data.id)}>x</button></div>
      </div>
    </div>
  )
});

export default List;