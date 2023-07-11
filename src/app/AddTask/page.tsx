"use client"
import React, { useState } from 'react';
import { Task, useMST } from '../../store';
import Swal from 'sweetalert2';


const AddTaskPage: React.FC = () => {
  const [taskTitle, setTaskTitle] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [taskStatus, setTaskStatus] = useState('');
  const [, addTask] = useMST();

  const [titleError, setTitleError] = useState('');
  const [descriptionError, setDescriptionError] = useState('');
  const [statusError, setStatusError] = useState('');

  const handleAddTask = () => {
    // Reset previous errors
    setTitleError('');
    setDescriptionError('');
    setStatusError('');

    let hasError = false;

    if (taskTitle.trim() === '') {
      setTitleError('Title is required');
      hasError = true;
    } else if (taskTitle.length > 30) {
      setTitleError('Title should be less than or equal to 30 characters');
      hasError = true;
    } 

    if (taskDescription.trim() === '') {
      setDescriptionError('Description is required');
      hasError = true;
    } else if (taskDescription.length > 50) {
      setDescriptionError('Description should be less than or equal to 50 characters');
      hasError = true;
    }

    if (taskStatus.trim() === '') {
      setStatusError('Status is required');
      hasError = true;
    } else if (taskStatus.length > 10) {
      setStatusError('Status should be less than or equal to 10 characters');
      hasError = true;
    }

    if (hasError) {
      return;
    }

    const newTask: Task = {
      id: Date.now(),
      title: taskTitle.trim(),
      description: taskDescription.trim(),
      status: taskStatus.trim(),
    };
    addTask(newTask);

    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Your work has been saved',
      showConfirmButton: false,
      timer: 1000
    }).then(() => {
      // Reload the page after Swal is fully shown
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    });
  };

  return (
    <div className="w-1/2 mx-auto">
      <h1 className="text-2xl font-bold mb-4 text-center pt-4">Add Task</h1>
      <form className="text-black">
        <div className="mb-4">
          <label className="block text-gray-300">Title:</label>
          <input
            className="border border-gray-300 rounded-md p-2 w-full"
            type="text"
            value={taskTitle}
            onChange={(e) => {
              if (!/\d/.test(e.target.value)) {
                setTaskTitle(e.target.value);
              } else {
                setTitleError('Title should not contain numbers');
              }
            }}
            placeholder="Enter title"
          />
          {titleError && <p className="text-red-500">{titleError}</p>}
        </div>
        <div className="mb-4">
          <label className="block text-gray-300">Description:</label>
          <textarea
            className="border border-gray-600 rounded-md p-2 w-full"
            value={taskDescription}
            onChange={(e) => setTaskDescription(e.target.value)}
            placeholder="Enter description"
          ></textarea>
          {descriptionError && <p className="text-red-500">{descriptionError}</p>}
        </div>
        <div className="mb-4">
          <label className="block text-gray-300">Status:</label>
          <input
            className="border border-gray-300 rounded-md p-2 w-full"
            type="text"
            value={taskStatus}
            onChange={(e) => setTaskStatus(e.target.value)}
            placeholder="Enter status"
          />
          {statusError && <p className="text-red-500">{statusError}</p>}
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
