import React, { useState, useEffect } from "react";
import axios from "axios";

const API = "http://localhost:3000/api/v1";

function TodoForm({ fetchTodos, editTodo, setEditTodo }) {

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (editTodo) {
      setTitle(editTodo.title);
      setDescription(editTodo.description);
    }
  }, [editTodo]);

  const submitHandler = async (e) => {
    e.preventDefault();

    if (editTodo) {
      await axios.put(`${API}/updateTodo/${editTodo._id}`, {
        title,
        description
      });
      setEditTodo(null);
    } else {
      await axios.post(`${API}/createTodo`, {
        title,
        description
      });
    }

    setTitle("");
    setDescription("");
    fetchTodos();
  };

  return (

    <div className="row justify-content-center">

      <div className="col-md-5">

        <form onSubmit={submitHandler} className="card shadow p-3">

          <h5 className="text-center mb-3">
            {editTodo ? "Update Todo" : "Create Todo"}
          </h5>

          <input
            className="form-control mb-2"
            placeholder="Enter Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <input
            className="form-control mb-3"
            placeholder="Enter Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          <button className="btn btn-primary w-100">
            {editTodo ? "Update" : "Add Todo"}
          </button>

        </form>

      </div>

    </div>
  );
}

export default TodoForm;