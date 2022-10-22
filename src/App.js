import Personnages from "./Personnages";
import TextField from "@mui/material/TextField";
import "./reset.css";
import "./styles.css";
import { useState } from "react";


function App() {

  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    let value =  e.target.value;
    setSearch(value);
  }




  return (
    <div className="App">
      <div className="bande">
        <h1 className="title">
          Page d'acceuil
        </h1>
        <div className="search">
        <TextField
          id="outlined-basic"
          variant="outlined"
          fullWidth
          label="Search"
          onChange={handleSearch}
        />
      </div>
      </div>
      <Personnages id="liste"search={search}/>
    </div>
  );
}

export default App;
