import './App.css';
import Hamburger from './components/Hamburger/Hamburger';
import SideBar from './components/SideBar/SideBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <div className="container">
      <Hamburger />
      <SideBar />
      <main>
        <header>
          <NavBar />
        </header>
        { /* Pasar la Prop */ }
        <ItemListContainer title=""/>
      </main>
    </div>
  );
}

export default App;
