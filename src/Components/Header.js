import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import About from './About'
import ListOfPlaces from '../Pages/PlacesListPage/ListOfPlaces';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },

}));

export default function Header() {
  const classes = useStyles();
  const preventDefault = (event) => event.preventDefault();
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Link to="/" style={{color:'white',marginLeft:'45%'}}>Home</Link>
          {/* <Link to="/ListOfPlaces" style={{color:'black'}} >List of Places</Link> */}
          {/* <Link to="/ImagesGrid" style={{color:'green'}} >List of Images</Link> */}
          {/* <Link to="/PlaceDetails" style={{color:'orange'}} >Details</Link> */}
          <Link to="/Favouritise" style={{color:'orange',marginLeft:'2%'}} >Favouritise</Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}