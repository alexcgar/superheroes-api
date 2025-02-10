// src/App.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [superheroes, setSuperheroes] = useState([]);
  const [newHero, setNewHero] = useState({
    name: "",
    superpower: "",
    humilityScore: "",
  });

  // Obtener lista de superhéroes
  const fetchSuperheroes = async () => {
    try {
      const response = await axios.get("http://localhost:3000/superheroes");
      setSuperheroes(response.data);
    } catch (error) {
      console.error("Error al obtener los superhéroes:", error);
    }
  };

  useEffect(() => {
    fetchSuperheroes();
  }, []);

  // Manejo de cambios en el formulario
  const handleChange = (e) => {
    setNewHero({
      ...newHero,
      [e.target.name]: e.target.value,
    });
  };

  // Enviar formulario
  const handleSubmit = async (e) => {
    e.preventDefault();

    const heroData = {
      ...newHero,
      humilityScore: Number(newHero.humilityScore),
    };

    try {
      await axios.post("http://localhost:3000/superheroes", heroData);
      setNewHero({ name: "", superpower: "", humilityScore: "" });
      fetchSuperheroes();
    } catch (error) {
      console.error("Error al agregar el superhéroe:", error);
    }
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Superhéroes</h1>

      {/* Formulario */}
      <div className="card shadow p-4 mb-4">
        <h2 className="text-center">Agregar Superhéroe</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Nombre:</label>
            <input
              type="text"
              name="name"
              value={newHero.name}
              onChange={handleChange}
              className="form-control"
              placeholder="Ingresa el nombre"
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Superpoder:</label>
            <input
              type="text"
              name="superpower"
              value={newHero.superpower}
              onChange={handleChange}
              className="form-control"
              placeholder="Ingresa el superpoder"
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Humility Score (1-10):</label>
            <input
              type="number"
              name="humilityScore"
              value={newHero.humilityScore}
              onChange={handleChange}
              className="form-control"
              placeholder="Calificación de humildad"
              min="1"
              max="10"
              required
            />
          </div>
          <button type="submit" className="btn btn-primary w-100">
            Agregar Superhéroe
          </button>
        </form>
      </div>

      {/* Lista de Superhéroes */}
      <h2 className="text-center mb-3">Lista de Superhéroes</h2>
      <div className="row">
        {superheroes.map((hero) => (
          <div key={hero.id} className="col-md-4 mb-3">
            <div className="card shadow p-3">
              <h5 className="card-title">{hero.name}</h5>
              <p className="card-text">
                <strong>Superpoder:</strong> {hero.superpower}
              </p>
              <p className="card-text">
                <strong>Humildad:</strong> {hero.humilityScore}/10
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
