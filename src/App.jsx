import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import AllPuppiesDiv from "./Home";
import AddPuppy from "./Form";
import SinglePuppy from "./SinglePuppy";

function App() {
  return (
    <div className="App">
      <header>
        <h1 id="heading">Puppy Bowl</h1>
        <nav>
          <Link to="/" id="home-link">
            Home
          </Link>
          <Link to="/form" id="register-link">
            Register a puppy!
          </Link>
        </nav>
      </header>
      <div id="main-section">
        <Routes>
          <Route path="/" element={<AllPuppiesDiv />} />
          <Route path="/form" element={<AddPuppy />} />
          <Route path="/:id" element={<SinglePuppy />} />
        </Routes>
      </div>
      <footer></footer>
    </div>
  );
}

export default App;
