import React, { useState, useEffect } from "react";
// import sweetalert2
import Swal from "sweetalert2";

function App() {
  const [player_1, setPlayer_1] = useState(0);
  const [player_2, setPlayer_2] = useState(0);

  useEffect(() => {
    setPlayer_1(JSON.parse(localStorage.getItem("player_1")));
  }, []); // Run once when the component mounts to initialize player_1

  useEffect(() => {
    setPlayer_2(JSON.parse(localStorage.getItem("player_2")));
  }, []); // Run once when the component mounts to initialize player_2

  useEffect(() => {
    localStorage.setItem("player_1", JSON.stringify(player_1));
  }, [player_1]);

  useEffect(() => {
    localStorage.setItem("player_2", JSON.stringify(player_2));
  }, [player_2]);

  // add palyer_1
  const addPlayer_1 = () => {
    setPlayer_1(player_1 + 1);
  };

  const addPlayer_2 = () => {
    setPlayer_2(player_2 + 1);
  };

  const resetPlayer_1 = () => {
    // set alert with if he realy want to reset
    if (player_1 > 0) {
      Swal.fire({
        title: "هل تريد اعادة تعيين العملية ؟",

        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "نعم",
      }).then((result) => {
        if (result.isConfirmed) {
          setPlayer_1(0);
          Swal.fire({
            title: "تمت عملية الاعادة بنجاح",
            icon: "success",
          });
        }
      });
    }
  };

  const resetPlayer_2 = () => {
    // set alert with if he realy want to reset
    if (player_2 > 0) {
      Swal.fire({
        title: "هل تريد اعادة تعيين العملية ؟",

        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "نعم",
      }).then((result) => {
        if (result.isConfirmed) {
          setPlayer_2(0);
          Swal.fire({
            title: "تمت عملية الاعادة بنجاح",
            icon: "success",
          });
        }
      });
    }
  };

  return (
    <div className="container">
      <h1>Count-game</h1>
      <div className="game">
        <div className="player_1">
          <h2>Player 1</h2>
          <div className="result">{player_1}</div>
          <button className="btn" onClick={addPlayer_1}>
            +
          </button>
          <button className="reset" onClick={resetPlayer_1}>
            Reset
          </button>
        </div>
        <div className="player_2">
          <h2>Player 2</h2>
          <div className="result">{player_2}</div>
          <button className="btn" onClick={addPlayer_2}>
            +
          </button>
          <button className="reset" onClick={resetPlayer_2}>
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
