import React from 'react';
import './scss/App.scss';
import Logo from './img/logo192.png';

class App extends React.Component{
  constructor(props){
    super(props);
    console.log(Logo);
    
  }
  render(){
  return (
    <div className="App">
      <header>
        <img src={Logo} alt="Logo"/>
      </header>
      <div className="contenedor">
        <ul className="actions">
          <li className="actions-action"><a href="/">Descargars</a></li>
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
}

export default App;
