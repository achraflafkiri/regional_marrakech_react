import React, { useState } from "react";

const Ex1 = () => {
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [result, setResult] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (nom && prenom) {
      setResult(`Nom Complet est : ${nom}  ${prenom}`);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="nom">Nom: </label>
          <input
            type="text"
            name="nom"
            onChange={(e) => setNom(e.target.value)}
            placeholder="nom"
          />
        </div>
        <div>
          <label htmlFor="prenom">Prénom: </label>
          <input
            type="text"
            name="prenom"
            onChange={(e) => setPrenom(e.target.value)}
            placeholder="prenom"
          />
        </div>
        <br />
        <span>{result ? result : <div></div>}</span>
        <br />
        <button type="submit">Afficher Nom Complet</button>
      </form>
    </div>
  );
};

export default Ex1;
