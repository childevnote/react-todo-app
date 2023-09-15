import React, { useEffect, useState } from "react";
import "./App.css";
import List from "./components/List";
import Form from "./components/Form";

export default function App() {

  const [todoData, setTodoData] = useState(() =>{
    const data = localStorage.getItem("todoData");
    return data ? JSON.parse(data) : []; 
  });
  const [value, setValue] = useState("");

  const getStyle = (completed) => {
    return {
      padding: "10px",
      borderBottom: "1px #ccc dotted",
      textDecoration: completed ? "line-through" : 'none'
    }
  }

  useEffect(() => {
    localStorage.setItem("todoData", JSON.stringify(todoData));
  }, [todoData]);
  

  const handleClick = (id) => {
    let newTodoData = todoData.filter(data => data.id !== id);
    setTodoData(newTodoData);
    console.log(newTodoData);
  }


  const handleSubmit = (e) => {
    e.preventDefault(); //prevent page reloading

    let newTodo = {
      id: Date.now(),
      title: value,
      completed: false,
    };
    setTodoData(prev => [...prev, newTodo]);
    setValue("");
  };

  const handleCompleteChange = (id) => {
    let newTodoData = todoData.map(data => {
      if (data.id === id) {
        data.completed = !data.completed;
      }
      return data;
    });
    setTodoData(newTodoData);
  }


  return (
    <div className="flex items-center justify-center w-screen h-screen bg-blue-100">
      <div className="w-full p-6 m-4 bg-white rounded shadow lg:w-3/4 lg:max-w-lg">
        <div className="flex justify-between mb-4">
          <h1>할 일 목록</h1>
          <h1>Delete All</h1>
        </div>
        
        <Form value={value} handleSubmit={handleSubmit} setValue={setValue} />

        <List todoData={todoData} getStyle={getStyle} handleClick={handleClick} handleCompleteChange={handleCompleteChange} />
      </div>
    </div>
  )

}