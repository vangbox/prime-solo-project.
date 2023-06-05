import React from 'react';

// This is one of our simplest components
// It doesn't have local state,
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is'

function AboutPage() {
  return (
    <div className="container">
      <div>
        <p>Thank You</p>
        <p>Matt, Andrew, Chris and Adam for helping me out!</p>
        <p>Citrine Cohorts!</p>
        <p>What I used: React, JS, Redux, Saga, Reducer, Material UI</p>
      </div>
    </div>
  );
}

export default AboutPage;
