import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import PetTable from "./PetTable";

function Inventory() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [pets, setPets] = useState([]);
  const [editPetId, setEditPetId] = useState(null);
  const [newPet, setNewPet] = useState({
    animal: "",
    description: "",
    age: "",
    price: "",
  });
  const [updateMode, setUpdateMode] = useState(false);

  useEffect(() => {
    fetchPets();
  }, []);

  function fetchPets() {
    fetch("http://localhost:3001/api?act=getall")
      .then((res) => res.json())
      .then((result) => {
        setIsLoaded(true);
        setPets(result);
      });
  }

  function addPet() {
    const { animal, description, age, price } = newPet;
    const apiUrl = `http://localhost:3001/api?act=add&animal=${animal}&description=${description}&age=${age}&price=${price}`;

    fetch(apiUrl)
      .then((res) => res.json())
      .then((result) => {
        fetchPets();
        setNewPet({
          animal: "",
          description: "",
          age: "",
          price: "",
        });
      });
  }

  function deletePet(id) {
    fetch(`http://localhost:3001/api?act=delete&id=${id}`)
      .then((res) => res.json())
      .then((result) => {
        fetchPets();
      });
  }

  function updatePet(id) {
    const { animal, description, age, price } = newPet;
    const apiUrl = `http://localhost:3001/api?act=update&id=${id}&animal=${animal}&description=${description}&age=${age}&price=${price}`;

    fetch(apiUrl)
      .then((res) => res.json())
      .then((result) => {
        fetchPets();
        setEditPetId(null); // Reset edit mode
        setUpdateMode(false); // Reset update mode
        setNewPet({
          // Clear the form fields
          animal: "",
          description: "",
          age: "",
          price: "",
        });
      });
  }

  function handleInputChange(event) {
    const { name, value } = event.target;
    setNewPet((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleEditClick(id) {
    const petToUpdate = pets.find((pet) => pet.id === id);
    setNewPet(petToUpdate);
    setEditPetId(id);
    setUpdateMode(true); // Set update mode
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (updateMode) {
      updatePet(editPetId);
    } else {
      addPet();
    }
  }

  if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div>
        <h1>Pets Inventory</h1>
        <PetTable
          pets={pets}
          handleEditClick={handleEditClick}
          deletePet={deletePet}
        />
        <br />
        <h2>Functions</h2>
        <form onSubmit={handleSubmit}>
          <Stack direction="row" spacing={2}>
            <TextField
              id="standard-basic"
              label="Animal"
              variant="standard"
              name="animal"
              value={newPet.animal}
              onChange={handleInputChange}
              placeholder="Animal"
              required
            />
            <TextField
              id="standard-basic"
              label="Description"
              variant="standard"
              name="description"
              value={newPet.description}
              onChange={handleInputChange}
              placeholder="Description"
              required
            />
            <TextField
              id="standard-basic"
              label="Age"
              variant="standard"
              type="number"
              name="age"
              value={newPet.age}
              onChange={handleInputChange}
              placeholder="Age"
              required
            />
            <TextField
              id="standard-basic"
              label="Price"
              variant="standard"
              type="number"
              name="price"
              value={newPet.price}
              onChange={handleInputChange}
              placeholder="Price"
              required
            />
            <Button
              type="submit"
              variant="outlined"
              color="success"
              size="large"
            >
              {updateMode ? "Update Pet" : "Add Pet"}
            </Button>
          </Stack>
        </form>
      </div>
    );
  }
}

export default Inventory;
