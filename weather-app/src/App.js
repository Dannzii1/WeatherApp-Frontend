import React from 'react';
import NavBar from './components/NavBar'
import './App.css';
import ButtonSwitch from './components/ButtonSwitch'
import  DisplayPage from './components/DisplayPage' 


function App() {

  return (
    <div style={{ background: '#f3e5f5' }}>
      <NavBar />
        <ButtonSwitch/>
          <DisplayPage/>
    </div>
  );
}

export default App;
