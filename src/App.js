import './App.css';
import Navigation from './Components/Navigation';
import SwapForm from './Components/SwapForm';
import Transaction from './Components/Transaction';


function App() {
  return (
    <div className="App">
       <Navigation/>
          <SwapForm/>
        <Transaction/>
    </div>
  );
}

export default App;
