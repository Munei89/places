import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { useSelector, useDispatch } from 'react-redux'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import StarIcon from '@material-ui/icons/Star';
import { Container, Grid } from '@material-ui/core';
import Button from "@material-ui/core/Button";
import Tooltip from "@material-ui/core/Tooltip";



const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
    background: {
        marginTop: '15%',
        backgroundImage: `url(${"D:/Projects/Foursquar/my-app/src/assets/asd.jpg"})`,

    },
}));
const ListOfPlaces = () => {
    const classes = useStyles();
    const places = useSelector(state => state.PlacesReducers)
    // console.log("list of places", places);
    
    return (
        places.map(item => {
            return (<div style={{  width: '50%',marginLeft: '28%',justifyContent: 'center'}} key={item.id}>
                <Tooltip  title={item.id} placement="left">
                    <Button >{item.name}</Button>
                </Tooltip>
                <br />
            </div>)
        })


    );
}

export default ListOfPlaces