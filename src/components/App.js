import React, { useState } from "react";
import Board from "./Board";
import styled from "styled-components";

const BoardDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 2em;
  height: auto;
`;

const NewBoardDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 2em;
  height: 80%;
`;
// If its new page, set it center
const App = () => {
  const [defaultBoard, setDefaultBoard] = useState(false);

  return (
  //  <div>
  //    {defaultBoard ? (
        <BoardDiv>
          <Board setDefaultBoard={setDefaultBoard} />
        </BoardDiv>
  //    ) : (
  //      <NewBoardDiv>
  //        <Board setDefaultBoard={setDefaultBoard} />
  //      </NewBoardDiv>
  //    )}
  //  </div>
  );
};

export default App;
