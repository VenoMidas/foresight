import React from 'react';
import './AboutPage.css';
import Footer from '../Footer/Footer';

function AboutPage() {
  return (
    <center className="container">
      <div>
      <h1>#About</h1>
        <h3>Technologies Used:</h3>
          <p>HTML</p>
          <p>CSS</p>
          <p>Javascript</p>
          <p>React</p>
          <p>Redux</p>
          <p>Material UI</p>
          <p>Node.js</p>
          <p>Express.js</p>
          <p>PostgreSQL</p>
          <p>Postman</p>
      </div>
      <br />
      <br />
      <Footer />
    </center>
  );
}

export default AboutPage;
