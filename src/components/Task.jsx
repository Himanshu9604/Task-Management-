import React, { useState, useEffect } from "react";
import "./Tasks.css";

const Tasks = () => {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );
  const [taskName, setTaskName] = useState("");
  const [editingIndex, setEditingIndex] = useState(-1);
  const [searchTerm, setSearchTerm] = useState("");
  const [taskId, setTaskId] = useState(1);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (taskName.trim() !== "") {
      const newTask = {
        id: taskId,
        name: taskName,
      };
      setTasks([...tasks, newTask]);
      setTaskName("");
      setTaskId(taskId + 1);
    }
  };
  const deleteTask = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  };

  const editTask = (index) => {
    setEditingIndex(index);
    setTaskName(tasks[index].name);
  };

  const updateTask = () => {
    if (taskName.trim() !== "") {
      const updatedTasks = [...tasks];
      updatedTasks[editingIndex].name = taskName;
      setTasks(updatedTasks);
      setTaskName("");
      setEditingIndex(-1);
    }
  };

  const cancelEdit = () => {
    setTaskName("");
    setEditingIndex(-1);
  };

  const generateUniqueId = () => {
    return "_" + Math.random().toString(36).substr(2, 9);
  };

  const filteredTasks = tasks.filter((task) =>
    task.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="tasks-container">
      <h2>Tasks</h2>

      <input
        type="text"
        placeholder="Search tasks"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="task-list-container">
        <table className="task-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Task</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredTasks.map((task, index) => (
              <tr key={task.id}>
                <td>{task.id}</td>
                <td>
                  {editingIndex === index ? (
                    <input
                      className="task-input"
                      type="text"
                      value={taskName}
                      onChange={(e) => setTaskName(e.target.value)}
                    />
                  ) : (
                    <span>{task.name}</span>
                  )}
                </td>
                <td>
                  {editingIndex === index ? (
                    <>
                      <button className="update-button" onClick={updateTask}>
                        Update
                      </button>
                      <button className="cancel-button" onClick={cancelEdit}>
                        Cancel
                      </button>
                    </>
                  ) : (
                    <>
                      <button
                        className="edit-button"
                        onClick={() => editTask(index)}
                      >
                        Edit
                      </button>
                      <button
                        className="delete-button"
                        onClick={() => deleteTask(task.id)}
                      >
                        Delete
                      </button>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="add-task">
        <input
          className="add-input"
          type="text"
          placeholder="Add a new task"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
        />
        <button className="add-button" onClick={addTask}>
          Add Task
        </button>
      </div>
    </div>
  );
};

export default Tasks;
