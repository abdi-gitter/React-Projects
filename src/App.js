import './App.css';
import {useState} from 'react'
import Input from './components/Input';
function App() {
  //I want the state to live here, and i want to pass 
  //the state down to the child component
  //i want another child component to update the state

  const [state, setState] = useState[""];
  return (
    <div className="App">
      <Input />
    </div>
  );
}

export default App;
