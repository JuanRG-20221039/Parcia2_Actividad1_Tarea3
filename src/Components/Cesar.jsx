import React, { useState } from 'react';
import '../Css/Cesar.css'; // Asegúrate de importar el archivo CSS

export default function Cesar() {
  const [text, setText] = useState('');
  const [shift, setShift] = useState(0);
  const [result, setResult] = useState('');

  // Función para cifrar con el cifrado César
  const encrypt = () => {
    let encryptedText = text.split('').map(char => {
      if (char.match(/[a-z]/i)) {
        let code = char.charCodeAt(0);
        // Para mayúsculas
        if (code >= 65 && code <= 90) {
          return String.fromCharCode(((code - 65 + parseInt(shift)) % 26) + 65);
        }
        // Para minúsculas
        else if (code >= 97 && code <= 122) {
          return String.fromCharCode(((code - 97 + parseInt(shift)) % 26) + 97);
        }
      }
      return char; // No cambia caracteres no alfabéticos
    }).join('');
    setResult(encryptedText);
  };

  // Función para descifrar con el cifrado César
  const decrypt = () => {
    let decryptedText = text.split('').map(char => {
      if (char.match(/[a-z]/i)) {
        let code = char.charCodeAt(0);
        // Para mayúsculas
        if (code >= 65 && code <= 90) {
          return String.fromCharCode(((code - 65 - parseInt(shift) + 26) % 26) + 65);
        }
        // Para minúsculas
        else if (code >= 97 && code <= 122) {
          return String.fromCharCode(((code - 97 - parseInt(shift) + 26) % 26) + 97);
        }
      }
      return char; // No cambia caracteres no alfabéticos
    }).join('');
    setResult(decryptedText);
  };

  // Función para copiar el resultado al portapapeles
  const copyToClipboard = () => {
    navigator.clipboard.writeText(result);
    alert('Texto copiado al portapapeles!');
  };

  return (
    <div className="cesar-container">
      <h1 className="cesar-title">Cifrado César</h1>
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
        <label>Número de saltos:</label>
        <input
          type="number"
          value={shift}
          onChange={(e) => setShift(e.target.value)}
          placeholder="Número de saltos"
          className="form-control"
        />
      </div>
      <div className="button-group">
        <button onClick={encrypt} className="cesar-button">Cifrar</button>
        <button onClick={decrypt} className="cesar-button">Descifrar</button>
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
        <button onClick={copyToClipboard} className="cesar-button">Copiar</button>
      </div>
    </div>
  );
}
