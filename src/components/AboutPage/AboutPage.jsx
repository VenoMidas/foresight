import React from 'react';

// This is one of our simplest components
// It doesn't have local state,
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is'

function AboutPage() {
  return (
    <center className="container">
      <div>
        <h2>About</h2>
        <h3>Technologies Used:</h3>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>Javascript</li>
          <li>React</li>
          <li>Redux</li>
          <li>Material UI</li>
          <li>Node.js</li>
          <li>Express.js</li>
          <li>PostgreSQL</li>
          <li>Postman</li>
        </ul>
      </div>
    </center>
  );
}

export default AboutPage;
