import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
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
