import './App.css';
import {Button }from '@mui/material'
import Navbar from "./components/navbar";
import Moviecard from "./components/moveicard";
import { useEffect, useState } from 'react';

function App() {
  const page = 25000
  const fetchmovie=()=>{
    const randy = Math.floor(Math.random()* 10 +1)
    
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '9cb9b72ffdmsh672191178f9bacfp19548djsn33b7d9e09267',
        'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
      }
    };
    fetch(`https://moviesdatabase.p.rapidapi.com/titles?page=${page}`, options)
      .then(response => response.json())
      .then(data =>{
        console.log(data)
        setimg(data.results[randy].primaryImage.url)
        setname(data.results[randy].primaryImage.caption.plainText)
    })
  }
  useEffect(()=>{
    fetchmovie()
  },[])
    
  const [img,setimg]=useState([])
  const [name,setname]=useState([]) 
  
  const nextpage = ()=>{
    if (img == null){
      page+1
    }
  }
  nextpage()
  return (
    <div className="App">
      <header className='header'>
        <div className='header-wrapper'>
          <div className='headerdiv'><h1>MoviesFree</h1><ion-icon name="videocam" ></ion-icon></div>
          <div className='searchdiv'><input type="text" className="textbox" placeholder='Search' /><ion-icon name="search"></ion-icon></div>
        </div>
      </header>
      <main className='main'>
        <Navbar/>            
          <div className='col1'>
            <Moviecard img={img} name={name}/>
            <Moviecard img={img} name={name}/>
            <Moviecard/>
          </div>
          <div className='col2'>
            <Moviecard/>
            <Moviecard/>
            <Moviecard/>
          </div>
          <div className='col3'>
            <Moviecard/>
            <Moviecard/>
            <Moviecard/>
          </div>  
      </main>
    </div>
  );
}

export default App;
