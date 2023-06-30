import { useState } from "react";

const App = () => {
  const [deja_redoublant, setDeja_redoublant] = useState(false);
  const [annee, setAnnee] = useState("1_eme_annee");
  const [nombres_total_dabsences, setNombres_total_dabsences] = useState(0);
  const [moyenne_generale, setMoyenne_generale] = useState("");
  const [resultat, setResultat] = useState("");

  const handleClick = (e) => {
    e.preventDefault();

    if (!moyenne_generale) {
      alert("moyenne generale is required");
    }

    const moyenne = parseFloat(moyenne_generale);
    if (isNaN(moyenne)) {
      setResultat("");
      return;
    }

    if (moyenne >= 0 && moyenne < 10) {
      setResultat("redoublant");
    } else if (moyenne >= 10 && moyenne <= 20) {
      setResultat("admin");
    } else {
      setResultat("");
    }
  };

  return (
    <div style={{ border: "1px solid #000", padding: "20px 15px" }}>
      <div>
        <label htmlFor="annee">Année</label>
        <select
          name="annee"
          id="annee"
          value={annee}
          onChange={(e) => setAnnee(e.target.value)}
        >
          <option value="1_eme_annee">1ère Année</option>
          <option value="2_eme_annee">2ème Année</option>
        </select>
      </div>
      <div>
        <label htmlFor="deja_redoublant">Déjà redoublant : </label>
        <input
          type="checkbox"
          name="deja_redoublant"
          id="deja_redoublant"
          checked={deja_redoublant}
          onChange={(e) => setDeja_redoublant(e.target.checked)}
        />
      </div>
      <div>
        <label htmlFor="moyenne_generale">Moyenne générale : </label>
        <input
          type="number"
          name="moyenne_generale"
          value={moyenne_generale}
          onChange={(e) => setMoyenne_generale(e.target.value)}
          id="moyenne_generale"
        />
      </div>
      <div>
        <label htmlFor="Nombres_total_dabsences">
          Nombres total d'absences :{" "}
        </label>
        <input
          type="number"
          name="Nombres_total_dabsences"
          value={nombres_total_dabsences}
          id="Nombres_total_dabsences"
          onChange={(e) => setNombres_total_dabsences(e.target.value)}
        />
      </div>
      <div>
        <p> -----Décision : {resultat}</p>
      </div>
      <button type="submit" onClick={handleClick}>
        OK
      </button>
    </div>
  );
};

export default App;
