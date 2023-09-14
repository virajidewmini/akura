import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './pages/home/Home';
import Form from './pages/form/Form';
import Class from './pages/class/Class';
import Login from './pages/login/Login';
import ViewStudent from './pages/student/ViewStudent';
import Student  from './pages/student/Student';
import Teacher from './pages/teacher/Teacher';
import Checker from './pages/Checker/Checker';
import ViewChecker from './pages/Checker/viewChecker'
import ViewClass from './pages/class/viewClass'
import Checkin from './pages/checkin/Checkin'
import Updatestudent from './pages/student/updateStudent'



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
              exact path="/viewStudent" 
              element={<ViewStudent/>} 
          />
          <Route 
              exact path="/student/:id" 
              element={<Updatestudent/>} 
          />
          <Route 
              exact path="/teacher" 
              element={<Teacher/>} 
          />
          <Route 
              exact path="/checker" 
              element={<Checker/>} 
          />
          <Route 
              exact path="/checkin" 
              element={<Checkin/>} 
          />
          <Route
              exact path="/form" 
              element={<Form/>} 
          />
          <Route
              exact path="/viewClass" 
              element={<ViewClass/>} 
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
              exact path="/viewChecker" 
              element={<ViewChecker/>} 
          /> 

          <Route
          
          exact path="updateChecker"
          element={<updateChecker/>}
          />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
