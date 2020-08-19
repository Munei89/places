import React from 'react'
import { useDispatch } from 'react-redux'
import { saveplace } from '../../actions'
import {useState,useRef} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Container, TextField, Button } from '@material-ui/core';
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
  const dispatch = useDispatch();
  const KeyWordRef = useRef();
  const PlaceRef = useRef();
  const [ pllaces ,setplaces] = useState([]);

  const history = useHistory();

  const classes = useStyles();
const searchplaces = () =>
{
   const Search_keyword = document.getElementById("Search-Keyword").value;
   const Placename = document.getElementById("Search-Place").value;
   const query = "https://api.foursquare.com/v2/venues/search?near=" +Placename+"&intent=browse&radius=100000&query="+Search_keyword+"&limit=50&client_id=P5Q4NZUINIQW2PP5YGAN2IM4J0S4ZHN0HAG5NNZKYSSOTLSJ&client_secret=1KOJ5FJAI5AWRDOKONTALJA5SUGAFRUMEDAW1AD2IXGN202M&v=20190425"
   axios.get(query)
      .then(res => {
        // console.log(res.data.response.venues);
        console.log('-----------------');
        console.log(res.data.response.venues);
        console.log('-----------------');
        setplaces(prevPlaces => {
          return res.data.response.venues
        })
  dispatch(saveplace(res.data.response.venues));
  if(res.data.response.venues.length > 0)
      history.push('/ImagesGrid');
      else
      alert("No Result FOund");
      })
    .catch(error => alert("No Result FOund"));
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
    {pllaces}
      </Grid>
      </>
    </Container>)
};

export default Home;
