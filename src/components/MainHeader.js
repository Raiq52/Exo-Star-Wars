import React from "react";
import Input from "@mui/material/Input";

export default class MainHeader extends React.Component {
  render() {
    return (
      <div className="bande">
        <h1 className="title">Star Wars - API Project</h1>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/5/5a/Star_Wars_Logo..png"
          className="logo"
          alt=""
        />
        <div className="search">
          <Input
            id="outlined-basic"
            variant="outlined"
            autoFocus
            fullWidth
            placeholder="Search"
            onChange={this.props.handleSearch}
          />
        </div>
      </div>
    );
  }
}
