import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="contenedor">
        <ul className="actions">
          <li className="actions-action"><a href="#">Descargar</a></li>
          <li className="actions-action"></li>
          <li className="actions-action"></li>
        </ul>
      </div>
      <div className="contenedor">
        <div id="editorJS">Editor JS</div>
        <div id="editorCSS">Editor Css</div>
      </div>
      <div className="contenedor">
        <div id="editorHTML">editor html</div>
        <div id="contenedor result">
          <div className="result__wrapper">
            resultado
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
