import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Header from "./Header";

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
        <Header name={this.state.person.name}/>
        <div className="caracs">
          <div className="caracs-p">
            <h3>Couleur des yeux : {this.state.person.eye_color}</h3>
            <h3>Année de naissance : {this.state.person.birth_year}</h3>
            <h3>Genre: {this.state.person.gender}</h3>
            <h3>Vaisseaux utilisés :</h3>
          </div>
          <div className="caracs-vaisseaux">
              {this.state.vaisseaux.length !== 0 ? (
                this.state.vaisseaux.map((vaisseau) => (
                    <Link to={`/Vaisseau/${vaisseau.id}`}>{vaisseau.name}</Link>
                ))
              ) : (
                <p>Aucun vaisseau</p>
              )}
          </div>
        </div>
      </div>
    );
  }
}
