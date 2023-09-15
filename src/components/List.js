import React from 'react'

export default function List({ todoData, getStyle, handleClick, handleCompleteChange }) {

  const btnStyle = {
    color: "#fff",
    border: "none",
    padding: "5px 9px",
    borderRadius: "50%",
    cursor: "pointer",
    float: "right",
    background: "#ddd",
    width: "30px",
    height: "30px",
  }

  return (
    <div>
      {todoData.map((data) => (
        <div style={getStyle(data.completed)} key={data.id}>
          <input type="checkbox" defaultChecked={data.completed} onChange={() => handleCompleteChange(data.id)} />
          {data.title}
          <button style={btnStyle} onClick={() => handleClick(data.id)}>x</button>
        </div>))}
    </div>
  )
}


