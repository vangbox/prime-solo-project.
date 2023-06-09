import React from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import {useSelector} from 'react-redux';
import {Link} from 'react-router-dom'
//import components

import CharacterItem from '../CharacterCreation/CharacterItem';

function UserPage() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);

  return (
    <div className="container">
      <h2>Welcome, {user.username} to Devil's Cards!</h2>
      {/* button takes you to character creation page */}
      <CharacterItem />    
      <LogOutButton className="btn" />
    </div>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
