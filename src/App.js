import React  from 'react';
import { useEffect } from 'react';

const API_URL = 'http://www.omdbapi.com?apikey=79a08b3b';


const  App = () => {

  const searchMovies = async(title) => {
     
    const response =  await  fetch(`${API_URL} &  s = ${title} `) ;

    const data = await response.json();

    console.log(data.Search);
  }

  useEffect  (() => {
 searchMovies ('Spiderman');
  }
 , []
  ) ;
  return (
    <div className="App">
      <h1>Movieland</h1>
      <div className="search">
       <input placeholder = "Search for movies" value = "superman"  onChange = { () => {} }/>
       <img   src={SearchIcon} alt="seaech"  onClick = {() => {}} />
      </div>
      <div className="container">
        <div className="movie">
          <p>{movie1.Year}</p>
        </div>
      </div>
    </div>
  );
}

export default App;
