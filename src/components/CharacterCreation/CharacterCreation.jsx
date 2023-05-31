import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {Link} from 'react-router-dom';
import { useHistory } from "react-router-dom";

//import CharacterItem to map
import CharacterItem from './CharacterItem';


function CharacterCreation(){

    
    const dispatch = useDispatch();
    //redux store to hold the character created
    const characterCreation = useSelector(store => store.characterCreation);
    
    //useffect to fetch the character that has been created
    useEffect(() => {
        dispatch ({ type: 'FETCH_CHARACTER_CREATION' });
    }, []);
    
    return (
        <div>
          <p>Character Creation Page</p>
        
            <section>
            {/* maping the character out from characterCreation store */}
            {
            characterCreation.map(characterCreation => {
                return (
                    <div key={characterCreation.id}>
                        <li>{characterCreation.avatar_name}</li>  
                        <li>{characterCreation.avatar_hair}</li>
                        <li>{characterCreation.avatar_body}</li>
                        <li>{characterCreation.avatar_pant}</li>
                        <li>{characterCreation.avatar_feet}</li>
                        <button>Edit</button>
                        <button>Delete</button>                   
                    </div> 
                       
                );
            })}
            </section>
        </div>
      );
}

export default CharacterCreation;