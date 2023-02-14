import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
//import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
//import Services from './components/pages/Services';
//import Products from './components/pages/Products';
//import SignUp from './components/pages/SignUp';
import Home from './components/pages/Home';
import Resume from './components/pages/Resume';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Projects from './components/pages/Projects';
import OtherWork from './components/pages/OtherWork';
import Cards from './components/pages/Cards';

function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Switch>
            <Route path='/' exact>
              <Home/>
            </Route>
            <Route path='/Resume'exact>
              <Resume/>
            </Route>
            <Route path='/Contact'exact>
              <Contact/>
            </Route>
            <Route path='/Projects'exact>
              <Projects/>
            </Route>
            <Route path='/OtherWork'exact>
              <OtherWork/>
            </Route>
            <Route path='/About'exact>
              <About/>
            </Route>
            <Route path = '/Cards' exact>
              <Cards/>
            </Route>
        </Switch>
      </Router>
      <div className='logo-container'>
      </div>
    </>
  );
}

export default App;

//https://www.youtube.com/watch?v=I2UBjN5ER4s