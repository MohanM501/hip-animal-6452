
// import Dashboard from './Admin/Dashboard';
import './App.css';
// import MainRoute from './Routes/MainRoute';
import Navbar from "./component/Navbar"
import Home from "./component/Home"
import Footer from "./component/Footer"
// import {Routes,Route,Link} from "react-router-dom"


function App() {
  return (
    <div className="App">
      {/* <MainRoute/> */}
      <Navbar/>
      <Home/>
      <Footer/>
    </div>
  );
}

export default App;
