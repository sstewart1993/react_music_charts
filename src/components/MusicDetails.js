import React from 'react';

const MusicDetails = ({music, loaded}) =>{

    if(!loaded){
        return(
            <p>Loading....</p>
        )
    }

    return(
        <div>
        <h3>Artist: {music.feed.entry.title.label}</h3>
        </div>
    )
    
}




export default MusicDetails;