import './App.css';
import Navbar from "./components/navbar";
import Moviecard from "./components/moveicard";
import { useEffect, useState } from 'react';

function App() {
  
  const fetchmovie=()=>{
    const randy = Math.floor(Math.random()* 10 +1)
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '9cb9b72ffdmsh672191178f9bacfp19548djsn33b7d9e09267',
        'X-RapidAPI-Host': 'anime-db.p.rapidapi.com'
      }
    };
    fetch(`https://anime-db.p.rapidapi.com/anime?page=1&size=10&search=${randy}&genres=${genre}&sortBy=ranking&sortOrder=asc`, options)
      .then(response => response.json())
      .then(data =>{
        console.log(data)
        setresults(data.data)
      })
      .catch(err =>{ 
        console.log("somthing went wrongg")    
    });
  }
  useEffect(()=>{
    fetchmovie()
  },[])
  const [genre,setgenre]=useState("Action")
  const catergory=(e)=>{
    console.log(e.target.innerText)
    setgenre(e.target.innerText)
    fetchmovie()
  }
  const [results,setresults]= useState([])
  const [search,setsearch]=useState("")
  
  const fetchsearch=()=>{
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '9cb9b72ffdmsh672191178f9bacfp19548djsn33b7d9e09267',
        'X-RapidAPI-Host': 'anime-db.p.rapidapi.com'
      }
    };
    fetch(`https://anime-db.p.rapidapi.com/anime?page=1&size=10&search=${search}&genres=Drama&sortBy=ranking&sortOrder=asc`, options)
      .then(response => response.json())
      .then(data =>{
        console.log(data)
        setresults(data.data)
      })
      .catch(err =>{ 
        console.log("somthing went wrongg")    
    });
  }
  return (
    <div className="App">
      <header className='header'>
        <div className='header-wrapper'>
          <div className='headerdiv'><h1>AnimesFree</h1><ion-icon name="videocam" ></ion-icon></div>
          <div className='searchdiv'><input type="text" className="textbox" placeholder='Search' onChange={(e)=> setsearch(e.target.value)}/><button onClick={fetchsearch} className="searchbtn" ><ion-icon name="search"></ion-icon></button></div>
        </div>
      </header>
      <main className='main'>
        <Navbar cat={catergory} />   
          <div className='col'>
            {results.map((res)=>{
              return(
                <>
                  <Moviecard image={res.image} id={res.title} a={res.link} /> 
                </>
              )})}  
          </div>   
      </main>
    </div>
  );
}

export default App;
