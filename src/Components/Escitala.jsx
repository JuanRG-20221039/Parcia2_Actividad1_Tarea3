import React, { useState } from 'react';
import '../Css/Escitala.css'; // Asegúrate de importar el archivo CSS

export default function Escitala() {
  const [text, setText] = useState('');
  const [key, setKey] = useState(0);
  const [result, setResult] = useState('');

  // Función para cifrar con el cifrado Escítala
  const encrypt = () => {
    if (key <= 0) return alert('La clave debe ser mayor que cero');
    let encryptedText = '';
    let rows = [];

    // Crear el número de filas (key)
    for (let i = 0; i < key; i++) {
      rows[i] = '';
    }

    // Distribuir los caracteres en las filas
    for (let i = 0; i < text.length; i++) {
      rows[i % key] += text[i];
    }

    // Concatenar las filas para obtener el texto cifrado
    encryptedText = rows.join('');
    setResult(encryptedText);
  };

  // Función para descifrar con el cifrado Escítala
  const decrypt = () => {
    if (key <= 0 || key > text.length) return alert('Clave inválida');
    let decryptedText = '';
    let rows = Array(key).fill('');
    let columnLength = Math.ceil(text.length / key);
    let currentIndex = 0;

    for (let i = 0; i < key; i++) {
      for (let j = 0; j < columnLength && currentIndex < text.length; j++) {
        rows[i] += text[currentIndex++];
      }
    }

    for (let i = 0; i < columnLength; i++) {
      for (let j = 0; j < key; j++) {
        if (rows[j][i]) {
          decryptedText += rows[j][i];
        }
      }
    }

    setResult(decryptedText);
  };

  // Función para copiar el resultado al portapapeles
  const copyToClipboard = () => {
    navigator.clipboard.writeText(result);
    alert('Texto copiado al portapapeles!');
  };

  return (
    <div className="escitala-container">
      <h1 className="escitala-title">Cifrado Escítala</h1>
      <div className="form-group">
        <label>Texto a Cifrar/Descifrar:</label>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Ingresa el texto"
          className="form-control"
        />
      </div>
      <div className="form-group">
        <label>Clave (Número de Filas):</label>
        <input
          type="number"
          value={key}
          onChange={(e) => setKey(e.target.value)}
          placeholder="Ingresa la clave"
          className="form-control"
        />
      </div>
      <div className="button-group">
        <button onClick={encrypt} className="escitala-button">Cifrar</button>
        <button onClick={decrypt} className="escitala-button">Descifrar</button>
      </div>
      <div className="form-group">
        <label>Resultado:</label>
        <input
          type="text"
          value={result}
          readOnly
          placeholder="El resultado aparecerá aquí"
          className="form-control"
        />
        <button onClick={copyToClipboard} className="escitala-button">Copiar</button>
      </div>
    </div>
  );
}
