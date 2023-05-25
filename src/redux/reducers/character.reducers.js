const characterCreation = (state = [], action) => {
    switch (action.type) {
      case 'GET_CHARACTER_CREATION':
        return action.payload;
      default:
        return state;
    }
  };
  
 
  export default characterCreation;