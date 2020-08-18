import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { saveplace } from '../../actions'
import {useState,useRef} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Container, TextField, Button, Link } from '@material-ui/core';
import Icon from '@material-ui/core/Icon';
import { Redirect } from 'react-router-dom';
import { useHistory } from "react-router-dom";
import axios from 'axios'


const useStyles = makeStyles((theme) => ({
  background: {
    marginTop: '15%',
    // backgroundImage: `url(${"D:/Projects/Foursquar/my-app/src/assets/asd.jpg"})`,
  },
  inputfields:{
    margin: theme.spacing(1),
      width: '25ch',
  }
}));
//---------------------------Component--------------
const Home = () => {
  const counter = useSelector(state => state.PlacesReducers)
  const dispatch = useDispatch();
  const KeyWordRef = useRef();
  const PlaceRef = useRef();
  const [pllaces,setplaces] = useState([]);

  const history = useHistory();

  const classes = useStyles(); 
const searchplaces = () =>
{
  //  console.log("helloo");
  //  console.log(document.getElementById("Search-Keyword").value);
  //  console.log(document.getElementById("Search-Place").value);
   const Search_keyword = document.getElementById("Search-Keyword").value;
   const Placename = document.getElementById("Search-Place").value;
const query = "https://api.foursquare.com/v2/venues/search?near=" +Placename+"&intent=browse&radius=10000&query="+Search_keyword+"&limit=10&client_id=P5Q4NZUINIQW2PP5YGAN2IM4J0S4ZHN0HAG5NNZKYSSOTLSJ&client_secret=1KOJ5FJAI5AWRDOKONTALJA5SUGAFRUMEDAW1AD2IXGN202M&v=20190425"
    axios.get(query)
      .then(res => {
        // console.log(res.data.response.venues);
        setplaces(prevPlaces => {
          
          return res.data.response.venues
        })
  dispatch(saveplace(res.data.response.venues));
        // console.log('-----------------');
      // console.log(...pllaces);
      // console.log('-----------------');
      history.push('/ImagesGrid');
      });
    // .catch(error => console.log(error));
}
  return (
    <Container maxWidth="xl" disableGutters={true}>
      <>
      <Grid className={classes.background} item xs={12} container direction="column" justify="center" alignItems="center">
            <div>
          <TextField ref={KeyWordRef} className={classes.inputfields} xs={12} id="Search-Keyword" label="Enter Keyword" type="search" variant="outlined" />
          <TextField ref={PlaceRef} className={classes.inputfields} xs={12} id="Search-Place" label="Place Name" type="search" variant="outlined" />
          </div>
          <Button 
        variant="contained"
        color="primary"
        className={classes.button}
        component='a'
        onClick={searchplaces}
      >
        Search
      </Button>
      </Grid>
      </>
    </Container>)
};

export default Home;