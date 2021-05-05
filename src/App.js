import React from 'react';
// import {Row, Col, Container} from 'react-bootstrap';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Movie from './component/movie';
import Menu from './component/navbar';
import  Footer from './component/footer';
import Favoris from './component/favoris';
import Contact from './component/contact';
import About from './component/about';
import Home from './component/home';
import { BrowserRouter, Route} from "react-router-dom";


function App() {
  return (
  <BrowserRouter>
  <div className="app">
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/favoris" component={Favoris} />
   
     <Footer/>
     </div>
  </BrowserRouter>
  )}

export default App;
