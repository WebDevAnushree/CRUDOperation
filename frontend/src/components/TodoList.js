import React from "react";

function TodoList({ todos, deleteTodo, editHandler }) {
  return (
    <div className="card mt-4 shadow">

      <div className="card-header bg-dark text-white">
        <h4 className="mb-0">Todo List</h4>
      </div>

      <div className="card-body p-0">

        <table className="table table-bordered table-hover text-center mb-0">

          <thead className="table-light">
            <tr>
              <th>Title</th>
              <th>Description</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>

            {todos.length === 0 ? (
              <tr>
                <td colSpan="3">No Todos Available</td>
              </tr>
            ) : (
              todos.map((todo) => (
                <tr key={todo._id}>
                  <td>{todo.title}</td>
                  <td>{todo.description}</td>

                  <td>
                    <button
                      className="btn btn-warning btn-sm me-2"
                      onClick={() => editHandler(todo)}
                    >
                      Edit
                    </button>

                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => deleteTodo(todo._id)}
                    >
                      Delete
                    </button>
                  </td>

                </tr>
              ))
            )}

          </tbody>

        </table>

      </div>

    </div>
  );
}

export default TodoList;