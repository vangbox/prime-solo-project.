import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {Link} from 'react-router-dom';
import { useHistory } from "react-router-dom";
//material ui for delete alert button
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';


import './CharacterCreation.css';

//function for component
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

    //delete alert and button!
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
      };
      const handleClose = () => {
        setOpen(false);
      };
    //delete after hit agreed on alert button
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
        <div className ='container'>
          <h2>Character Creation Page</h2>
            <section className='card'>
            {/* maping the character out from characterCreation store */}
                {characterCreation.map(characterCreation => {
                    return (
                        <div className= 'singleCard' key={characterCreation.id}>
                            <li id ='characterName'>{characterCreation.avatar_name}</li>  
                            <li>{characterCreation.avatar_hair}</li>
                            <li>{characterCreation.avatar_body}</li>
                            <li>{characterCreation.avatar_pant}</li>
                            <li>{characterCreation.avatar_feet}</li>
                            {/* onclick for edit and delete button */}
                            <Button variant="outlined" onClick={() => {handleEdit(characterCreation)}}>Edit</Button>                 
                        
                            <Button variant="outlined" onClick={handleClickOpen}>
                                Delete Character
                            </Button>
                            <Dialog
                                open={open}
                                onClose={handleClose}
                                aria-labelledby="alert-dialog-title"
                                aria-describedby="alert-dialog-description"
                            >
                                <DialogContent>
                                <DialogContentText id="alert-dialog-description">
                                    Are you sure you want to delete your character?
                                </DialogContentText>
                                </DialogContent>
                                <DialogActions>
                                <Button onClick={handleClose}>Disagree</Button>
                                <Button onClick={handleClose} autoFocus>
                                <Button onClick={() => {deleteButton(characterCreation)}}>Agree</Button>
                                </Button>
                                </DialogActions>
                            </Dialog>                          
                        </div> 
                    );
                })}
            </section>
        </div>
      );
}

export default CharacterCreation;