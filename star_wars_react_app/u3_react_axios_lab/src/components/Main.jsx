
import { useState } from 'react'
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import StarshipList from './StarshipList';


const Main = () => {
    return(
        <Router>
        <Routes>
          {/* Route for the landing page */}
          <Route path="/" element={<Home />} />
          
          {/* Route for the starships list page */}
          <Route path="/starships" element={<StarshipsList />} />
        </Routes>
      </Router>
    )
}

export default Main