import React, { useState, useEffect } from 'react';
import axios from "axios"
import {BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import AlbumMain from "./AlbumMain.js"
import Album from "./Album.js"
import './App.css';
AlbumHome.css


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <AlbumMain />
        </Route>
        <Route path="/albums/:id">
          <Album />
        </Route>
      </Switch> 
    </Router>
  );
}

export default App;