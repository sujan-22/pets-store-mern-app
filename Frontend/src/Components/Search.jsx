import React from "react";
import PetTable from "./PetTable";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import { useState, useEffect } from "react";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [allPets, setAllPets] = useState([]);

  useEffect(() => {
    fetchPets();
  }, []);

  function fetchPets() {
    fetch("http://localhost:3001/api?act=getall")
      .then((res) => res.json())
      .then((result) => {
        setAllPets(result);
        setSearchResults(result);
      });
  }

  function handleSearchInputChange(event) {
    const term = event.target.value.toLowerCase();
    setSearchTerm(term);
    const filteredPets = allPets.filter((pet) =>
      pet.animal.toLowerCase().includes(term)
    );
    setSearchResults(filteredPets);
  }

  return (
    <div>
      <h1>Search for Pets</h1>
      <Stack direction="row" spacing={2}>
        <TextField
          id="standard-basic"
          label="Animal"
          variant="outlined"
          name="animal"
          value={searchTerm}
          onChange={handleSearchInputChange}
          placeholder="Search for pets..."
          required
        />
      </Stack>
      <br />
      <PetTable pets={searchResults} showButtons={false} />
    </div>
  );
};

export default Search;
