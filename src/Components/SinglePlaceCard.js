import React from 'react';
import { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import axios from 'axios';
import noimage from '../assets/asd.jpg'
import { Grid } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import { favouritise } from '../actions'



const useStyles = makeStyles((theme) => ({
    root: {
        // height: '470px',
        width: '500px',
        marginLeft: '3%',
        marginTop: '3%',
        marginBottom: '3%'
    },

    media: {

        paddingTop: '56.25%', // 16:9
    },
    expand: {
        transform: 'rotate(60deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: red[500],
    },
}));

export default function SinglePlaceCard(props) {

    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);
    const [myfvrtplcs, setmyfvrtplcs] = useState([]);
    let Favouritiseredux = useSelector(state => state.FavPReducer)
    const dispatch = useDispatch();
    // console.log("props", props);
    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    const local_storage_key = "key.fvrt.plcs"
    const Getimages = () => {

        //     const query = "https://api.foursquare.com/v2/venues/"+props.place.id+"/photos?client_id=P5Q4NZUINIQW2PP5YGAN2IM4J0S4ZHN0HAG5NNZKYSSOTLSJ&client_secret=1KOJ5FJAI5AWRDOKONTALJA5SUGAFRUMEDAW1AD2IXGN202M&v=20190425&group=venue&limit=10" 
        // axios.get(query).
        // then(res => {
        //     console.log('-----------------');
        //     console.log(res);
        //     console.log(res.data.response.photos.count);
        //     console.log(res.data.response.photos.items);
        //   console.log('-----------------');
        //   if(res.data.response.photos.count>0)
        //   return ""
        //   else
        //   return noimage
        //   });
        return noimage
    }
    
    //  useEffect(()=>{
         
    //     dispatch(favouritise(JSON.parse(localStorage.getItem(local_storage_key))));
    //     console.log("why me",JSON.parse(localStorage.getItem(local_storage_key)))
    //  },myfvrtplcs)
    console.log("propertise =>>>>>>", props)
    console.log("has own =>>>>>>", props.hasOwnProperty('parenthandler') )
     
    function SaveMe() {
        // localStorage.clear();
        
        let fvrtsfromlocal = JSON.parse(localStorage.getItem(local_storage_key))
         console.log("from local at first", fvrtsfromlocal)
        if (fvrtsfromlocal == null) {
            let fvrtarray = [];
            fvrtarray.push(props.place)
            localStorage.setItem(local_storage_key, JSON.stringify(fvrtarray));
            // dispatch(favouritise(fvrtarray));
            // setmyfvrtplcs(item => {
            //     return [...fvrtarray]
            // })
        }
        else {
            const count = fvrtsfromlocal.length;
            const newarray = fvrtsfromlocal.filter(item => item.id != props.place.id);
            if (count === newarray.length) {
                newarray.push(props.place);
                localStorage.clear();
                localStorage.setItem(local_storage_key, JSON.stringify(newarray));
                // dispatch(favouritise(newarray));
                // setmyfvrtplcs(item => {
                //     return [...newarray]
                // })
            }
            else {
                localStorage.clear();
                localStorage.setItem(local_storage_key, JSON.stringify(newarray));
                // window.location.reload();

                // dispatch(favouritise(newarray));
                // setmyfvrtplcs(item => {
                //     return [...newarray]
                // })
                
            }


        }
        if(props.hasOwnProperty('parenthandler'))
        {
            console.log("-------------------------------------")
            props.parenthandler();
        }
        // console.log("from local storage", JSON.parse(localStorage.getItem(local_storage_key)));
    }
    return (


        <Card key={props.place.id} className={classes.root}>
            <CardHeader
                title={props.place.name}
                subheader={props.place.categories[0].name}
            />
            <CardMedia
                className={classes.media}
                image={Getimages()}
                title={props.place.name}
            />
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                    Address: {props.place.location.address}
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites" onClick={SaveMe}>
                    <FavoriteIcon />
                </IconButton>
                <IconButton
                    className={clsx(classes.expand, {
                        [classes.expandOpen]: expanded,
                    })}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                >
                    <ExpandMoreIcon />
                </IconButton>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <Typography paragraph>Details:</Typography>
                    <Typography paragraph>
                        Name:{props.place.name}
                    </Typography>
                    <Typography paragraph>
                        Category:{props.place.categories[0].name}
                    </Typography>
                    <Typography paragraph>
                        Country:{props.place.location.country}<br />
            State:{props.place.location.state}<br />
            City:{props.place.location.city}<br />
            Address:{props.place.location.address}

                    </Typography>
                    <Typography>
                        Lat:{props.place.location.lat}
            Lng:{props.place.location.lng}
                    </Typography>
                </CardContent>
            </Collapse>
        </Card>
    );
}
