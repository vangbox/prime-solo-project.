import { useParams } from "react-router-dom";

function CharacterEdit(){

    return(
        <div>
        <h2>Edit Character</h2>
            <form>
                <input type="text"/>
                <button>Finalize Edit</button>
            </form>
        </div>
    )
}

export default CharacterEdit;