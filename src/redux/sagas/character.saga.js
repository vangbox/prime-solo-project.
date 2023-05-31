import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';


// worker Saga: will be fired on "FETCH_CHARACTERCREATION" actions
function* fetchCharacterCreation() {
    try {
      const characterCreation = yield axios.get('/api/character')
      // console.log('fetch characterCreation', characterCreation);

      yield put({ type: 'GET_CHARACTER_CREATION', payload: characterCreation.data });

    } catch (error) {
      console.log('fetchCharacterCreation axios GET failed!!', error);
    }
  }
  
function* postCreateCharacter(action){
  try{
    const createCharacter = yield axios({
      method: 'POST',
      url: '/api/character',
      data: action.payload
  })
    // console.log('create character', createCharacter);
    yield put({ type: 'FETCH_CHARACTER_CREATION' });
  } catch (error) {
    console.log('createCharacter axios POST failed!!', error);
  }
}

function* fetchCharacterEdit(action){
  try {
    const characterId = action.payload;
    // console.log('what is id', characterId);

    const response = yield axios.get(`/api/character/${characterId}`)
    // console.log('fetch characterEdit', characterId.data);
    const characterEdit = response.data;
    // console.log('what is response.data', characterEdit);

    yield put({ 
      type: 'SET_CHARACTER_EDIT', 
      payload: characterEdit 
    });

  } catch (error) {
    console.log('fetchCharacterEdit axios GET failed!!', error);
  }
}

function* finalCharacterEdit(action){

  try {

    const finalEdit = action.payload;

    const response = yield axios({
      method: 'PUT',
      url: `/api/character/${finalEdit.id}`,
      data: finalEdit
    })
    
    yield put({
      type: 'FETCH_CHARACTER_CREATION'
    })
  } catch (error) {
    console.log('finalizeCharacterEdit axios PUT failed!!', error);
  }
}

function* deleteCharacter(action){
  try {
    const deleteId = action.payload;
    const response = yield axios({
      method: 'DELETE',
      url: `/api/character/${deleteId}`,
      
    })
    yield put({
      type: 'FETCH_CHARACTER_CREATION'
    })
  } catch (error) {
    console.log('deleteCharacter axios DELETE failed!!', error);
  }
}

  function* characters() {
    yield takeLatest('FETCH_CHARACTER_CREATION', fetchCharacterCreation);
    yield takeLatest('CREATE_CHARACTER', postCreateCharacter);
    yield takeLatest('FETCH_CHARACTER_EDIT', fetchCharacterEdit);
    yield takeLatest('FINAL_CHARACTER_EDIT', finalCharacterEdit);
    yield takeLatest('DELETE_CHARACTER', deleteCharacter)
  }
  
  export default characters;
