import React from 'react';

import './App.css'
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Grid } from '@material-ui/core';
import Header from './Components/Header'
import Content from './Components/Content';



function App() {

  return (
    <Router>

    <div className="App">
    <Grid container direction="column">
          <Grid item xs={12}>
<Header></Header>
          </Grid>
          <Grid container item xs={12} sm={12} >
          <Route path="/" component={Content}></Route>
          </Grid>
        </Grid>
    </div>
      </Router>

  );
}

export default App;
