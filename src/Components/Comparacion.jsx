import React from 'react';
import '../Css/Comparacion.css'; // asegúrate de que los estilos estén en un archivo CSS

export default function Comparacion() {
  return (
    <div className="home-container">
      <h1 className="home-title">Comparación de Métodos de Encriptación</h1>
      <div className="comparison-container">
        <div className="method">
          <h2>CAST5</h2>
          <p>Es un cifrado de bloque que utiliza una clave simétrica, rápida y eficiente para cifrar datos pequeños. Es adecuado para aplicaciones que requieren velocidad.</p>
        </div>
        <div className="method">
          <h2>Paillier</h2>
          <p>Es un algoritmo de cifrado homomórfico que permite realizar operaciones matemáticas en los datos cifrados. Es útil para aplicaciones que requieren procesamiento de datos sin desencriptar.</p>
        </div>
        <div className="method">
          <h2>Skein</h2>
          <p>Es una función hash criptográfica robusta y flexible. Ofrece una alta resistencia a ataques, adecuada para la integridad y autenticación de datos.</p>
        </div>
      </div>
      <div className="comparison-summary">
        <h2>Comparación General</h2>
        <p>CAST5 es rápido y eficiente, ideal para cifrados simétricos. Paillier permite operaciones matemáticas con datos cifrados, aunque es más lento. Skein, por su parte, se enfoca en la integridad de los datos, siendo robusto y seguro.</p>
      </div>
    </div>
  );
}
