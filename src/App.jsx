import React, { useState } from "react";
import ColorfulMessage from "./components/ColorfulMessage";

const App = () => {
  const [num, setNum] = useState(0);
  const [faceShowFlag, setFaceShowFlag] = useState(true);

  const onClickCountUp = () => {
    setNum(num + 1);
  };

  const onClickSwitchShowFlag = () => {
    setFaceShowFlag(!faceShowFlag);
  };

  return (
    <>
      <h1 style={{ color: "red" }}>TO DO APP</h1>
      <ColorfulMessage color="Gray">Memo</ColorfulMessage>
      <ColorfulMessage color="pink">Reply</ColorfulMessage>
      <button onClick={onClickCountUp}>カウントアップするよ</button>
      <br />
      <button onClick={onClickSwitchShowFlag}>ON/OFF</button>
      <p>{num}</p>
      {faceShowFlag && <p>(T_T)</p>}
    </>
  );
};

export default App;
