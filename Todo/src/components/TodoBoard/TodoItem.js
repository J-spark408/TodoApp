// import React, { useState, useEffect } from "react";
// import styled from "styled-components";

// const Button = styled.button`
//   color: #bf4f74;
//   font-size: 1em;
//   margin: 0.2em;
//   padding: 0.25em 1em;
//   border: 2px solid #bf4f74;
//   border-radius: 3px;
//   &:hover {
//     cursor: pointer;
//     box-shadow: 0px 0px 2px 2px pink;
//   }
// `;

// const PriorButton = styled.button`
//   float: right;
//   margin-right: 2px;
//   margin-top: 2px;
//   background: lightsteelblue;
//   &.star {
//     width: 30px;
//     aspect-ratio: 1;
//     clip-path: polygon(50% 0, 79% 90%, 2% 35%, 98% 35%, 21% 90%);
//   }
//   &:hover {
//     background: gold;
//     cursor: pointer;
//   }
// `;

// const ListItem = styled.li`
//   line-height: 2em;
//   box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
//   &:hover {
//     cursor: pointer;
//     box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
//       rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
//       rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
//   }
// `;

// const TodoText = styled.p`
//   font-size: 1.3em;
//   margin-left: 1em;
// `;

// const EditInput = styled.input`
//   box-shadow: inset #abacaf 0 0 0 2px;
//   border: 0;
//   background: rgba(0, 0, 0, 0);
//   appearance: none;
//   width: 100%;
//   position: relative;
//   border-radius: 3px;
//   padding: 9px 12px;
//   line-height: 1.4;
//   color: rgb(0, 0, 0);
//   font-size: 20px;
//   font-weight: 400;
//   height: 50px;
//   transition: all 0.2s ease;
//   &:hover {
//     box-shadow: 0 0 0 0 #fff inset, #1de9b6 0 0 0 2px;
//   }
//   ,
//   &:focus {
//     background: #fff;
//     outline: 0;
//     box-shadow: 0 0 0 0 #fff inset, #1de9b6 0 0 0 3px;
//   }
// `;

// const TodoItem = (props) => {
//   const [toggleButton, setToggleButton] = useState(true);
//   const [crossedOff, setCrossedOff] = useState(false);
//   const [todoUndo, setTodoUndo] = useState(false);
//   const [editTodo, setEditTodo] = useState(props.text);
//   const [isEditting, setIsEditting] = useState(false);
//   //const [newTodo, setNewTodo] = useState("");

//   const isActive = props.activeItemId === props.id;

//   const handleToggle = () => {
//     if (isActive) {
//       //props.setActiveItemId(props.id);
//       if (!isEditting) {
//         setToggleButton(!toggleButton);
//       } else {
//         setToggleButton(toggleButton);
//       }
//     }
//   };

//   const todoUpdate = () => {
//     if (editTodo.length === 0) {
//       alert("Text is empty");
//       return false;
//     } else {
//       props.onEdit(props.id, editTodo);
//       setIsEditting(false);
//     }
//   };

//   return (
//     <ListItem
//       onClick={() => {
//         props.setActiveItemId(props.id);
//         setEditTodo(props.text);
//         handleToggle();
//       }}
//     >
//       {isEditting && isActive ? (
//         <>
//           <EditInput
//             value={editTodo}
//             onChange={(e) => {
//               setEditTodo(e.target.value);
//             }}
//             onKeyDown={(e) => {
//               if (e.key === "Enter") {
//                 todoUpdate();
//               }
//             }}
//           ></EditInput>
//           <div>
//             <Button
//               onClick={() => {
//                 todoUpdate();
//               }}
//             >
//               Update
//             </Button>
//             <Button
//               onClick={() => {
//                 setIsEditting(false);
//                 setEditTodo(props.text);
//               }}
//             >
//               Cancel
//             </Button>
//           </div>
//         </>
//       ) : (
//         <TodoText
//           style={{
//             textDecoration: crossedOff ? "line-through" : "none",
//           }}
//         >
//           {props.text}
//           <PriorButton className="star"></PriorButton>
//         </TodoText>
//       )}
//       {toggleButton && isActive ? (
//         <Button
//           onClick={(e) => {
//             e.stopPropagation();
//             setCrossedOff(!crossedOff);
//             setTodoUndo(!todoUndo);
//           }}
//         >
//           {todoUndo ? "Undo" : "Done"}
//         </Button>
//       ) : undefined}
//       {toggleButton && !crossedOff && isActive ? (
//         <Button
//           onClick={() => {
//             setIsEditting(true);
//           }}
//         >
//           Edit
//         </Button>
//       ) : undefined}
//       {toggleButton && isActive ? (
//         <Button
//           onClick={() => {
//             console.log("props id:", props.id);
//             props.onDelete(props.id);
//             if (crossedOff) {
//               setCrossedOff(false);
//               setTodoUndo(false);
//             }
//           }}
//         >
//           Delete
//         </Button>
//       ) : undefined}
//     </ListItem>
//   );
// };

// export default TodoItem;
