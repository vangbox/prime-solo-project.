const characterEdit = (state = {}, action) => {
    switch (action.type) {
      case 'SET_CHARACTER_EDIT':
        return action.payload;
      case 'CHANGE_NAME':
        return {
          ...state, 
          avatar_name: action.payload,
        }
      case 'CHANGE_HAIR' :
        return{...state, avatar_hair: action.payload}
      default:
        return state;
    }
};

export default characterEdit;