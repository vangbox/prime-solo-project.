import { useParams, useHistory } from "react-router-dom";
import { useEffect } from "react";
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

    const handleUpdate = (event) => {

        dispatch({
            type: 'UPDATE_CHARACTER',
            payload: event.target.value
        })
    }

    const finalEditBtn = () => {
        dispatch({
            type: 'FINAL_CHARACTER_EDIT',
            payload: characterEdit
        })
        history.push('/characterCreation')
    }
    // console.log('whats is characterEdit', characterEdit);
    return(
        <div>
        <h2>Edit Character</h2>
            <section>
                <form onSubmit={finalEditBtn}>
                    <input 
                        type="text"
                        value = {characterEdit.avatar_name}
                        onChange={handleUpdate}
                    />
                    <button type='submit'>Final Edit</button>
                </form>
            </section>
        </div>
    )
}

export default CharacterEdit;