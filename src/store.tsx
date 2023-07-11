import React from 'react';

export interface Task {
  id: number;
  title: string;
  description: string;
  status: string,
}

export interface MSTState {
  tasks: Task[];
}

export const useMST = (): [MSTState, (task: Task) => void, (updatedTask: Task) => void, (taskId: number) => void, () => Task[]] => {
  const initialState: MSTState = {
    tasks: [],
  };

  const [state, setState] = React.useState<MSTState>(() => {
    if (typeof window !== 'undefined') {
      const storedState = localStorage.getItem('tasks_management');
      return storedState ? JSON.parse(storedState) : initialState;
    } else {
      console.log('localStorage is not available');
      return initialState; // Provide a default initial state
    }
  });
  

  const setLocalStorageState = (newState: MSTState) => {
    localStorage.setItem('tasks_management', JSON.stringify(newState));
  };

  const addTask = (task: Task) => {
    setState((prevState) => {
      const newState = {
        ...prevState,
        tasks: [...prevState.tasks, task],
      };
      setLocalStorageState(newState);
      return newState;
    });
  };

  const editTask = (updatedTask: Task) => {
    setState((prevState) => {
      const updatedTasks = prevState.tasks.map((task) =>
        task.id === updatedTask.id ? updatedTask : task
      );

      const newState = {
        ...prevState,
        tasks: updatedTasks,
      };
      setLocalStorageState(newState);
      return newState;
    });
  };

  const deleteTask = (taskId: number) => {
    setState((prevState) => {
      const updatedTasks = prevState.tasks.filter((task) => task.id !== taskId);
      const newState: MSTState = {
        ...prevState,
        tasks: updatedTasks,
      };
      setLocalStorageState(newState);
      return newState;
    });
  };
  
  const getTasks = () => {
    if (typeof window !== 'undefined' && localStorage.getItem('tasks_management')) {
      const storedState = localStorage.getItem('tasks_management');
      const parsedState: MSTState = JSON.parse(storedState!);
      return parsedState.tasks;
    } else {
      return initialState.tasks;
    }
  };
  

  return [state, addTask, editTask, deleteTask, getTasks];
};
