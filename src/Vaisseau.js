import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
export default class Vaisseau extends React.Component {
  state = {
    vaisseau: [],
    pilotes: [],
  };

  // faire la requête d'un personnage
  async componentDidMount() {
    let id = window.location.href.split("/")[4];
    await axios.get(`https://swapi.dev/api/starships/${id}`).then((res) => {
      this.setState({ vaisseau: res.data });

      if (res.data.pilots) {
        const temp = [];
        res.data.pilots.forEach(async (pilot) => {
          await axios.get(pilot).then((res) => {
            let pilotId = pilot.split("/")[5];
            temp.push({ ...res.data, id: pilotId });
          });
        this.setState({ pilotes: temp });

        });
      }
    });
  }

  render() {
    return (
      <div>
        <div className="bande">
          <h1>{this.state.vaisseau.name}</h1>
        </div>
        <h3>Modèle : {this.state.vaisseau.model}</h3>
        <h3>Constructeur : {this.state.vaisseau.manufacturer}</h3>
        <h3>Pilotes du vaisseau:</h3>
        <ul>
          {this.state.pilotes !== 0 ? (
            this.state.pilotes.map((pilot) => (
              <li key={pilot.id}>
                <Link to={`/Personnage/${pilot.id}`}>{pilot.name}</Link>
              </li>
            ))
          ) : (
            <li>Aucun pilote</li>
          )}
        </ul>
        <Link to="/">Retour à la page d'accueil</Link>
      </div>
    );
  }
}
