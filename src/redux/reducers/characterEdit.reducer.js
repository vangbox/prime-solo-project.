const characterEdit = (state = {}, action) => {
    switch (action.type) {
      case 'SET_CHARACTER_EDIT':
        return action.payload;
      case 'CHANGE_NAME':
        return {...state, avatar_name: action.payload}
      case 'CHANGE_HAIR' :
        return {...state, avatar_hair: action.payload}
      case 'CHANGE_BODY' :
        return {...state, avatar_body: action.payload}
      case 'CHANGE_PANT' :
        return {...state, avatar_pant: action.payload}
      case 'CHANGE_FEET' :
        return {...state, avatar_feet: action.payload}  
      default:
        return state;
    }
};

export default characterEdit;