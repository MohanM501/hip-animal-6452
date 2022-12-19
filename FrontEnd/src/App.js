
import Dashboard from './Admin/Dashboard';
import './App.css';
import MainRoute from './Routes/MainRoute';
import Navbar from "./component/Navbar"
import Cart from './component/Cart';
import Footer from "./component/Footer"
import Home from './component/Home';
// import {Routes,Route,Link} from "react-router-dom"


function App() {
  return (
    <div className="App">
      
      <Navbar/>
      {/* <MainRoute/> */}
      <Home/>
      <Footer/> 
      {/* <Cart/> */}
      
    </div>
  );
}

export default App;
