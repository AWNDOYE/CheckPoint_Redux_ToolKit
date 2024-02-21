import './App.css';
import AddTache from './Componenents/AddTache';
import Taches from './Componenents/Taches';


function App() {
  return (
    <div className="App">
      <h1 style={{textAlign:'center'}}>LISTE DES TACHES</h1>
      <AddTache/>
      <Taches/>
    </div>
  );
}

export default App;
