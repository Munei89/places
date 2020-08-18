import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from '../Pages/HomePage/Home';
import ListOfPlaces from '../Pages/PlacesListPage/ListOfPlaces';
import ImagesGrid from '../Pages/PlacesImagesGrid/ImagesGrid';
import Details from '../Pages/PlaceDetailedPage/Details';
import Favouritise from '../Pages/Favouritise/Favouritise';

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
const Content = () => {
    const classes = useStyles();

    return <>

        <Route path="/" exact component={Home}></Route>
        <Route path="/ListOfPlaces" exact component={ListOfPlaces}></Route>
        <Route path="/ImagesGrid" exact component={ImagesGrid}></Route>
        <Route path="/PlaceDetails" exact component={Details}></Route>
        <Route path="/Favouritise" exact component={Favouritise}></Route>
    </>




};

export default Content;