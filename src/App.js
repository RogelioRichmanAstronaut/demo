import './App.css';
import Home from './components/home/Home';
import Selector from './components/selectorIdioma/Selector';

function App() {
  return (
    <div className='principal'>
      <Selector />
      <Home />
    </div>
  );
}

export default App;
