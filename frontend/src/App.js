import React, { useEffect, useState } from "react";
import axios from "axios";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

const API = "http://localhost:3000/api/v1";

function App() {

  const [todos,setTodos] = useState([]);
  const [editTodo,setEditTodo] = useState(null);

  const fetchTodos = async () => {
    const res = await axios.get(`${API}/getTodos`);
    setTodos(res.data.data);
  };

  useEffect(()=>{
    fetchTodos();
  },[]);

  const deleteTodo = async(id)=>{
    await axios.delete(`${API}/deleteTodo/${id}`);
    fetchTodos();
  }

  const editHandler = (todo)=>{
    setEditTodo(todo);
  }

  return (
    <div className="container mt-5">

      <h1 className="text-center mb-4">Todo Manager</h1>

      <TodoForm
        fetchTodos={fetchTodos}
        editTodo={editTodo}
        setEditTodo={setEditTodo}
      />

      <TodoList
        todos={todos}
        deleteTodo={deleteTodo}
        editHandler={editHandler}
      />

    </div>
  );
}

export default App;