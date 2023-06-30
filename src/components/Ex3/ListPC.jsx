import React, { useState } from "react";
import PC from "./PC";
import Panier from "./Panier.jsx";

export default function ListPC() {
  const listPC = [
    {
      id: 1,
      ref: "ref1",
      marque: "TOSHIBA",
      prix: 15000,
      description: "PC Portable Gamer TOSHIBA",
    },
    {
      id: 2,
      ref: "ref2",
      marque: "ACER",
      prix: 5000,
      description: "PC Portable Gamer ACER",
    },
    {
      id: 3,
      ref: "ref3",
      marque: "HUAWEI",
      prix: 17000,
      description: "PC Portable Gamer HUAWEI",
    },
  ];

  const [panier, setPanier] = useState([]);

  const styleListPC = {
    border: "2px solid #000",
    padding: "10px",
    width: "600px",
  };

  const addToPanier = (pc) => {
    setPanier([...panier, pc]);
  };

  const removeFromPanier = (pcId) => {
    setPanier(panier.filter((pc) => pc.id !== pcId));
  };

  return (
    <>
      <div style={styleListPC}>
        <h1>Liste des PCs</h1>
        <ul style={{ listStyleType: "none", padding: "10px" }}>
          {listPC.map((pc) => (
            <PC
              key={pc.id}
              infos={pc}
              addToPanier={addToPanier}
              removeFromPanier={removeFromPanier}
            />
          ))}
        </ul>
        {panier.length === 0 ? (
          <h1>Votre panier est vide</h1>
        ) : (
          <div>
            <h2>Les articles dans votre panier sont :</h2>
            <ul style={{ listStyleType: "none", padding: "20px" }}>
              {panier.map((pc) => (
                <Panier
                  key={pc.id}
                  infos={pc}
                  removeFromPanier={removeFromPanier}
                />
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
}
