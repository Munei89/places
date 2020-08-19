import React, { useState, useEffect } from 'react'
import SinglePlaceCard from '../../Components/SinglePlaceCard'
import { useSelector } from 'react-redux'

const ImagesGrid = () => {
    const Places = useSelector(state => state.PlacesReducers)
    const [CardState, setCardState] = useState(Places)

    useEffect(() => {
       setCardState(Places)
    }, [Places]);

if(CardState.length >0)
    return(CardState.map(item =>{return <SinglePlaceCard  key={item.id} place={item}></SinglePlaceCard>}));
    else
    return <h1>No Result Fount</h1>
}

export default ImagesGrid
