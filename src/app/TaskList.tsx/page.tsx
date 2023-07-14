"use client";
import React, { useState } from "react";
import { useMST, Task } from "../../store";
import Swal from "sweetalert2";

const TaskList: React.FC = () => {
  const [, addTask, editTask, deleteTask, getTasks] = useMST();
  const tasks = getTasks();
  const [editTaskId, setEditTaskId] = useState<number | null>(null);
  const [newEditTaskId, setNewEditTaskId] = useState<Task | null>(null);

  const handleDeleteTask = (taskId: number) => {
    deleteTask(taskId);
    localStorage.setItem("tasks", JSON.stringify(getTasks()));
    setEditTaskId(null);
    setNewEditTaskId(null);
    Swal.fire({
      position: "center",
      icon: "success",
      title: "task deleted successfully",
      showConfirmButton: false,
      timer: 1000,
    }).then(() => {
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    });
  };

  const handleEditTask = (taskId: number) => {
    const taskToEdit = tasks.find((task) => task.id === taskId);
    if (taskToEdit) {
      setEditTaskId(taskId);
      setNewEditTaskId({ ...taskToEdit });
    }
  };

  const handleCancelEdit = () => {
    setEditTaskId(null);
    setNewEditTaskId(null);
  };

  const handleSaveTask = () => {
    if (newEditTaskId) {
      editTask({ ...newEditTaskId });
      const updatedTasks = getTasks();
      localStorage.setItem("tasks", JSON.stringify(updatedTasks));
      handleCancelEdit();
    }
  };

  return (
    <div className=" p-4 w-full">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-2xl text-center font-bold mb-4 mt-5">All Tasks</h1>
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-200">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b text-center">Title</th>
                <th className="py-2 px-4 border-b text-center">Description</th>
                <th className="py-2 px-4 border-b text-center">Status</th>
                <th className="py-2 px-4 border-b text-center">Edit</th>
                <th className="py-2 px-4 border-b text-center">Delete</th>
              </tr>
            </thead>
            <tbody>
              {tasks?.map((task) => (
                <tr key={task.id}>
                  {editTaskId === task.id ? (
                    <>
                      <td className="py-2 px-4 border-b rounded-lg text-black">
                        <input
                          type="text"
                          value={newEditTaskId?.title || ""}
                          onChange={(e) =>
                            setNewEditTaskId((prevTask) => ({
                              ...prevTask!,
                              title: e.target.value,
                            }))
                          }
                          className="w-full bg-gray-200 border border-gray-300 rounded px-2 py-1"
                        />
                      </td>
                      <td className="py-2 px-4 border-b text-black">
                        <input
                          type="text"
                          value={newEditTaskId?.description || ""}
                          onChange={(e) =>
                            setNewEditTaskId((prevTask) => ({
                              ...prevTask!,
                              description: e.target.value,
                            }))
                          }
                          className="w-full bg-gray-200 border border-gray-300 rounded px-2 py-1"
                        />
                      </td>
                      <td className="py-2 px-4 border-b text-black">
                        <select
                          value={newEditTaskId?.status || ""}
                          onChange={(e) =>
                            setNewEditTaskId((prevTask) => ({
                              ...prevTask!,
                              status: e.target.value,
                            }))
                          }
                          className="w-full bg-gray-200 border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring focus:border-blue-300"
                        >
                          <option value="">Select status</option>
                          <option value="To Do">To Do</option>
                          <option value="In Progress">In Progress</option>
                          <option value="Completed">Completed</option>
                        </select>
                      </td>

                      <td className="py-2 px-4 border-b">
                        <button
                          className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded mr-2"
                          onClick={handleSaveTask}
                        >
                          Save
                        </button>
                      </td>
                      <td className="py-2 px-4 border-b text-center">
                        <button
                          className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
                          onClick={handleCancelEdit}
                        >
                          Cancel
                        </button>
                      </td>
                    </>
                  ) : (
                    <>
                      <td className="py-2 px-4 border-b text-center">
                        {task.title}
                      </td>
                      <td className="py-2 px-4 border-b text-center">
                        {task.description}
                      </td>
                      <td className="py-2 px-4 border-b text-center">
                        {task.status}
                      </td>
                      <td className="py-2 px-4 border-b text-center">
                        <button
                          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mr-2"
                          onClick={() => handleEditTask(task.id)}
                        >
                          Edit
                        </button>
                      </td>
                      <td className="py-2 px-4 border-b text-center">
                        <button
                          className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
                          onClick={() => handleDeleteTask(task.id)}
                        >
                          Delete
                        </button>
                      </td>
                    </>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TaskList;
