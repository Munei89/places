
import React, { useState } from 'react'
import SinglePlaceCard from '../../Components/SinglePlaceCard';

const Favouritise = () => {
    const local_storage_key = "key.fvrt.plcs";
    let fouveritise = JSON.parse(localStorage.getItem(local_storage_key));
    const [fvrtstate,setFvrtState] = useState(fouveritise);

    const callbackfunctionforparent = () =>{
        fouveritise = JSON.parse(localStorage.getItem("key.fvrt.plcs"));
        setFvrtState(prevfouveritise => {
           return [...fouveritise]
        }
                );
    }
if(fvrtstate !=null)
    return (fvrtstate.map(item => <SinglePlaceCard parenthandler={callbackfunctionforparent} key={item.id} place={item}></SinglePlaceCard>));
else{
    return <h1>Please Add Some Favouritise</h1>

}
}

export default Favouritise
