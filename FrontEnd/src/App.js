
import Dashboard from './Admin/Dashboard';
import './App.css';
// import MainRoute from './Routes/MainRoute';
import Navbar from "./component/Navbar"
import Home from "./component/Home"
// import {Routes,Route,Link} from "react-router-dom"


function App() {
  return (
    <div className="App">
      {/* <MainRoute/> */}
      <Navbar/>
      <Home/>
    </div>
  );
}

export default App;
