import React, {useState} from 'react';
import logo from './logo.svg';
import About from './About'
import Contact from './Contact'
import PropClass from './PropClass'
import PropFunction from './PropFunction'
import Event from './Event'
import UserList from './UserList'
import './App.css';
import CreateUser from './CreateUser'
import Home from './Home'
import {Navbar, Nav} from 'react-bootstrap';
import {Link, Route, BrowserRouter as Router, Switch} from 'react-router-dom';

function App() {

  const [name, setName] = useState("Avdesh")
  return(
    <div className="App">
      <Router>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="#home"><Link to="/">Home</Link></Nav.Link>
            <Nav.Link href="#about"><Link to="/about">About</Link></Nav.Link>
            <Nav.Link href="#contact"><Link to="/contact">Contact</Link></Nav.Link>
            <Nav.Link href="#user"><Link to="/user">CreateUser</Link></Nav.Link>
            <Nav.Link href="#list"><Link to="/list">UserList</Link></Nav.Link>
            <Nav.Link href="#event"><Link to="/event">Event</Link></Nav.Link>
            <Nav.Link href="#propclass"><Link to="/propclass">PropClass</Link></Nav.Link>
            <Nav.Link href="#propfunctio"><Link to="/propfunction">PropFunction</Link></Nav.Link>
          </Nav>
        </Navbar>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/list">
            <UserList />
          </Route>
          <Route path="/event">
            <Event />
          </Route>
          <Route path="/user">
            <CreateUser />
          </Route>
          <Route path="/propclass">
            <PropClass />
            <button onClick={() => setName("Avdesh Kumar")}>Update Props Class</button>
          </Route>
          <Route path="/propfunction">
            <PropFunction />
            <button onClick={() => setName("Avdesh Kumar")}>Update Prop Function</button>
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router> 
    </div>
  );
}

export default App;
