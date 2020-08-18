import React, { useState } from 'react'
import SinglePlaceCard from '../../Components/SinglePlaceCard'
import { useSelector, useDispatch } from 'react-redux'

const ImagesGrid = () => {
    const Places = useSelector(state => state.PlacesReducers)
    const [CardState,setCardState] = useState(Places)

    return(    
        CardState.map(item =>{
        return( 
        
           <SinglePlaceCard  key={item.id} place={item}></SinglePlaceCard>
        )
    }))
        
    
}

export default ImagesGrid