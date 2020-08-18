import React, { useState, useEffect } from 'react'
import SinglePlaceCard from '../../Components/SinglePlaceCard';
import { useSelector, useDispatch } from 'react-redux';

const Favouritise = () => {
    const local_storage_key = "key.fvrt.plcs";
    let fouveritise = JSON.parse(localStorage.getItem(local_storage_key));
    const [fvrtstate,setFvrtState] = useState(fouveritise);

    const callbackfunctionforparent = () =>{
        console.log("from parent",fouveritise);
        console.log("from parent");
        fouveritise = JSON.parse(localStorage.getItem("key.fvrt.plcs"));
        setFvrtState(prevfouveritise => {
           return [...fouveritise]
        }
                );
    }
    // console.log("----------",fouveritise);
    // const Favouritise = useSelector(state => state.FavPReducer);

    //  useEffect(()=>{
    //     setFvrtState(
    // fouveritise
    //     );
    //  },fouveritise)
    // console.log("do i know", Favouritise);
if(fvrtstate !=null)
    return (fvrtstate.map(item => <SinglePlaceCard parenthandler={callbackfunctionforparent} key={item.id} place={item}></SinglePlaceCard>));
else{
    return <h1>Please Add Some Favouritise</h1>

}
}

export default Favouritise