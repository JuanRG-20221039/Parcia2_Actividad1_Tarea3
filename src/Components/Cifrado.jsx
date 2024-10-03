import React, { useState } from 'react';
import '../Css/Cifrado.css'; // Asegúrate de importar el archivo CSS

export default function Cifrado() {
  const [text, setText] = useState('');
  const [result, setResult] = useState('');
  const [selectedCipher, setSelectedCipher] = useState('');

  // Función para simular el cifrado CAST5
  const encryptCAST5 = (input) => {
    return btoa(input.split('').reverse().join('')); // Invertir texto y convertir a base64
  };

  // Función para simular el descifrado CAST5
  const decryptCAST5 = (input) => {
    return atob(input).split('').reverse().join(''); // Convertir de base64 y revertir
  };

  // Función para simular el cifrado Paillier (versión muy simplificada)
  const encryptPaillier = (input) => {
    return input
      .split('')
      .map((char) => char.charCodeAt(0) * 2) // Multiplicar el código ASCII por 2
      .join('-');
  };

  // Función para simular el descifrado Paillier
  const decryptPaillier = (input) => {
    return input
      .split('-')
      .map((char) => String.fromCharCode(char / 2)) // Dividir el código ASCII por 2
      .join('');
  };

  // Función para simular el hashing (Skein)
  const hashSkein = (input) => {
    return btoa(input.split('').reverse().join('')); // Simplemente invierte el texto y lo convierte a base64
  };

  // Función para manejar el cifrado
  const handleEncrypt = () => {
    if (!selectedCipher) return alert('Por favor, selecciona un cifrado');
    
    let encryptedText = '';
    switch (selectedCipher) {
      case 'CAST5':
        encryptedText = encryptCAST5(text);
        break;
      case 'Paillier':
        encryptedText = encryptPaillier(text);
        break;
      case 'Skein':
        encryptedText = hashSkein(text); // Utiliza la función de hash
        break;
      default:
        return;
    }
    setResult(encryptedText);
  };

  // Función para manejar el descifrado
  const handleDecrypt = () => {
    if (!selectedCipher) return alert('Por favor, selecciona un cifrado');
    
    let decryptedText = '';
    switch (selectedCipher) {
      case 'CAST5':
        decryptedText = decryptCAST5(result);
        break;
      case 'Paillier':
        decryptedText = decryptPaillier(result);
        break;
      case 'Skein':
        return alert('No se puede descifrar un hash'); // Hash no es reversible
      default:
        return;
    }
    setResult(decryptedText);
  };

  // Función para copiar el resultado al portapapeles
  const copyToClipboard = () => {
    navigator.clipboard.writeText(result);
    alert('Texto copiado al portapapeles!');
  };

  // Función para limpiar los campos
  const clearText = () => {
    setText('');
    setResult('');
  };

  return (
    <div className="cifrado-container">
      <h1 className="cifrado-title">Cifrados CAST5, Paillier y Skein</h1>
      <div className="form-group" style={{width:"80%"}}>
        <label>Texto a Cifrar/Descifrar:</label>
        <textarea style={{width:"100%"}}
          rows="4"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Ingresa tu mensaje"
          className="form-control"
        />
      </div>

      <div className="button-group">
        <button
          className={`cipher-button ${selectedCipher === 'CAST5' ? 'active' : ''}`}
          onClick={() => setSelectedCipher('CAST5')}
        >
          CAST5
        </button>
        <button
          className={`cipher-button ${selectedCipher === 'Paillier' ? 'active' : ''}`}
          onClick={() => setSelectedCipher('Paillier')}
        >
          Paillier
        </button>
        <button
          className={`cipher-button ${selectedCipher === 'Skein' ? 'active' : ''}`}
          onClick={() => setSelectedCipher('Skein')}
        >
          Skein
        </button>
      </div>

      <div className="button-group">
        <button onClick={handleEncrypt} className="cifrado-button">Cifrar</button>
        <button onClick={handleDecrypt} className="cifrado-button">Descifrar</button>
      </div>

      <div className="form-group" style={{width:"80%"}}>
        <label>Resultado:</label>
        <textarea style={{width:"100%"}}
          rows="4"
          value={result}
          readOnly
          placeholder="El resultado aparecerá aquí"
          className="form-control"
        />
        <button onClick={copyToClipboard} className="cifrado-button" style={{marginRight:10}}>Copiar</button>
        <button onClick={clearText} className="cifrado-button">Limpiar</button>
      </div>
    </div>
  );
}
