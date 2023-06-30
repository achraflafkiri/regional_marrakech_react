import React, { useState } from "react";

const Ex2 = () => {
  const [result, setResult] = useState();

  const [count, setCount] = useState(2);
  const [pas, setPas] = useState(2);

  const handleClick = (e) => {
    e.preventDefault();

    setCount(count + pas);

    console.log("count => ", count);
    console.log("pas => ", pas);

    if (count < 10) {
      setResult(`Compteur est : ${count}`);
    } else if (count === 10) {
      setResult(`Fin du Jeu`);
      setCount(0);
    }
  };

  const handleReset = () => {
    //
  };

  return (
    <div>
      <h1>Composant Compteur</h1>

      <ul>
        <li>Pas: 2</li>
        <li>Debut: 2</li>
        <li>Fin: 10</li>
      </ul>

      <button type="submit" onClick={handleClick}>
        Jouer
      </button>
      <button type="submit" onClick={handleReset}>
        Initialiser Jeu
      </button>
      <br />

      {result ? result : <div></div>}
    </div>
  );
};

export default Ex2;
