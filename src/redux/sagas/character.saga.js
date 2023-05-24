// import axios from 'axios';
// import { put, takeLatest } from 'redux-saga/effects';


// // worker Saga: will be fired on "FETCH_CHARACTERCREATION" actions
// function* fetchCharacterCreation() {
//     try {
//       const characterCreation = yield axios.get('/api/character')
//       console.log('fetch characterCreation', characterCreation);

//       yield put({ type: 'SET_CHARACTER_CREATION', payload: characterCreation.data });

//     } catch (error) {
//       console.log('fetchCharacterCreation failed!!', error);
//     }
//   }
  
//   function* characters() {
//     yield takeLatest('FETCH_CHARACTER_CREATION', fetchCharacterCreation);
//   }
  
//   export default characters;
