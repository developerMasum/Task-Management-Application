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
    const storedState = localStorage.getItem('mst_state');
    return storedState ? JSON.parse(storedState) : initialState;
  });

  const setLocalStorageState = (newState: MSTState) => {
    localStorage.setItem('mst_state', JSON.stringify(newState));
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
    const storedState = localStorage.getItem('mst_state');
    const parsedState: MSTState = storedState ? JSON.parse(storedState) : initialState;
    return parsedState.tasks;
  };

  return [state, addTask, editTask, deleteTask, getTasks];
};
