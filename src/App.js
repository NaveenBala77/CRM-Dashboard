import './App.css';
import Dashboard from './Components/Design/Dashboard';
// import Mui from './Components/Mui/Mui';
import Table from './Components/Table/Table';
import { getCustomers } from './Components/userbase';
// import 
import { useState } from 'react';
function App() {
  const [data,setdata]=useState("")


  function moveBy(event) {
    setdata(event)
  }
  function closed(event) {
    setdata(event)
  }
  return (
    <div className="App">
      <Dashboard/>
      
    </div>
  );
}

export default App;
