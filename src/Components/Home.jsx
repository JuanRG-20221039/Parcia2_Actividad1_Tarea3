import React from 'react';
import { Link } from 'react-router-dom';
import '../Css/Home.css';

export default function Home() {
  return (
    <div className="home-container">
      <h1 className="home-title">Bienvenido a la Encriptación de Datos</h1>
      <div className="button-container">
        <Link to="/cesar">
          <button className="home-button">Cifrado César</button>
        </Link>
        <Link to="/escitala">
          <button className="home-button">Cifrado Escítala</button>
        </Link>
        <Link to="/cifrado">
          <button className="home-button">Cifrado CAST5, Paillier y Skein</button>
        </Link>
        <Link to="/comparacion">
          <button className="home-button">COMPARACIONES ENTRE LOS METODOS</button>
        </Link>
      </div>
    </div>
  );
}
