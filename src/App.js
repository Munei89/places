import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
// import { increment, decrement } from './actions'
import './App.css'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Grid } from '@material-ui/core';
import Header from './Components/Header'
import About from './Components/About'
import Content from './Components/Content';
import Home from './Pages/HomePage/Home';
import ListOfPlaces from './Pages/PlacesListPage/ListOfPlaces';


function App() {
  // const counter = useSelector(state => state.counterReducer)
  // const isLogged = useSelector(state => state.loggedReducer)
  // const dispatch = useDispatch();
  return (
    <Router>

    <div className="App">
    <Grid container direction="column">
          <Grid item xs={12}>
<Header></Header>
          </Grid>
          <Grid container item xs={12} sm={12} >
          <Route path="/" component={Content}></Route>
          {/* <Route path="/Home" exact component={Home}></Route>             */}
          {/* <Route path="/ListOfPlaces" exact component={ListOfPlaces}></Route>                */}
          </Grid>
        </Grid>
        {/* <Nav></Nav> */}
        {/* <Route path="/About" exact component={About}></Route>
        <Route path="/Shop" exact component={Shop}></Route>
      <h1>Counter: {counter}</h1>
      <button onClick={() => dispatch(increment(5))}>+</button>
      <button onClick={() => dispatch(decrement(5))}>-</button>
      {isLogged ? <p>Secret Information</p> : ''} */}
    </div>
      </Router>

  );
}

export default App;
