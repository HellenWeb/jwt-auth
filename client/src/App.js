import React from 'react';
import { Routes } from './routes'
import {BrowserRouter as Router} from 'react-router-dom';

function App() {
  let routes = Routes(false)
  return (
    <Router>
      <div>
        {routes}
      </div>
    </Router>
  )
}

export default App
