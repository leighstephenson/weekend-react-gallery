import React from 'react';
import './App.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
import GalleryList from '../GalleryList/GalleryList';


function App() {
  const [galleryList, setGalleryList] = useState('');
  const fetchGalleryData = () => {
    //! GET request
    //console.log('Testing 123');
    axios.get('/gallery').then((response) => {
      //update the array
      setGalleryList(response.data);
    }).catch((error) => {
      console.log(`Error in GET on App. ${error}`);
      alert('Something went wrong in GET on App!')
    });
  }

  useEffect(() => {
    fetchGalleryData();
  }, []); //Don't forget the empty array!

  //! What will display on the DOM
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Gallery of My Life</h1>
      </header>
      

        <GalleryList />

      
  
    </div>
  );
}

export default App;
