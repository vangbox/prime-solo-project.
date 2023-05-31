import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {Link} from 'react-router-dom';
import { useHistory } from "react-router-dom";

import DeleteConfirm from './DeleteConfirm';

function CharacterCreation(){

    const history = useHistory();
    const dispatch = useDispatch();
    //redux store to hold the character created
    const characterCreation = useSelector(store => store.characterCreation);
    //hadle edit button
    const handleEdit = (characterCreation) => {
        // console.log('test id nowwwww' ,characterCreation.id);
        history.push(`character/edit/${characterCreation.id}`)
    }
    //delete button
    const deleteButton = (characterCreation) => {

        dispatch({ 
            type: 'DELETE_CHARACTER',
            payload: characterCreation.id
          })
    }
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
                        {/* onclick for edit and delete button */}
                        <button onClick={() => {handleEdit(characterCreation)}}>Edit</button>                 
                        <button onClick={() => {deleteButton(characterCreation)}}>Delete</button>  
                        {/* <button onClick={DeleteConfirm}>Delete</button> */}
                    </div> 
                       
                );
            })}
            </section>
        </div>
      );
}

export default CharacterCreation;