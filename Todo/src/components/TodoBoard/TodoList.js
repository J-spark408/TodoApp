// import React, { useState } from "react";
// import styled from "styled-components";
// import TodoItem from "./TodoItem";

// const UnordList = styled.ul`
//   list-style-type: none;
//   margin: 2em;
//   padding: 0;
//   width: 90%;
// `;

// const TodoList = (props) => {
//   const [activeItemId, setActiveItemId] = useState(null);
//   //const [todos, setTodos] = useState(props.todoArray);
//   //console.log(props.todoArray);
//   const handleDelete = (id) => {
//     const newTodos = props.todoArray.filter((item, index) => index !== id);
//     props.setListOfTodos(newTodos);
//   };

//   const handleUpdate = (id, newText) => {
//     const updateTodos = props.todoArray.map((item, index) =>
//       index === id ? newText : item
//     );
//     props.setListOfTodos(updateTodos);
//   };

//   return (
//     <UnordList>
//       {props.todoArray.map((item, index) => {
//         return (
//           <TodoItem
//             key={index}
//             text={item}
//             id={index}
//             //id={props.todoArray.indexOf(item)}
//             array={props.todoArray}
//             onDelete={handleDelete}
//             onEdit={handleUpdate}
//             activeItemId={activeItemId}
//             setActiveItemId={setActiveItemId}
//           />
//         );
//       })}
//     </UnordList>
//   );
// };

// export default TodoList;
