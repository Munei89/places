import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { Link } from "react-router-dom";
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
