import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
export default class Personnage extends React.Component {
  state = {
    person: [],
    vaisseaux: [],
  };

  // faire la requête d'un personnage
  async componentDidMount() {
    let id = window.location.href.split("/")[4];
    await axios.get(`https://swapi.dev/api/people/${id}`).then((res) => {
      this.setState({ person: res.data });
      if (res.data.starships) {
        const temp = [];
        res.data.starships.forEach(async (vaisseau) => {
          await axios.get(vaisseau).then((res) => {
            let shipId = vaisseau.split("/")[5];
            temp.push({ ...res.data, id: shipId });
          });
          this.setState({ vaisseaux: temp });
        });
      }
    });
  }

  render() {
    return (
      <div>
        <div className="bande">
          <h1>{this.state.person.name}</h1>
        </div>
        <h3>Couleur des yeux : {this.state.person.eye_color}</h3>
        <h3>Année de naissance : {this.state.person.birth_year}</h3>
        <h3>Genre: {this.state.person.gender}</h3>
        <h3>Vaisseaux utilisés :</h3>
        <ul>
          {this.state.vaisseaux.length !== 0 ? (
            this.state.vaisseaux.map((vaisseau) => (
              <li key={vaisseau.id}>
                <Link to={`/Vaisseau/${vaisseau.id}`}>{vaisseau.name}</Link>
              </li>
            ))
          ) : (
            <li>Aucun vaisseau</li>
          )}
        </ul>
        <Link to="/">Retour à la page d'accueil</Link>
      </div>
    );
  }
}
