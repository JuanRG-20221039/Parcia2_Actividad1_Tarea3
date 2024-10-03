import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Components/Home';
import Cesar from './Components/Cesar';
import Escitala from './Components/Escitala';
import Cifrado from './Components/Cifrado'; // Importa el nuevo componente
import Comparacion from './Components/Comparacion';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cesar" element={<Cesar />} />
          <Route path="/escitala" element={<Escitala />} />
          <Route path="/cifrado" element={<Cifrado />} />
          <Route path="/comparacion" element={<Comparacion />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
