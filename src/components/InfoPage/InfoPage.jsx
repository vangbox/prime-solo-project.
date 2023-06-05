import React from 'react';
import {Link} from 'react-router-dom'
import './InfoPage.css'
// This is one of our simplest components
// It doesn't have local state
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is

function InfoPage() {
  return (
    <div className="container">
      <p>My application allows the user to experience the life of a child after death wishing to be born back to his/her family. The only way for that to happen is to make an agreement with the Devil to kill all the monsters that escaped from Hell. You control the child as you experience the adventure through hell to kill all the monsters and progress through each floor of hell. 
         As you hit each new floor, you will receive 2 Devil’s Cards to choose from, it may be super powerful, but might have side effects or vice versa. You’ll also be able to get ‘drops’ from monsters you have slain and treasure chest you will find to equip it on yourself. </p>
      
    </div>
  );
}

export default InfoPage;
