import React from "react";

const PC = (props) => {
  const { id, ref, marque, prix, description } = props.infos;
  const setPanier = props.setPanier;

  const panier = props.panier;

  const stylePC = {
    border: "5px solid blue",
    backgroundColor: "pink",
    marginBottom: "10px",
    padding: "20px",
  };

  return (
    <li style={stylePC}>
      {id}- {ref}- {marque}- {prix}- {description}
    </li>
  );
};

export default PC;
