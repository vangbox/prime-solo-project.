import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {Link} from 'react-router-dom';
import { useHistory } from "react-router-dom";




function CharacterCreation(){

    const dispatch = useDispatch();
    const characterCreation = useSelector(store => store.characterCreation);

    useEffect(() => {
        dispatch ({ type: 'FETCH_CHARACTER_CREATION' });
    }, []);
    

    return (


        <div>
          <p>Character Creation Page</p>
        
        <section>
        {
        characterCreation.map(characterCreation => {
            return (
                <div key={characterCreation.id}>
                    <li>{characterCreation.avatar_hair}</li>                    
                </div>     
            );
        })}
    </section>
    </div>
      );
}

export default CharacterCreation;