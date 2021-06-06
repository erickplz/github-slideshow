import logo from './logo CHUK.png';
import './App.css';
//<p>Edita el <b><u><code>src/App.js</code></u></b> y guarda los cambios para cargar.</p>
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <a
          className="App-link"
          href="https://google.com"
          target="_blank"
          rel="noopener noreferrer"
        >
        Bienvenido la pagina oficial de Servicios Técnicos CHUCK
        </a>
      </header>
    </div>
  );
}

export default App;
