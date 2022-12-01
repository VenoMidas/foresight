import React from 'react';

// This is one of our simplest components
// It doesn't have local state,
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is'

function AboutPage() {
  return (
    <center className="container">
      <div>
        <h2>About Page</h2>
        <p>This about page is for anyone to read!</p>
      </div>
    </center>
  );
}

export default AboutPage;
