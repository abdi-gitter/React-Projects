import './App.css';
import React from 'react'

import {useState} from 'react'
import Input from './components/Input';
import Output from './components/Output'
function App() {
  //I want the state to live here, and i want to pass 
  //the state down to the child component
  //i want another child component to update the state

  const [state, setState] = useState[""];
  return (
    <div className="App">
      {/* component with an input element that updates the state*/}
      <Input />
      {/* component with an h1 element to display the state*/}
      <Output/>
    </div>
  );
}

export default App;
