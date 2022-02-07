import React from 'react';
import './commoncss/bootstrap.css';
import './commoncss/font-icon.css';
import './App.css';
import GoogleForm from './components/GoogleForm';
import WeadingDate from './components/WeadingDate';
import CountDown from './components/CountDown';
import Invitation from './components/Invitation';
import WeadingDetails from './components/WeadingDetails2';
import Weadingloaction from './components/Weadingloaction'

function App() {
  return (
    <div className="App">
     <WeadingDate />
     <CountDown />
     <Invitation />
     <GoogleForm />
     <Weadingloaction />
     <WeadingDetails />
    </div>
  );
}

export default App;
