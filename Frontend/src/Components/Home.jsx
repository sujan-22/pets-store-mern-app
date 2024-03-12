import React from "react";
import pet_inventory from "../Images/pet_inventory.png";
import "./styles.css";

function Home() {
  return (
    <div className="home-container">
      <h1>Welcome to Pet Store</h1>
      <img src={pet_inventory} alt="Pet Inventory" className="pet-image" />
      <p>
        Welcome to our Pet Store! We offer a wide range of pets including dogs,
        cats, birds, reptiles, and more. Whether you're looking for a loyal
        companion or a playful friend, you'll find the perfect pet here.
      </p>
      <p>
        Our experienced staff is dedicated to helping you find the right pet for
        your lifestyle. We provide expert advice on pet care, nutrition, and
        training to ensure that your new pet receives the best possible care.
      </p>
      <p>
        Visit our store today and discover the joy of pet ownership. We look
        forward to welcoming you and your furry friend to our Pet Store family!
      </p>
    </div>
  );
}

export default Home;
