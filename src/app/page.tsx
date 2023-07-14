import AddTaskPage from "./AddTask/page";
import TaskList from "./TaskList.tsx/page";

const Home: React.FC = () => {
  return (
    <div className="bg-gradient-to-br from-blue-800 to-purple-700 min-h-screen">
    <h2 className="text-slate-200 text-center text-3xl font-semibold pt-4">Task Management</h2>
    <hr className="w-80 mx-auto border-red-400" />
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div>
          <TaskList />
        </div>
        <div className="mt-20">
          <AddTaskPage />
        </div>
      </div>
    </div>
  </div>
  
  );
};

export default Home;
