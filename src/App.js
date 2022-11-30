import './App.css';
import Hamburger from './components/Hamburger/Hamburger';
import NavSideBar from './components/NavSideBar/NavSideBar';
import NavBar from './components/NavBar/NavBar';
import HeaderContainer from './components/HeaderContainer/HeaderContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import SideBar from './components/SideBar/SideBar';

function App() {
  return (
    <div className="container">
      <Hamburger />
      < NavSideBar items={['Home', 'My documents', 'My signatures', 'My templates', 'Law upgrade', 'Dashboard']}/>
      <main>
        <header>
          < NavBar />
        </header>
        < HeaderContainer title="Hi, Carlos"/>
        < ItemListContainer/>
        < SideBar />
      </main>
    </div>
  );
}

export default App;
