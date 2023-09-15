import React, { useEffect, useState } from "react";
import "./App.css";
import Lists from "./components/Lists";
import Form from "./components/Form";

export default function App() {

  const [todoData, setTodoData] = useState(() => {
    const data = localStorage.getItem("todoData");
    return data ? JSON.parse(data) : [];
  });
  const [value, setValue] = useState("");

  useEffect(() => {
    localStorage.setItem("todoData", JSON.stringify(todoData));
  }, [todoData]);


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


  const handleDeleteAll = () => {
    setTodoData([]);
  }

  const handleClick = (id) => {
    let newTodoData = todoData.filter(data => data.id !== id);
    setTodoData(newTodoData);
    console.log(newTodoData);
  }

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
          <h1 className="p-1">할 일 목록</h1>
          <h1 onClick={handleDeleteAll} className="bg-gray-300 hover:bg-gray-500 p-1 border rounded">Delete All</h1>
        </div>

        <Form value={value} handleSubmit={handleSubmit} setValue={setValue} />

        <Lists todoData={todoData} setTodoData={setTodoData} handleClick={handleClick} handleCompleteChange={handleCompleteChange} />

      </div>
    </div>
  )

}