import React , {useState,useEffect} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import  Footer from './component/footer';
import Favoris from './component/favoris';
import Contact from './component/contact';
import About from './component/about';
import Home from './component/home';
import { BrowserRouter, Route} from "react-router-dom";

function App() {
  const [movie, setMovie] = useState([])
  const getmovie = ()=>{
    
    fetch('movies.json').then(
          response => response.json()).then 
                   (movies => setMovie(movies));
  }
  
  useEffect(()=> {getmovie()
  },[])

  console.log(movie)
//add to favorit
  const [favorite,setFavorite] =useState(0)
  const addFAvorite=() =>{
    setFavorite(favorite + 1)
  }

  return (
  <BrowserRouter>
  <div className="app">
          <Route exact path="/" > <Home movie={movie} favorite={favorite} addFAvorite={addFAvorite}/></Route>
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/favoris"> <Favoris movie={movie} favorite={favorite}/></Route>
   
     <Footer/>
     </div>
  </BrowserRouter>
  )}

export default App;
