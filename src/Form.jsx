import { useState } from "react";
import { postPuppy } from "./api";

const AddPuppy = () => {
  const [name, setName] = useState("");
  const [breed, setBreed] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault;
    const newDog = await postPuppy(name, breed);
    console.log(newDog);
    setName("");
    setBreed("");
  };
  return (
    <div id="add-puppy-form">
      <h2>Register Puppy</h2>
      <form onSubmit={handleSubmit}>
        <div id="name-input">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={(event) => {
              setName(event.target.value);
            }}
          />
        </div>
        <div id="breed-input">
          <label htmlFor="breed">Breed:</label>
          <input
            type="text"
            breed="breed"
            value={breed}
            onChange={(event) => {
              setBreed(event.target.value);
            }}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
export default AddPuppy;
