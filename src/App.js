import "./App.css";
import Nav from "./Components/Nav/Nav";
import {  Switch, Route, Link } from "react-router-dom";
import Home from './Containers/Home/Home';
import About from './Containers/About/About';
import { useState } from "react";
import SideDrawer from "./Components/Nav/SideDrawer/SideDrawer";

const  App =()=> {
  const [menuOpen, setMenuOpen] = useState(false);

  const sideBarToggle = ()=>{
    setMenuOpen(!menuOpen)
    console.log(menuOpen)
  }

  return (
    <div className="App">
      <header className="App-header">
        <Nav menuOpen={menuOpen} toggle={sideBarToggle} />
        {menuOpen && <SideDrawer/>}
        
      </header>
      <Route exact path='/' component={Home}/>
      <Route path='/about' component={About}/>
    </div>
  );
}

export default App;
