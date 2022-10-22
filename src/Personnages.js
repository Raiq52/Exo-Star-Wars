import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default class Personnages extends React.Component {
  state = {
    persons: [],
  };

  // faire la requête des personnages
  async componentDidMount() {
    const temp = [];
    //boucle pour avoir les 9 pages (dans /people/)
    for (let i = 1; i <= 9; i++) {
      //Requête API
      await axios
        .get(`https://swapi.dev/api/people/?page=${i}&format=json`)
        .then((res) => {
          //Création d'un tableau unique contenant les 9 pages
          temp.push(...res.data.results);
        })
        .catch((error) => {
          console.error(error);
        });
    }
    temp.forEach((personne, i) => {
      personne.id = i + 1;
    });
    this.setState({ persons: temp });
  }

  //render
  render() {
    return (
      <div id="liste">
        <ul>
          {this.state.persons
            .filter((val) => val.name.toLowerCase().includes(this.props.search.toLowerCase()))
            .map((val) => (
              <li key={this.state.persons.indexOf(val)}>
                <Link to={`/Personnage/${val.id}`}>{val.name}</Link>
              </li>
            ))}
        </ul>
      </div>
    );
  }
}
