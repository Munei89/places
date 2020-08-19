import React from 'react'
import { useSelector } from 'react-redux'
import Button from "@material-ui/core/Button";
import Tooltip from "@material-ui/core/Tooltip";


const ListOfPlaces = () => {
    const places = useSelector(state => state.PlacesReducers)

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
