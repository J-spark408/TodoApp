// import React from "react";
// import styled from "styled-components";

// const ViewOptionDiv = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   gap: 12px;
//   padding: 12px;
//   background: #f4f4f4;
//   border-radius: 8px;
//   box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
//   margin: auto;
//   max-width: 400px;
// `;

// const OptionButton = styled.button`
//   background: ${(props) =>
//     props.active ? "linear-gradient(45deg, #ff6b6b, #ff8e53)" : "#fff"};
//   color: ${(props) => (props.active ? "#fff" : "#333")};
//   font-size: 18px;
//   font-weight: ${(props) => (props.active ? "bold" : "normal")};
//   padding: 10px 16px;
//   border: none;
//   border-radius: 6px;
//   cursor: pointer;
//   transition: all 0.3s ease-in-out;
//   font-family: "Poppins", sans-serif;
//   box-shadow: ${(props) =>
//     props.active ? "0px 3px 10px rgba(255, 107, 107, 0.4)" : "none"};

//   &:hover {
//     transform: scale(1.05);
//     background: linear-gradient(45deg, #ff6b6b, #ff8e53);
//     color: #fff;
//     box-shadow: 0px 3px 12px rgba(255, 107, 107, 0.5);
//   }
// `;

// const ViewOption = ({ refreshEvents, weeklyView, setWeeklyView }) => {
//   const handleClick = (view) => {
//     refreshEvents();
//     setWeeklyView(view);
//   };

//   return (
//     <ViewOptionDiv>
//       <OptionButton
//         active={weeklyView === "Weekly"}
//         onClick={() => handleClick("Weekly")}
//       >
//         Weekly
//       </OptionButton>
//       <OptionButton
//         active={weeklyView === "7-Days"}
//         onClick={() => handleClick("7-Days")}
//       >
//         7-Days
//       </OptionButton>
//       <OptionButton
//         active={weeklyView === "Pinned"}
//         onClick={() => handleClick("Pinned")}
//       >
//         Pinned
//       </OptionButton>
//     </ViewOptionDiv>
//   );
// };

// export default ViewOption;
