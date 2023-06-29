import React, { useState } from "react";

const App = () => {
  const [femme, setFemme] = useState("");
  const [homme, setHomme] = useState("");
  const [nomSociete, setNomSociete] = useState("");
  const [titrePr, setTitrePr] = useState("");
  const [checkSociete, setCheckSociete] = useState(false);
  const [tel, setTel] = useState("");
  const [disponibilite, setDisponibilite] = useState(false);
  const [tarif, setTarif] = useState("");
  const [competences, setCompetences] = useState([]);

  const handleAjouterCompetence = (e) => {
    e.preventDefault();
    const competences_maitrisees = document.getElementById(
      "competences_maitrisees"
    ).value;

    // console.log(competences_maitrisees);

    if (competences_maitrisees) {
      // competences.push(competences_maitrisees);
      // console.log(competences);
      setCompetences([...competences, competences_maitrisees]);
    }
  };

  const handleValider = (e) => {
    e.preventDefault();
  };

  return (
    <div style={{ border: "1px solid #000", padding: "10px 15px" }}>
      <form>
        <div>
          <div>
            <label htmlFor="gender">Femme</label>
            <input
              type="radio"
              name="gender"
              value={femme}
              id="gender"
              onChange={(e) => setFemme(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="gender">Homme</label>
            <input
              type="radio"
              name="gender"
              value={homme}
              id="gender"
              onChange={(e) => setHomme(e.target.value)}
            />
          </div>
        </div>
        <div>
          <label htmlFor="checkhavesociete">Oui, je suis une société.</label>
          <input
            type="checkbox"
            name="checkhavesociete"
            checked={checkSociete}
            onChange={(e) => setCheckSociete(e.target.checked)}
          />
        </div>
        {checkSociete && (
          <div>
            <label htmlFor="nomSociete">Nom de Société:</label>
            <input
              type="text"
              name="nom"
              value={nomSociete}
              id="nomSociete"
              onChange={(e) => setNomSociete(e.target.value)}
              placeholder="Nom de Société"
            />
          </div>
        )}
        <div>
          <label htmlFor="titrePr">Titre Profile*:</label>
          <input
            type="text"
            name="titrePr"
            value={titrePr}
            id="titrePr"
            onChange={(e) => setTitrePr(e.target.value)}
            placeholder="Titre Profile"
          />
        </div>
        <div>
          <label htmlFor="paysVille">Pays/Ville *:</label>
          <select name="paysVille" id="paysVille">
            <option value="maroc" defaultValue>
              Maroc
            </option>
          </select>
        </div>
        <div>
          <label htmlFor="tel">
            Téléphone *: <small>Confidential</small>:
          </label>
          <input
            type="text"
            name="tel"
            id="tel"
            value={tel}
            onChange={(e) => setTel(e.target.value)}
            placeholder="123456789"
          />
        </div>
        <hr />
        <div>
          <label htmlFor="disponibilite">Disponibilité *:</label>
          <input
            type="checkbox"
            name="disponibilite"
            checked={disponibilite}
            onChange={(e) => setDisponibilite(e.target.checked)}
          />
          (A distance uniquement)
        </div>
        <div>
          <label htmlFor="tarif">Tarif *:</label>
          <input
            type="text"
            name="tarif"
            id="tarif"
            value={tarif}
            onChange={(e) => setTarif(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="competences_maitrisees">
            Compétences maîtrisées:
          </label>
          <select name="competences_maitrisees" id="competences_maitrisees">
            <option value="" defaultValue>
              Please select an option
            </option>
            <option value="senior">Senior</option>
            <option value="debutant">Débutant</option>
          </select>
          <button onClick={handleAjouterCompetence}>Ajouter</button>
        </div>
        <div>
          <p>Liste de vos compétences:</p>
          <textarea rows="4" value={competences.join(", ")} readOnly />
        </div>
        <button onClick={handleValider}>Valider</button>
      </form>
    </div>
  );
};

export default App;
