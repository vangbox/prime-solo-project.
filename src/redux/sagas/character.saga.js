import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';


// worker Saga: will be fired on "FETCH_CHARACTERCREATION" actions
function* fetchCharacterCreation() {
    try {
      const characterCreation = yield axios.get('/api/character')
      console.log('fetch characterCreation', characterCreation);

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
      console.log('create character', createCharacter);
      yield put({ type: 'FETCH_CHARACTER_CREATION' });
    } catch (error) {
      console.log('createCharacter axios POST failed!!', error);
    }
  }


  function* characters() {
    yield takeLatest('FETCH_CHARACTER_CREATION', fetchCharacterCreation);
    yield takeLatest('CREATE_CHARACTER', postCreateCharacter)
  }
  
  export default characters;
