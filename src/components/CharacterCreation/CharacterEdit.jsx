import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

function CharacterEdit(){

    const params = useParams();
    const dispatch = useDispatch();

    const characterEdit = useSelector(store => store.characterEdit)

    useEffect(() => {
        const characterId = params.id;
        // console.log('characterId', characterId);

        dispatch({
            type: 'FETCH_CHARACTER_EDIT', 
            payload: characterId
        });
    }, []);

    const handleUpdate = (event) => {

        dispatch({
            type: 'UPDATE_CHARACTER_SKIN',
            payload: event.target.value
        })
    }

    function finalizeEdit(){

    }
    // console.log('whats is characterEdit', characterEdit);
    return(
        <div>
        <h2>Edit Character</h2>
            <form onSubmit={finalizeEdit}>
                <input 
                    type="text"
                    value = {characterEdit.avatar_name}
                    onChange={handleUpdate}
                />
                <button>Finalize Edit</button>
            </form>
        </div>
    )
}

export default CharacterEdit;