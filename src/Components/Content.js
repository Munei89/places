import React from 'react'
import { Route } from "react-router-dom";
import Home from '../Pages/HomePage/Home';
import ListOfPlaces from '../Pages/PlacesListPage/ListOfPlaces';
import ImagesGrid from '../Pages/PlacesImagesGrid/ImagesGrid';
import Details from '../Pages/PlaceDetailedPage/Details';
import Favouritise from '../Pages/Favouritise/Favouritise';


const Content = () => {

    return <>

        <Route path="/" exact component={Home}></Route>
        <Route path="/ListOfPlaces" exact component={ListOfPlaces}></Route>
        <Route path="/ImagesGrid" exact component={ImagesGrid}></Route>
        <Route path="/PlaceDetails" exact component={Details}></Route>
        <Route path="/Favouritise" exact component={Favouritise}></Route>
    </>




};

export default Content;
