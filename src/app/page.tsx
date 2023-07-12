
// import TaskList from "@/components/TaskList";
import AddTaskPage from "./AddTask/page";
import TaskList from "./TaskList.tsx/page";

const Home: React.FC = () => {


  return (
    <div className="bg-gradient-to-br from-blue-800 to-purple-700 "> 
    <h2 className="text-slate-200 text-center text-3xl font-semibold pt-4  ">Task Management </h2>
    <hr className="w-80 mx-auto border-red-400" />
    
   <div className="flex flex-col gap-6">
    
   <TaskList />
    <AddTaskPage />
   </div>
    
    </div>
  );
};

export default Home;
