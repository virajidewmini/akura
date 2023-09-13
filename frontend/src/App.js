import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './pages/home/Home';
import Form from './pages/form/Form';
<<<<<<< HEAD
import Class from './pages/class/Class';
import Login from './pages/login/Login'
=======
import Login from './pages/login/Login';
<<<<<<< HEAD
import CheckerReg from './pages/checkerReg/CheckerReg'

=======
import ViewStudent from './pages/student/ViewStudent';
import Student from './pages/student/Student'
>>>>>>> d9bb9384ccfbfec9ae388dd66f30c25e9c1e1ea4

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
              exact path="/view" 
              element={<ViewStudent/>} 
          />
          <Route
              exact path="/form" 
              element={<Form/>} 
          />
          <Route
              exact path="/class" 
              element={<Class/>} 
          />
           <Route
              exact path="/login" 
              element={<Login/>} 
          />

           <Route
              exact path="/student" 
              element={<Student/>} 
          />


           <Route
            exact path="/checkerReg"
            element={<CheckerReg/>}
          /> 

        </Routes>
      </Router>
    </div>
  );
}

export default App;
