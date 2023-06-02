import { useParams, useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
//import css
import './CharacterCreation.css';
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
        <div id="characterEdit">
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
                    <h4>Character Hair Color</h4>    
                    <div className="radio-hair">
                        <input 
                            type='radio'
                            name='hair'
                            value='red'
                            checked={characterEdit.avatar_hair === 'red'}
                            onChange={(event) => {handleUpdate(event, 'CHANGE_HAIR')}}
                        />
                        <label>red</label>
                        <input 
                            type='radio'
                            name='hair'
                            value='blue'
                            checked={characterEdit.avatar_hair === 'blue'}
                            onChange={(event) => {handleUpdate(event, 'CHANGE_HAIR')}}
                        />
                        <label>blue</label>
                        <input 
                            type='radio'
                            name='hair'
                            value='orange'
                            checked={characterEdit.avatar_hair === 'orange'}
                            onChange={(event) => {handleUpdate(event, 'CHANGE_HAIR')}}
                        />
                        <label>orange</label>
                        <input 
                            type='radio'
                            name='hair'
                            value='black'
                            checked={characterEdit.avatar_hair === 'black'}
                            onChange={(event) => {handleUpdate(event, 'CHANGE_HAIR')}}
                        />
                        <label>black</label>
                    </div>
                    {/* character body  selection */}
                    <h4>Character Body Color</h4>    
                    <div className="radio-body">
                        <input 
                            type='radio'
                            name='body'
                            value='red'
                            checked={characterEdit.avatar_body === 'red'}
                            onChange={(event) => {handleUpdate(event, 'CHANGE_BODY')}}
                        />
                        <label>red</label>
                        <input 
                            type='radio'
                            name='body'
                            value='blue'
                            checked={characterEdit.avatar_body === 'blue'}
                            onChange={(event) => {handleUpdate(event, 'CHANGE_BODY')}}
                        />
                        <label>blue</label>
                        <input 
                            type='radio'
                            name='body'
                            value='orange'
                            checked={characterEdit.avatar_body === 'orange'}
                            onChange={(event) => {handleUpdate(event, 'CHANGE_BODY')}}
                        />
                        <label>orange</label>
                        <input 
                            type='radio'
                            name='body'
                            value='black'
                            checked={characterEdit.avatar_body === 'black'}
                            onChange={(event) => {handleUpdate(event, 'CHANGE_BODY')}}
                        />
                        <label>black</label>
                    </div> 
                    {/* character pant color selection */}
                    <h4>Character Pants Color</h4>    
                    <div className="radio-body">
                        <input 
                            type='radio'
                            name='pant'
                            value='red'
                            checked={characterEdit.avatar_pant === 'red'}
                            onChange={(event) => {handleUpdate(event, 'CHANGE_PANT')}}
                        />
                        <label>red</label>
                        <input 
                            type='radio'
                            name='pant'
                            value='blue'
                            checked={characterEdit.avatar_pant === 'blue'}
                            onChange={(event) => {handleUpdate(event, 'CHANGE_PANT')}}
                        />
                        <label>blue</label>
                        <input 
                            type='radio'
                            name='pant'
                            value='orange'
                            checked={characterEdit.avatar_pant === 'orange'}
                            onChange={(event) => {handleUpdate(event, 'CHANGE_PANT')}}
                        />
                        <label>orange</label>
                        <input 
                            type='radio'
                            name='pant'
                            value='black'
                            checked={characterEdit.avatar_pant === 'black'}
                            onChange={(event) => {handleUpdate(event, 'CHANGE_PANT')}}
                        />
                        <label>black</label>
                    </div>
                    {/* character feet color selection */}
                    <h4>Character Feet Color</h4>    
                    <div className="radio-body">
                        <input 
                            type='radio'
                            name='feet'
                            value='red'
                            checked={characterEdit.avatar_feet === 'red'}
                            onChange={(event) => {handleUpdate(event, 'CHANGE_FEET')}}
                        />
                        <label>red</label>
                        <input 
                            type='radio'
                            name='feet'
                            value='blue'
                            checked={characterEdit.avatar_feet === 'blue'}
                            onChange={(event) => {handleUpdate(event, 'CHANGE_FEET')}}
                        />
                        <label>blue</label>
                        <input 
                            type='radio'
                            name='feet'
                            value='orange'
                            id='orange'
                            checked={characterEdit.avatar_feet === 'orange'}
                            onChange={(event) => {handleUpdate(event, 'CHANGE_FEET')}}
                        />
                        <label>orange</label>
                        <input 
                            type='radio'
                            name='feet'
                            value='black'
                            id='black'
                            checked={characterEdit.avatar_feet === 'black'}
                            onChange={(event) => {handleUpdate(event, 'CHANGE_FEET')}}
                        />
                        <label>black</label>
                    </div>
                    <button className='btn' type='submit'>Final Edit</button>
                </form>
            </section>
        </div>
    )
}

export default CharacterEdit;