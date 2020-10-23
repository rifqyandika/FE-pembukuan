import React from 'react';
import Navbar from './components/Navbar'
import FloadtingButton from './components/FloatingBtn'
import ListOrder from './components/ListOrder'

function App() {
  return (
    <div className="App">
    <Navbar />
    <FloadtingButton />
    <div className="container">
    <ListOrder />
    </div>
    </div>
  );
}

export default App;
