import React from 'react';

const TaskList: React.FC = () => {
  return (
    <div className="container mx-auto ">
      <table className="min-w-full bg-slate-800">
        <thead className="bg-gray-800">
          <tr>
            <th className="py-2 px-4 border-b border-gray-300 font-bold">Serial</th>
            <th className="py-2 px-4 border-b border-gray-300 font-bold">Title</th>
            <th className="py-2 px-4 border-b border-gray-300 font-bold">Description</th>
            <th className="py-2 px-4 border-b border-gray-300 font-bold">Edit</th>
            <th className="py-2 px-4 border-b border-gray-300 font-bold">Delete</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="py-2 px-4 border-b border-gray-300">1</td>
            <td className="py-2 px-4 border-b border-gray-300">Example Title 1</td>
            <td className="py-2 px-4 border-b border-gray-300">Description for Example Title 1</td>
           <td className="py-2 px-4 border-b border-gray-300">Edit</td>
            <td className="py-2 px-4 border-b border-gray-300">Delete</td>
          </tr>
          <tr>
            <td className="py-2 px-4 border-b border-gray-300">2</td>
            <td className="py-2 px-4 border-b border-gray-300">Example Title 2</td>
            <td className="py-2 px-4 border-b border-gray-300">Description for Example Title 2</td>
            <td className="py-2 px-4 border-b border-gray-300">Edit</td>
            <td className="py-2 px-4 border-b border-gray-300">Delete</td>
            
          </tr>
          <tr>
            <td className="py-2 px-4 border-b border-gray-300">3</td>
            <td className="py-2 px-4 border-b border-gray-300">Example Title 3</td>
            <td className="py-2 px-4 border-b border-gray-300">Description for Example Title 3</td>
            <td className="py-2 px-4 border-b border-gray-300"><button className='bg-green-400 px-2 py-2 rounded-md'>Edit</button></td>
            <td className="py-2 px-4 border-b border-gray-300">Delete</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TaskList;