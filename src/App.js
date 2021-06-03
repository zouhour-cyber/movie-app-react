import React , {useState,useEffect} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import  Footer from './component/footer';
import Favoris from './component/favoris';
import Serie from './component/serie';
import About from './component/about';
import Home from './component/home';
import { BrowserRouter, Route} from "react-router-dom";
import Admin from './component/Admin';
import Dash from './component/dashtable';

import axios from 'axios';

function App() {
  // ---------------------------- Récupérer les films -----------------------------------------/
  const url= 'https://newdash-291b6-default-rtdb.europe-west1.firebasedatabase.app/posts.json'
  
    const [movie, setMovie] = useState([])

    const getmovie = ()=>{ axios.get(url)
    .then (res => { 
      setMovie(res.data)
     console.log("response:", res);
     });
  }
  useEffect(()=> {getmovie()
  },[])

  //-----------------------Notification favorit --------------------------------------------------/
  const [favorite,setFavorite] =useState(0)
  const addFAvorite=() =>{
    setFavorite(favorite + 1)
  }

  //Ajout à la  page favorit
  const [favoritMovie,setfavoritMovie]=useState([])
  const addfavoriteMovie =(e)=> {
    favoritMovie.push(e)
  
  console.log(favoritMovie) }

  //remove item from favorit
  const removeFavoriteMovie=(el)=>{
    let index = favoritMovie.indexOf(el)
    favoritMovie.splice(index,1)
     setfavoritMovie(favoritMovie)
     setFavorite(favorite-1)
  } 

  //remove all items  from favorit
  const removeFavoriteMovieAll=()=>{
    let length = favoritMovie.length
     favoritMovie.splice(0,length)
     setfavoritMovie(favoritMovie)
     setFavorite(favorite-length)
  } 

  return (
  <BrowserRouter>

  <div className="app">
          <Route exact path="/" > <Home movie={movie}  favorite={favorite} addfavoriteMovie={addfavoriteMovie} favoritMovie={favoritMovie} addFAvorite={addFAvorite} /></Route>
          <Route path="/about"> <About movie={movie}  favorite={favorite}  addFAvorite={addFAvorite} addfavoriteMovie={addfavoriteMovie} /></Route>
          <Route path="/serie" > <Serie favorite={favorite} addfavoriteMovie={addfavoriteMovie} favoritMovie={favoritMovie} addFAvorite={addFAvorite}/></Route>
          <Route path="/favoris"> <Favoris removeFavoriteMovieAll={removeFavoriteMovieAll} removeFavoriteMovie={removeFavoriteMovie} movie={movie} favorite={favorite} favoritMovie={favoritMovie}/></Route>
          <Route path="/Admin" ><Admin movie={movie} > </Admin>  </Route>
          <Route path="/Dash" ><Dash movie={movie} > </Dash>  </Route>

     <Footer/>
     </div>
  </BrowserRouter>
  )}

export default App;
