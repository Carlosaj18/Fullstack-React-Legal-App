import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
      </header>
      <main>
      { /* Pasar la Prop */ }
        <ItemListContainer title="Hola Mundo. Soy un coder developer!"/>
      </main>
    </div>
  );
}

export default App;
