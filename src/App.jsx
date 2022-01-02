/* eslint react-hooks/exhaustive-deps: off */
import React, { useEffect, useState } from "react";
import { ColorfulMessage } from "./components/ColorfulMessage";

const App = () => {
  const [num, setNum] = useState(0);
  const [faceShowFlag, setFaceShowFlag] = useState(false);

  const onClickCountUp = () => {
    setNum(num + 1);
  };

  const onClickSwitchShowFlag = () => {
    setFaceShowFlag(!faceShowFlag);
  };

  useEffect(() => {
    if (num > 0) {
      if (num % 3 === 0) {
        faceShowFlag || setFaceShowFlag(true);
      } else {
        faceShowFlag && setFaceShowFlag(false);
      }
    }
    //eslint-disable-next-line react-hooks/exhaustive-deps
    //numを監視している。処理の関心を分離できたり、最初の一回だけ実行する場合。
  }, [num]);

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
