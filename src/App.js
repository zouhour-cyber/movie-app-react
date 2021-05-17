import React , {useState,useEffect} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import  Footer from './component/footer';
import Favoris from './component/favoris';
import Serie from './component/serie';
import About from './component/about';
import Home from './component/home';
import { BrowserRouter, Route} from "react-router-dom";

function App() {

  //Notification favorit 
  const [favorite,setFavorite] =useState(0)
  const addFAvorite=() =>{
    setFavorite(favorite + 1)
  }

  //Ajout à la  page favorit
  const [favoritMovie,setfavoritMovie]=useState([])
  const addfavoriteMovie =(e)=> {
    favoritMovie.push(e)
  
  console.log(favoritMovie) }

// Récupérer les films
  const [movie, setMovie] = useState([])
  const getmovie = ()=>{
    
    fetch('movies.json').then(
          response => response.json()).then 
                   (movies => setMovie(movies));
  }
  
  useEffect(()=> {getmovie()
  },[])



  return (
  <BrowserRouter>
  <div className="app">
          <Route exact path="/" > <Home movie={movie} favorite={favorite} addfavoriteMovie={addfavoriteMovie} favoritMovie={favoritMovie} addFAvorite={addFAvorite}/></Route>
          <Route path="/about"> <About movie={movie}  favorite={favorite}/></Route>
          <Route path="/serie" > <Serie favorite={favorite} addfavoriteMovie={addfavoriteMovie} favoritMovie={favoritMovie} addFAvorite={addFAvorite}/></Route>
          <Route path="/favoris"> <Favoris movie={movie} favorite={favorite} favoritMovie={favoritMovie}/></Route>
   
     <Footer/>
     </div>
  </BrowserRouter>
  )}

export default App;
