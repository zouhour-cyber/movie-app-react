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
  const [favoritMovie,setfavoritMovie]=useState([])
  const addfavoriteMovie =(e)=> {
    favoritMovie.push(e)
  
  console.log(favoritMovie) }


  const [movie, setMovie] = useState([])
  const getmovie = ()=>{
    
    fetch('movies.json').then(
          response => response.json()).then 
                   (movies => setMovie(movies));
  }
  
  useEffect(()=> {getmovie()
  },[])

 
//incrémentation favorit icon
  const [favorite,setFavorite] =useState(0)
  const addFAvorite=() =>{
    setFavorite(favorite + 1)
  }

  return (
  <BrowserRouter>
  <div className="app">
          <Route exact path="/" > <Home movie={movie} favorite={favorite} addfavoriteMovie={addfavoriteMovie} favoritMovie={favoritMovie} addFAvorite={addFAvorite}/></Route>
          <Route path="/about"> <About favorite={favorite}/></Route>
          <Route path="/contact" > <Contact favorite={favorite}/></Route>
          <Route path="/favoris"> <Favoris movie={movie} favorite={favorite} favoritMovie={favoritMovie}/></Route>
   
     <Footer/>
     </div>
  </BrowserRouter>
  )}

export default App;
