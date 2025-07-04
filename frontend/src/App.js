import {Navigate , Route ,Routes} from "react-router-dom";
import './App.css';
import Signup from './pages/signup';
import Home from './pages/Home';
import Login from './pages/login';
import { useState } from "react";
import refsrhHandler from "../src/refrshHandler"


 function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const PrivateRoute = ({ element }) => {
    return isAuthenticated ? element : <Navigate to="/login" />
  }
    return (
      <div classNamelassName="App">
        <refsrhHandler setIsAuthenticated={setIsAuthenticated} />
       <Routes>
        <Route path="/" element={<Navigate to="/login"/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/home" element={<Home/>}/>
       </Routes> 
      </div>
    );
}

export default App;
