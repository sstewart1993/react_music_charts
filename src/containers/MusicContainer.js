import React, {useState, useEffect} from 'react';
import MusicSelector from '../components/MusicSelector';
import MusicDetails from '../components/MusicDetails';


const MusicContainer = () => {

    const[music, setMusic] = useState({});
    const[selectedMusicId, setSelectedMusicId] = useState(0);
    const[loaded, setLoaded] = useState(false);


    const getMusic= () => {
        console.log("here we go");
        fetch("https://itunes.apple.com/gb/rss/topsongs/limit=1/json")
        .then(res => res.json())
        .then(data => setMusic(data))
        .then(() => setLoaded(true))
        
    }

    const incrementSelectedMusic =() => {
        const nextMusicIndex = selectedMusicId + 1;
        if(nextMusicIndex <= 20){
            setSelectedMusicId(selectedMusicId + 1)
        }
    }

    const decrementSelectedMusic = () => {
        const nextMusicIndex = selectedMusicId - 1;
        if(nextMusicIndex >= 1){
            setSelectedMusicId(selectedMusicId - 1)
        }
    }

    useEffect(() =>{
        getMusic();
    }, [selectedMusicId])


return(
    <div>
    <h1>Music Charts</h1>
    <MusicSelector 
    onSelectedMusicIncrement = {() => incrementSelectedMusic()} 
    onSelectedMusicDecrement = {() => decrementSelectedMusic()}
    />
    <MusicDetails music = {music}  loaded = {loaded}/>
    </div>
)

}



export default MusicContainer;