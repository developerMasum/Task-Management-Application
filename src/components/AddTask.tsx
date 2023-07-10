// "use client"

// import { useState } from 'react';
// import { addItem, Item, useMST } from '../store';

// const AddTask = () => {
//   const [itemTitle, setItemTitle] = useState('');
//   const [itemDescription, setItemDescription] = useState('');
//   const [, dispatch] = useMST();

//   const handleAddItem = (e) => {
//     e.preventDefault();

//     const newItem: Item = {
//       id: Date.now(),
//       title: itemTitle.trim(),
//       description: itemDescription.trim(),
//     };

//     dispatch(addItem(newItem));

//     // Reset form values
//     setItemTitle('');
//     setItemDescription('');
//   };

//   return (
//     <div>
//       <h1>Add Item</h1>
//       <form onSubmit={handleAddItem}>
//         <div>
//           <label>Title:</label>
//           <input
//             type="text"
//             value={itemTitle}
//             onChange={(e) => setItemTitle(e.target.value)}
//             placeholder="Enter title"
//           />
//         </div>
//         <div>
//           <label>Description:</label>
//           <textarea
//             value={itemDescription}
//             onChange={(e) => setItemDescription(e.target.value)}
//             placeholder="Enter description"
//           />
//         </div>
//         <button type="submit">Add Item</button>
//       </form>
//     </div>
//   );
// };

// export default AddTask;
