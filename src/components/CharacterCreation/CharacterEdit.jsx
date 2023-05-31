import { useParams, useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function CharacterEdit(){

    const params = useParams();
    const dispatch = useDispatch();
    const history = useHistory();

    const characterEdit = useSelector(store => store.characterEdit)

    useEffect(() => {
        const characterId = params.id;
        // console.log('characterId', characterId);
       
        dispatch({
            type: 'FETCH_CHARACTER_EDIT', 
            payload: characterId
        });
    }, []);

    const handleUpdate = (event, message) => {

        dispatch({
            type: message,
            payload: event.target.value
        })
    }

    const finalEditBtn = (event) => {
        event.preventDefault
    
        dispatch({
            type: 'FINAL_CHARACTER_EDIT',
            payload: characterEdit
        })
        history.push('/characterCreation')
        // console.log('characterEdit', characterEdit);
    }
    // console.log('whats is characterEdit', characterEdit);
    return(
        <div>
        <h2>Edit Character</h2>
            <section>
                <form onSubmit={finalEditBtn}>
                    <div>
                        <input 
                            type="text"
                            value = {characterEdit.avatar_name}
                            onChange={(event) => {handleUpdate(event, 'CHANGE_NAME')}}
                        />
                    </div>
                    <label>Character Hair Color</label>    
                    <div className="radio-hair">
                        <input 
                            type='radio'
                            name='hair'
                            value='red'
                            checked={characterEdit.avatar_hair === 'red'}
                            onChange={(event) => {handleUpdate(event, 'CHANGE_HAIR')}}
                        />
                        
                        <input 
                            type='radio'
                            name='hair'
                            value='blue'
                            checked={characterEdit.avatar_hair === 'blue'}
                            onChange={(event) => {handleUpdate(event, 'CHANGE_HAIR')}}
                        />
                        <input 
                            type='radio'
                            name='hair'
                            value='orange'
                            checked={characterEdit.avatar_hair === 'orange'}
                            onChange={(event) => {handleUpdate(event, 'CHANGE_HAIR')}}
                        />
                        <input 
                            type='radio'
                            name='hair'
                            value='black'
                            checked={characterEdit.avatar_hair === 'black'}
                            onChange={(event) => {handleUpdate(event, 'CHANGE_HAIR')}}
                        />
                    </div>
                    {/* character body  selection */}
                    <label>Character Body Color</label>    
                    <div className="radio-body">
                        <input 
                            type='radio'
                            name='body'
                            value='red'
                            checked={characterEdit.avatar_body === 'red'}
                            onChange={(event) => {handleUpdate(event, 'CHANGE_BODY')}}
                        />
                        
                        <input 
                            type='radio'
                            name='body'
                            value='blue'
                            checked={characterEdit.avatar_body === 'blue'}
                            onChange={(event) => {handleUpdate(event, 'CHANGE_BODY')}}
                        />
                        <input 
                            type='radio'
                            name='body'
                            value='orange'
                            checked={characterEdit.avatar_body === 'orange'}
                            onChange={(event) => {handleUpdate(event, 'CHANGE_BODY')}}
                        />
                        <input 
                            type='radio'
                            name='body'
                            value='black'
                            checked={characterEdit.avatar_body === 'black'}
                            onChange={(event) => {handleUpdate(event, 'CHANGE_BODY')}}
                        />
                    </div> 
                    {/* character pant color selection */}
                    <label>Character Pants Color</label>    
                    <div className="radio-body">
                        <input 
                            type='radio'
                            name='pant'
                            value='red'
                            checked={characterEdit.avatar_pant === 'red'}
                            onChange={(event) => {handleUpdate(event, 'CHANGE_PANT')}}
                        />
                        
                        <input 
                            type='radio'
                            name='pant'
                            value='blue'
                            checked={characterEdit.avatar_pant === 'blue'}
                            onChange={(event) => {handleUpdate(event, 'CHANGE_PANT')}}
                        />
                        <input 
                            type='radio'
                            name='pant'
                            value='orange'
                            checked={characterEdit.avatar_pant === 'orange'}
                            onChange={(event) => {handleUpdate(event, 'CHANGE_PANT')}}
                        />
                        <input 
                            type='radio'
                            name='pant'
                            value='black'
                            checked={characterEdit.avatar_pant === 'black'}
                            onChange={(event) => {handleUpdate(event, 'CHANGE_PANT')}}
                        />
                    </div>
                    {/* character feet color selection */}
                    <label>Character Feet Color</label>    
                    <div className="radio-body">
                        <input 
                            type='radio'
                            name='feet'
                            value='red'
                            checked={characterEdit.avatar_feet === 'red'}
                            onChange={(event) => {handleUpdate(event, 'CHANGE_FEET')}}
                        />
                        
                        <input 
                            type='radio'
                            name='feet'
                            value='blue'
                            checked={characterEdit.avatar_feet === 'blue'}
                            onChange={(event) => {handleUpdate(event, 'CHANGE_FEET')}}
                        />
                        <input 
                            type='radio'
                            name='feet'
                            value='orange'
                            id='orange'
                            checked={characterEdit.avatar_feet === 'orange'}
                            onChange={(event) => {handleUpdate(event, 'CHANGE_FEET')}}
                        />
                        <input 
                            type='radio'
                            name='feet'
                            value='black'
                            id='black'
                            checked={characterEdit.avatar_feet === 'black'}
                            onChange={(event) => {handleUpdate(event, 'CHANGE_FEET')}}
                        />
                    </div>
                    <button type='submit'>Final Edit</button>
                </form>
            </section>
        </div>
    )
}

export default CharacterEdit;