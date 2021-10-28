import React from 'react';
import { Routes } from './routes'
import {BrowserRouter as Router} from 'react-router-dom';
import { useAuth } from './hooks/auth.hook'
import { AuthContext } from './context/AuthContext'

function App() {
  const { token, login, logout, userId } = useAuth()
  const isAuthenticated = !!token
  const routes = Routes(isAuthenticated)
  return (
    <AuthContext.Provider value={{token, login, logout, userId}}>
      <Router>
          <div>
            {routes}
          </div>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;