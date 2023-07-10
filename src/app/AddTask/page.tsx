"use client"
import React, { useState } from 'react';
import { Task, useMST } from '../../store';

const AddTaskPage: React.FC = () => {
  const [taskTitle, setTaskTitle] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [taskStatus, setTaskStatus] = useState('');
  const [, addTask] = useMST();

  const handleAddTask = () => {
    const newTask: Task = {
      id: Date.now(),
      title: taskTitle.trim(),
      description: taskDescription.trim(),
      status: taskStatus.trim(),
    };
    addTask(newTask);
    // router.push('/tasks'); // Redirect to tasks page after adding a task
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Add Task</h1>
      <form className="text-black">
        <div className="mb-4">
          <label className="block text-gray-700">Title:</label>
          <input
            className="border border-gray-300 rounded-md p-2 w-full"
            type="text"
            value={taskTitle}
            onChange={(e) => setTaskTitle(e.target.value)}
            placeholder="Enter title"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Description:</label>
          <textarea
            className="border border-gray-600 rounded-md p-2 w-full"
            value={taskDescription}
            onChange={(e) => setTaskDescription(e.target.value)}
            placeholder="Enter description"
          ></textarea>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Status:</label>
          <input
            className="border border-gray-300 rounded-md p-2 w-full"
            type="text"
            value={taskStatus}
            onChange={(e) => setTaskStatus(e.target.value)}
            placeholder="Enter status"
          />
        </div>
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          type="button"
          onClick={handleAddTask}
        >
          Add Task
        </button>
      </form>
    </div>
  );
};

export default AddTaskPage;
