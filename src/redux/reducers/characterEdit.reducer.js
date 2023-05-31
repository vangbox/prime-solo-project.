const characterEdit = (state = {}, action) => {
    switch (action.type) {
      case 'SET_CHARACTER_EDIT':
        return action.payload;
      default:
        return state;
      case 'UPDATE_CHARACTER_SKIN':
        return {...state, avatar_name: action.payload}
    }
};

export default characterEdit;