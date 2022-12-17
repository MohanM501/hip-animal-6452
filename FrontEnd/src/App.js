
import Dashboard from './Admin/Dashboard';
import './App.css';
import MainRoute from './Routes/MainRoute';
import Navbar from "./component/Navbar"

// import {Routes,Route,Link} from "react-router-dom"


function App() {
  return (
    <div className="App">
      
      <Navbar/>
      <MainRoute/>
      
      {/* <Home/> */}
    </div>
  );
}

export default App;
