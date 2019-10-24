import React from 'react';
import './scss/App.scss';
import AceEditor from "react-ace";

class App extends React.Component{
  constructor(props){
    super(props);
    
  }
  componentDidMount(){


  }
  save = ()=>{

  }
  render(){
    return (
      <div className="App">
        <header>
          NAV
        </header>
        <div className="contenedor">
          <div id="editorJS">Editor JS</div>
          <div id="editorCSS">Editor Css</div>
        </div>
        <div className="contenedor">
          <ul className="tabs">
            <li className="noList tabs__tab"><a href="/" className="tab noLink btn">CSS</a></li>
            <li className="noList tabs__tab"><a href="/" className="tab noLink btn">HTMl</a></li>
          </ul>
        </div>
        <div class="contenedor result">        
          <div id="editorHTML" className="active">
            <AceEditor
              mode="javascript"
              theme="monokai"
              name="UNIQUE_ID_OF_DIV"
              editorProps={{ $blockScrolling: true }}
            />
          </div>
          <div className="result__wrapper">
            resultado
          </div>
        </div>
        <div className="contenedor">
          <ul className="actions">
            <li className="actions__action noList"><a className="noLink btn" href="/">Descargar</a></li>
            <li className="actions__action noList"></li>
            <li className="actions__action noList"></li>
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
