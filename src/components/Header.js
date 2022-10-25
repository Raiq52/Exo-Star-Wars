import React from "react";
import { Link } from "react-router-dom";

export default class Header extends React.Component {
  render() {
    return (
      <div className="bande">
        <h1>{this.props.name}</h1>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/5/5a/Star_Wars_Logo..png"
          className="logo"
          alt=""
        />
        <Link className="return" to="/">
          Retour à la page d'accueil
        </Link>
      </div>
    );
  }
}
