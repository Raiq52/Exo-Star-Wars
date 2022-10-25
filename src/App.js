import Personnages from "./components/Personnages";
import MainHeader from "./components/MainHeader";
import "./styles/reset.css";
import "./styles/styles.css";
import { useState } from "react";

function App() {
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    let value = e.target.value;
    setSearch(value);
  };

  return (
    <div className="App">
      <MainHeader handleSearch={handleSearch} />
      <Personnages id="liste" search={search} />
    </div>
  );
}

export default App;
