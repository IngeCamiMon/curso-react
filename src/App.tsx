import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom'
import './App.css';
import { Route,Routes } from 'react-router-dom';
import Listado from './pages/Listado';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path='/' element={<Listado/>}/>
        </Routes>
      </div>

    </Router>
  );
}

export default App;
