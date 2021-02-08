import './App.css';
import panda from './assets/panda.png';

import TechList from './components/TechList'

function App() {
  return (
    <div className="App">
      <h1>Oi Edu</h1>
      <img width="300" src={panda} alt={panda} />
      <TechList />
    </div>
  );
}

export default App;
