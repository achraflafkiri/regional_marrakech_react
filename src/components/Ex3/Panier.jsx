const Panier = (props) => {
  const { id, ref, marque, prix, description } = props.infos;

  const stylePC = {
    border: "5px solid blue",
    backgroundColor: "gray",
    marginBottom: "10px",
    padding: "20px",
  };

  return (
    <ul style={stylePC}>
      {id}- {ref}- {marque}- {prix}- {description}
    </ul>
  );
};

export default Panier;
