import {Navigate , Route ,Routes} from "react-router-dom";
import './App.css';
import Signup from './pages/signup';
import Home from './pages/Home';
import Login from './pages/login';


 function App(){
    return (
      <div classNamelassName="App">
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
