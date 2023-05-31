import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {Link} from 'react-router-dom';
import { useHistory } from "react-router-dom";



function CharacterItem(){

    const dispatch = useDispatch();
    // local state to hold in the selected choice to create the avatar
    const [avatarName, setAvatarName] = useState('');
    const [avatarHair, setAvatarHair] = useState('');
    const [avatarBody, setAvatarBody] = useState('');
    const [avatarPant, setAvatarPant] = useState('');
    const [avatarFeet, setAvatarFeet] = useState('');
    
    //handleSubmit to send selected choice to saga
    const handleSubmit = (event) => {
        event.preventDefault();

        const characterInput = {
            name: avatarName,
            hair: avatarHair,
            body: avatarBody,
            pant: avatarPant,
            feet: avatarFeet
        }
        dispatch({
            type: 'CREATE_CHARACTER',
            payload: characterInput
        })

    }
    
    return (
        // form for input for name and radio button for avatar skin 
        <div>  
        <form onSubmit={handleSubmit}>
            {/* input for user to type their name */}
            <div className="input">
                <h3>Enter Your Character Name</h3>
                <input 
                    placeholder="name" 
                    value={avatarName}
                    onChange={(event) => {setAvatarName(event.target.value)}}
                />
            </div>
            {/* character hair color selection */}
            <label>Character Hair Color</label>    
            <div className="radio-hair">
                <input 
                    type='radio'
                    name='hair'
                    value='red'
                    id='red'
                    checked={avatarHair === 'red'}
                    onChange={(event) => {setAvatarHair(event.target.value)}}
                />
                
                <input 
                    type='radio'
                    name='hair'
                    value='blue'
                    id='blue'
                    checked={avatarHair === 'blue'}
                    onChange={(event) => {setAvatarHair(event.target.value)}}
                />
                <input 
                    type='radio'
                    name='hair'
                    value='orange'
                    id='orange'
                    checked={avatarHair === 'orange'}
                    onChange={(event) => {setAvatarHair(event.target.value)}}
                />
                <input 
                    type='radio'
                    name='hair'
                    value='black'
                    id='black'
                    checked={avatarHair === 'black'}
                    onChange={(event) => {setAvatarHair(event.target.value)}}
                />
            </div>
            {/* character body  selection */}
            <label>Character Body Color</label>    
            <div className="radio-body">
                <input 
                    type='radio'
                    name='body'
                    value='red'
                    id='red'
                    checked={avatarBody === 'red'}
                    onChange={(event) => {setAvatarBody(event.target.value)}}
                />
                
                <input 
                    type='radio'
                    name='body'
                    value='blue'
                    id='blue'
                    checked={avatarBody === 'blue'}
                    onChange={(event) => {setAvatarBody(event.target.value)}}
                />
                <input 
                    type='radio'
                    name='body'
                    value='orange'
                    id='orange'
                    checked={avatarBody === 'orange'}
                    onChange={(event) => {setAvatarBody(event.target.value)}}
                />
                <input 
                    type='radio'
                    name='body'
                    value='black'
                    id='black'
                    checked={avatarBody === 'black'}
                    onChange={(event) => {setAvatarBody(event.target.value)}}
                />
            </div>
            {/* character pant color selection */}
            <label>Character Pants Color</label>    
            <div className="radio-body">
                <input 
                    type='radio'
                    name='pant'
                    value='red'
                    id='red'
                    checked={avatarPant === 'red'}
                    onChange={(event) => {setAvatarPant(event.target.value)}}
                />
                
                <input 
                    type='radio'
                    name='pant'
                    value='blue'
                    id='blue'
                    checked={avatarPant === 'blue'}
                    onChange={(event) => {setAvatarPant(event.target.value)}}
                />
                <input 
                    type='radio'
                    name='pant'
                    value='orange'
                    id='orange'
                    checked={avatarPant === 'orange'}
                    onChange={(event) => {setAvatarPant(event.target.value)}}
                />
                <input 
                    type='radio'
                    name='pant'
                    value='black'
                    id='black'
                    checked={avatarPant === 'black'}
                    onChange={(event) => {setAvatarPant(event.target.value)}}
                />
            </div>
            {/* character feet color selection */}
            <label>Character Feet Color</label>    
            <div className="radio-body">
                <input 
                    type='radio'
                    name='feet'
                    value='red'
                    id='red'
                    checked={avatarFeet === 'red'}
                    onChange={(event) => {setAvatarFeet(event.target.value)}}
                />
                
                <input 
                    type='radio'
                    name='feet'
                    value='blue'
                    id='blue'
                    checked={avatarFeet === 'blue'}
                    onChange={(event) => {setAvatarFeet(event.target.value)}}
                />
                <input 
                    type='radio'
                    name='feet'
                    value='orange'
                    id='orange'
                    checked={avatarFeet === 'orange'}
                    onChange={(event) => {setAvatarFeet(event.target.value)}}
                />
                <input 
                    type='radio'
                    name='feet'
                    value='black'
                    id='black'
                    checked={avatarFeet === 'black'}
                    onChange={(event) => {setAvatarFeet(event.target.value)}}
                />
                <button >Edit</button>
            </div>
            <button type='submit'>NEXT</button>
            
        </form>



        </div>
      );
}

export default CharacterItem;