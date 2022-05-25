import logo from './logo.svg';
import './App.css';
import Timer from './components/Timer'

function App() {

  return (
    <div className="App">
 <Timer initalValue = {0} finalValue={10} />
    </div>
  );
}

export default App;
