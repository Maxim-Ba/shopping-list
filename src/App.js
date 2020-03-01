import React from 'react';
import './App.css';
import { ListCC } from './components/List/ListCC';
import { HeaderCC } from './components/Header/HeaderCC';


function App() {
  return (
    <div className="App mx-auto ">
      <main className="container-sm d-flex flex-column justify-content-between main">
        <HeaderCC />
        <ListCC />
        <button className='btn btn-primary mt-2 rounded-circle align-self-center button-add' >
          +
        </button>
        <footer className='d-flex justify-content-end'>
          <p >&copy; Балашов Максим</p>
        </footer>
      </main>
    </div>
  );
}

export default App;
