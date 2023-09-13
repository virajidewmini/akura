import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './pages/home/Home';
import Form from './pages/form/Form';
import Login from './pages/login/Login'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route 
              exact path="/" 
              element={<Home/>} 
          />
          <Route
              exact path="/form" 
              element={<Form/>} 
          />
           <Route
              exact path="/login" 
              element={<Login/>} 
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
